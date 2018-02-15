import {
    ConfigCustomizationDefinition,
    ConfigurationPropertyDefinition,
    CustomizationProvider,
    MiddlewareCustomizationDefinition,
    ServiceCustomizationDefinition
} from '@aws/build-types';
import {
    packageNameToVariable
} from '../../packageNameToVariable';
import { IMPORTS } from '../../internalImports';
import {
    base64Encoder,
    md5,
    sha256,
} from '../customizationsFromModel/standardConfigurationProperties';

const md5Checksum: MiddlewareCustomizationDefinition = {
    imports: [
        IMPORTS['apply-body-checksum-middleware'],
    ],
    step: 'build',
    priority: 0,
    type: 'Middleware',
    tags: `{BODY_CHECKSUM: true}`,
    expression:
`${packageNameToVariable('@aws/apply-body-checksum-middleware')}.applyBodyChecksumMiddleware(
    'Content-MD5',
    configuration.md5,
    configuration.base64Encoder,
    configuration.streamHasher
)`,
    configuration: {
        md5,
        base64Encoder,
    }
};

const sha256Checksum: MiddlewareCustomizationDefinition = {
    imports: [
        IMPORTS['apply-body-checksum-middleware'],
    ],
    step: 'build',
    priority: 0,
    type: 'Middleware',
    tags: `{BODY_CHECKSUM: true}`,
    expression:
`${packageNameToVariable('@aws/apply-body-checksum-middleware')}.applyBodyChecksumMiddleware(
    'x-amz-content-sha256',
    configuration.sha256,
    configuration.base64Encoder,
    configuration.streamHasher
)`,
    configuration: {
        sha256,
        base64Encoder,
    }
};

const disableBodySigning: ConfigurationPropertyDefinition = {
    type: 'unified',
    documentation: 'Whether body signing should be disabled. Body signing can only be disabled when using HTTPS',
    inputType: 'boolean',
    required: false,
    default: {
        type: 'provider',
        expression: `(configuration: { sslEnabled: boolean }) => configuration.sslEnabled`
    }
};

/**
* @internal
*/
export function streamHasherProperty(
   streamType: string
): ConfigurationPropertyDefinition {
    return {
        type: 'forked',
        inputType: `${packageNameToVariable('@aws/types')}.StreamCollector<${streamType}>`,
        documentation: 'A function that, given a hash constructor and a stream, calculates the hash of the streamed value',
        browser: {
            required: false,
            imports: [ IMPORTS['hash-blob-browser'] ],
            default: {
                type: 'value',
                expression: `${packageNameToVariable('@aws/hash-blob-browser')}.calculateSha256'`
            },
        },
        node: {
            required: false,
            imports: [ IMPORTS['hash-stream-node'] ],
            default: {
                type: 'value',
                expression: `${packageNameToVariable('@aws/hash-stream-node')}.calculateSha256'`
            },
        },
        universal: {
            required: false,
        },
    };
}

const disableBodySigningCustomization: ConfigCustomizationDefinition = {
    type: 'Configuration',
    configuration: {
        disableBodySigning,
    }
};

const unsignedPayload: MiddlewareCustomizationDefinition = {
    imports: [
        IMPORTS['sigv4-unsigned-payload-middleware'],
    ],
    step: 'build',
    priority: sha256Checksum.priority + 100,
    type: 'Middleware',
    tags: `{BODY_CHECKSUM: true, UNSIGNED_PAYLOAD: true}`,
    expression: `${packageNameToVariable('@aws/middleware-header-default')}.headerDefault({'x-amz-content-sha256': 'UNSIGNED_PAYLOAD'})`,
    conditionExpression: `configuration.disableBodySigning`,
    configuration: {
        disableBodySigning
    }
};

export const bodySigningCustomizations: CustomizationProvider = () => {
    return {
        commands: {
            DeleteObjects: [
                md5Checksum,
            ],
            PutBucketCors: [
                md5Checksum,
            ],
            PutBucketLifecycle: [
                md5Checksum,
            ],
            PutBucketLifecycleConfiguration: [
                md5Checksum,
            ],
            PutBucketPolicy: [
                md5Checksum,
            ],
            PutBucketTagging: [
                md5Checksum,
            ],
            PutBucketReplication: [
                md5Checksum,
            ],
            PutObject: [
                unsignedPayload,
                sha256Checksum,
            ],
            UploadPart: [
                unsignedPayload,
                sha256Checksum,
            ],
        },
        client: [
            {
                type: 'Configuration',
                configuration: {
                    disableBodySigning,
                    streamHasher: streamHasherProperty('Blob'),
                }
            },
        ],
    };
}
