// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultFSxHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateFileSystemAliasesCommandInput,
  AssociateFileSystemAliasesCommandOutput,
} from "./commands/AssociateFileSystemAliasesCommand";
import {
  CancelDataRepositoryTaskCommandInput,
  CancelDataRepositoryTaskCommandOutput,
} from "./commands/CancelDataRepositoryTaskCommand";
import { CopyBackupCommandInput, CopyBackupCommandOutput } from "./commands/CopyBackupCommand";
import {
  CopySnapshotAndUpdateVolumeCommandInput,
  CopySnapshotAndUpdateVolumeCommandOutput,
} from "./commands/CopySnapshotAndUpdateVolumeCommand";
import { CreateBackupCommandInput, CreateBackupCommandOutput } from "./commands/CreateBackupCommand";
import {
  CreateDataRepositoryAssociationCommandInput,
  CreateDataRepositoryAssociationCommandOutput,
} from "./commands/CreateDataRepositoryAssociationCommand";
import {
  CreateDataRepositoryTaskCommandInput,
  CreateDataRepositoryTaskCommandOutput,
} from "./commands/CreateDataRepositoryTaskCommand";
import { CreateFileCacheCommandInput, CreateFileCacheCommandOutput } from "./commands/CreateFileCacheCommand";
import { CreateFileSystemCommandInput, CreateFileSystemCommandOutput } from "./commands/CreateFileSystemCommand";
import {
  CreateFileSystemFromBackupCommandInput,
  CreateFileSystemFromBackupCommandOutput,
} from "./commands/CreateFileSystemFromBackupCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import {
  CreateStorageVirtualMachineCommandInput,
  CreateStorageVirtualMachineCommandOutput,
} from "./commands/CreateStorageVirtualMachineCommand";
import { CreateVolumeCommandInput, CreateVolumeCommandOutput } from "./commands/CreateVolumeCommand";
import {
  CreateVolumeFromBackupCommandInput,
  CreateVolumeFromBackupCommandOutput,
} from "./commands/CreateVolumeFromBackupCommand";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "./commands/DeleteBackupCommand";
import {
  DeleteDataRepositoryAssociationCommandInput,
  DeleteDataRepositoryAssociationCommandOutput,
} from "./commands/DeleteDataRepositoryAssociationCommand";
import { DeleteFileCacheCommandInput, DeleteFileCacheCommandOutput } from "./commands/DeleteFileCacheCommand";
import { DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput } from "./commands/DeleteFileSystemCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import {
  DeleteStorageVirtualMachineCommandInput,
  DeleteStorageVirtualMachineCommandOutput,
} from "./commands/DeleteStorageVirtualMachineCommand";
import { DeleteVolumeCommandInput, DeleteVolumeCommandOutput } from "./commands/DeleteVolumeCommand";
import { DescribeBackupsCommandInput, DescribeBackupsCommandOutput } from "./commands/DescribeBackupsCommand";
import {
  DescribeDataRepositoryAssociationsCommandInput,
  DescribeDataRepositoryAssociationsCommandOutput,
} from "./commands/DescribeDataRepositoryAssociationsCommand";
import {
  DescribeDataRepositoryTasksCommandInput,
  DescribeDataRepositoryTasksCommandOutput,
} from "./commands/DescribeDataRepositoryTasksCommand";
import { DescribeFileCachesCommandInput, DescribeFileCachesCommandOutput } from "./commands/DescribeFileCachesCommand";
import {
  DescribeFileSystemAliasesCommandInput,
  DescribeFileSystemAliasesCommandOutput,
} from "./commands/DescribeFileSystemAliasesCommand";
import {
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "./commands/DescribeFileSystemsCommand";
import {
  DescribeSharedVpcConfigurationCommandInput,
  DescribeSharedVpcConfigurationCommandOutput,
} from "./commands/DescribeSharedVpcConfigurationCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "./commands/DescribeSnapshotsCommand";
import {
  DescribeStorageVirtualMachinesCommandInput,
  DescribeStorageVirtualMachinesCommandOutput,
} from "./commands/DescribeStorageVirtualMachinesCommand";
import { DescribeVolumesCommandInput, DescribeVolumesCommandOutput } from "./commands/DescribeVolumesCommand";
import {
  DisassociateFileSystemAliasesCommandInput,
  DisassociateFileSystemAliasesCommandOutput,
} from "./commands/DisassociateFileSystemAliasesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ReleaseFileSystemNfsV3LocksCommandInput,
  ReleaseFileSystemNfsV3LocksCommandOutput,
} from "./commands/ReleaseFileSystemNfsV3LocksCommand";
import {
  RestoreVolumeFromSnapshotCommandInput,
  RestoreVolumeFromSnapshotCommandOutput,
} from "./commands/RestoreVolumeFromSnapshotCommand";
import {
  StartMisconfiguredStateRecoveryCommandInput,
  StartMisconfiguredStateRecoveryCommandOutput,
} from "./commands/StartMisconfiguredStateRecoveryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateDataRepositoryAssociationCommandInput,
  UpdateDataRepositoryAssociationCommandOutput,
} from "./commands/UpdateDataRepositoryAssociationCommand";
import { UpdateFileCacheCommandInput, UpdateFileCacheCommandOutput } from "./commands/UpdateFileCacheCommand";
import { UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput } from "./commands/UpdateFileSystemCommand";
import {
  UpdateSharedVpcConfigurationCommandInput,
  UpdateSharedVpcConfigurationCommandOutput,
} from "./commands/UpdateSharedVpcConfigurationCommand";
import { UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput } from "./commands/UpdateSnapshotCommand";
import {
  UpdateStorageVirtualMachineCommandInput,
  UpdateStorageVirtualMachineCommandOutput,
} from "./commands/UpdateStorageVirtualMachineCommand";
import { UpdateVolumeCommandInput, UpdateVolumeCommandOutput } from "./commands/UpdateVolumeCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateFileSystemAliasesCommandInput
  | CancelDataRepositoryTaskCommandInput
  | CopyBackupCommandInput
  | CopySnapshotAndUpdateVolumeCommandInput
  | CreateBackupCommandInput
  | CreateDataRepositoryAssociationCommandInput
  | CreateDataRepositoryTaskCommandInput
  | CreateFileCacheCommandInput
  | CreateFileSystemCommandInput
  | CreateFileSystemFromBackupCommandInput
  | CreateSnapshotCommandInput
  | CreateStorageVirtualMachineCommandInput
  | CreateVolumeCommandInput
  | CreateVolumeFromBackupCommandInput
  | DeleteBackupCommandInput
  | DeleteDataRepositoryAssociationCommandInput
  | DeleteFileCacheCommandInput
  | DeleteFileSystemCommandInput
  | DeleteSnapshotCommandInput
  | DeleteStorageVirtualMachineCommandInput
  | DeleteVolumeCommandInput
  | DescribeBackupsCommandInput
  | DescribeDataRepositoryAssociationsCommandInput
  | DescribeDataRepositoryTasksCommandInput
  | DescribeFileCachesCommandInput
  | DescribeFileSystemAliasesCommandInput
  | DescribeFileSystemsCommandInput
  | DescribeSharedVpcConfigurationCommandInput
  | DescribeSnapshotsCommandInput
  | DescribeStorageVirtualMachinesCommandInput
  | DescribeVolumesCommandInput
  | DisassociateFileSystemAliasesCommandInput
  | ListTagsForResourceCommandInput
  | ReleaseFileSystemNfsV3LocksCommandInput
  | RestoreVolumeFromSnapshotCommandInput
  | StartMisconfiguredStateRecoveryCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDataRepositoryAssociationCommandInput
  | UpdateFileCacheCommandInput
  | UpdateFileSystemCommandInput
  | UpdateSharedVpcConfigurationCommandInput
  | UpdateSnapshotCommandInput
  | UpdateStorageVirtualMachineCommandInput
  | UpdateVolumeCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateFileSystemAliasesCommandOutput
  | CancelDataRepositoryTaskCommandOutput
  | CopyBackupCommandOutput
  | CopySnapshotAndUpdateVolumeCommandOutput
  | CreateBackupCommandOutput
  | CreateDataRepositoryAssociationCommandOutput
  | CreateDataRepositoryTaskCommandOutput
  | CreateFileCacheCommandOutput
  | CreateFileSystemCommandOutput
  | CreateFileSystemFromBackupCommandOutput
  | CreateSnapshotCommandOutput
  | CreateStorageVirtualMachineCommandOutput
  | CreateVolumeCommandOutput
  | CreateVolumeFromBackupCommandOutput
  | DeleteBackupCommandOutput
  | DeleteDataRepositoryAssociationCommandOutput
  | DeleteFileCacheCommandOutput
  | DeleteFileSystemCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteStorageVirtualMachineCommandOutput
  | DeleteVolumeCommandOutput
  | DescribeBackupsCommandOutput
  | DescribeDataRepositoryAssociationsCommandOutput
  | DescribeDataRepositoryTasksCommandOutput
  | DescribeFileCachesCommandOutput
  | DescribeFileSystemAliasesCommandOutput
  | DescribeFileSystemsCommandOutput
  | DescribeSharedVpcConfigurationCommandOutput
  | DescribeSnapshotsCommandOutput
  | DescribeStorageVirtualMachinesCommandOutput
  | DescribeVolumesCommandOutput
  | DisassociateFileSystemAliasesCommandOutput
  | ListTagsForResourceCommandOutput
  | ReleaseFileSystemNfsV3LocksCommandOutput
  | RestoreVolumeFromSnapshotCommandOutput
  | StartMisconfiguredStateRecoveryCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDataRepositoryAssociationCommandOutput
  | UpdateFileCacheCommandOutput
  | UpdateFileSystemCommandOutput
  | UpdateSharedVpcConfigurationCommandOutput
  | UpdateSnapshotCommandOutput
  | UpdateStorageVirtualMachineCommandOutput
  | UpdateVolumeCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type FSxClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  RetryInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of FSxClient class constructor that set the region, credentials and other options.
 */
export interface FSxClientConfig extends FSxClientConfigType {}

/**
 * @public
 */
export type FSxClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of FSxClient class. This is resolved and normalized from the {@link FSxClientConfig | constructor configuration interface}.
 */
export interface FSxClientResolvedConfig extends FSxClientResolvedConfigType {}

/**
 * <p>Amazon FSx is a fully managed service that makes it easy for storage and
 *             application administrators to launch and use shared file storage.</p>
 * @public
 */
export class FSxClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  FSxClientResolvedConfig
> {
  /**
   * The resolved configuration of FSxClient class. This is resolved and normalized from the {@link FSxClientConfig | constructor configuration interface}.
   */
  readonly config: FSxClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<FSxClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveUserAgentConfig(_config_4);
    const _config_6 = resolveRetryConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
        identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
  private getDefaultHttpAuthSchemeParametersProvider() {
    return defaultFSxHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: FSxClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
