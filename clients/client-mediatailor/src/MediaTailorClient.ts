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
  defaultMediaTailorHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  ConfigureLogsForChannelCommandInput,
  ConfigureLogsForChannelCommandOutput,
} from "./commands/ConfigureLogsForChannelCommand";
import {
  ConfigureLogsForPlaybackConfigurationCommandInput,
  ConfigureLogsForPlaybackConfigurationCommandOutput,
} from "./commands/ConfigureLogsForPlaybackConfigurationCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import { CreateLiveSourceCommandInput, CreateLiveSourceCommandOutput } from "./commands/CreateLiveSourceCommand";
import {
  CreatePrefetchScheduleCommandInput,
  CreatePrefetchScheduleCommandOutput,
} from "./commands/CreatePrefetchScheduleCommand";
import { CreateProgramCommandInput, CreateProgramCommandOutput } from "./commands/CreateProgramCommand";
import {
  CreateSourceLocationCommandInput,
  CreateSourceLocationCommandOutput,
} from "./commands/CreateSourceLocationCommand";
import { CreateVodSourceCommandInput, CreateVodSourceCommandOutput } from "./commands/CreateVodSourceCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import {
  DeleteChannelPolicyCommandInput,
  DeleteChannelPolicyCommandOutput,
} from "./commands/DeleteChannelPolicyCommand";
import { DeleteLiveSourceCommandInput, DeleteLiveSourceCommandOutput } from "./commands/DeleteLiveSourceCommand";
import {
  DeletePlaybackConfigurationCommandInput,
  DeletePlaybackConfigurationCommandOutput,
} from "./commands/DeletePlaybackConfigurationCommand";
import {
  DeletePrefetchScheduleCommandInput,
  DeletePrefetchScheduleCommandOutput,
} from "./commands/DeletePrefetchScheduleCommand";
import { DeleteProgramCommandInput, DeleteProgramCommandOutput } from "./commands/DeleteProgramCommand";
import {
  DeleteSourceLocationCommandInput,
  DeleteSourceLocationCommandOutput,
} from "./commands/DeleteSourceLocationCommand";
import { DeleteVodSourceCommandInput, DeleteVodSourceCommandOutput } from "./commands/DeleteVodSourceCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import { DescribeLiveSourceCommandInput, DescribeLiveSourceCommandOutput } from "./commands/DescribeLiveSourceCommand";
import { DescribeProgramCommandInput, DescribeProgramCommandOutput } from "./commands/DescribeProgramCommand";
import {
  DescribeSourceLocationCommandInput,
  DescribeSourceLocationCommandOutput,
} from "./commands/DescribeSourceLocationCommand";
import { DescribeVodSourceCommandInput, DescribeVodSourceCommandOutput } from "./commands/DescribeVodSourceCommand";
import { GetChannelPolicyCommandInput, GetChannelPolicyCommandOutput } from "./commands/GetChannelPolicyCommand";
import { GetChannelScheduleCommandInput, GetChannelScheduleCommandOutput } from "./commands/GetChannelScheduleCommand";
import {
  GetPlaybackConfigurationCommandInput,
  GetPlaybackConfigurationCommandOutput,
} from "./commands/GetPlaybackConfigurationCommand";
import {
  GetPrefetchScheduleCommandInput,
  GetPrefetchScheduleCommandOutput,
} from "./commands/GetPrefetchScheduleCommand";
import { ListAlertsCommandInput, ListAlertsCommandOutput } from "./commands/ListAlertsCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import { ListLiveSourcesCommandInput, ListLiveSourcesCommandOutput } from "./commands/ListLiveSourcesCommand";
import {
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput,
} from "./commands/ListPlaybackConfigurationsCommand";
import {
  ListPrefetchSchedulesCommandInput,
  ListPrefetchSchedulesCommandOutput,
} from "./commands/ListPrefetchSchedulesCommand";
import {
  ListSourceLocationsCommandInput,
  ListSourceLocationsCommandOutput,
} from "./commands/ListSourceLocationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListVodSourcesCommandInput, ListVodSourcesCommandOutput } from "./commands/ListVodSourcesCommand";
import { PutChannelPolicyCommandInput, PutChannelPolicyCommandOutput } from "./commands/PutChannelPolicyCommand";
import {
  PutPlaybackConfigurationCommandInput,
  PutPlaybackConfigurationCommandOutput,
} from "./commands/PutPlaybackConfigurationCommand";
import { StartChannelCommandInput, StartChannelCommandOutput } from "./commands/StartChannelCommand";
import { StopChannelCommandInput, StopChannelCommandOutput } from "./commands/StopChannelCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import { UpdateLiveSourceCommandInput, UpdateLiveSourceCommandOutput } from "./commands/UpdateLiveSourceCommand";
import { UpdateProgramCommandInput, UpdateProgramCommandOutput } from "./commands/UpdateProgramCommand";
import {
  UpdateSourceLocationCommandInput,
  UpdateSourceLocationCommandOutput,
} from "./commands/UpdateSourceLocationCommand";
import { UpdateVodSourceCommandInput, UpdateVodSourceCommandOutput } from "./commands/UpdateVodSourceCommand";
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
  | ConfigureLogsForChannelCommandInput
  | ConfigureLogsForPlaybackConfigurationCommandInput
  | CreateChannelCommandInput
  | CreateLiveSourceCommandInput
  | CreatePrefetchScheduleCommandInput
  | CreateProgramCommandInput
  | CreateSourceLocationCommandInput
  | CreateVodSourceCommandInput
  | DeleteChannelCommandInput
  | DeleteChannelPolicyCommandInput
  | DeleteLiveSourceCommandInput
  | DeletePlaybackConfigurationCommandInput
  | DeletePrefetchScheduleCommandInput
  | DeleteProgramCommandInput
  | DeleteSourceLocationCommandInput
  | DeleteVodSourceCommandInput
  | DescribeChannelCommandInput
  | DescribeLiveSourceCommandInput
  | DescribeProgramCommandInput
  | DescribeSourceLocationCommandInput
  | DescribeVodSourceCommandInput
  | GetChannelPolicyCommandInput
  | GetChannelScheduleCommandInput
  | GetPlaybackConfigurationCommandInput
  | GetPrefetchScheduleCommandInput
  | ListAlertsCommandInput
  | ListChannelsCommandInput
  | ListLiveSourcesCommandInput
  | ListPlaybackConfigurationsCommandInput
  | ListPrefetchSchedulesCommandInput
  | ListSourceLocationsCommandInput
  | ListTagsForResourceCommandInput
  | ListVodSourcesCommandInput
  | PutChannelPolicyCommandInput
  | PutPlaybackConfigurationCommandInput
  | StartChannelCommandInput
  | StopChannelCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateChannelCommandInput
  | UpdateLiveSourceCommandInput
  | UpdateProgramCommandInput
  | UpdateSourceLocationCommandInput
  | UpdateVodSourceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | ConfigureLogsForChannelCommandOutput
  | ConfigureLogsForPlaybackConfigurationCommandOutput
  | CreateChannelCommandOutput
  | CreateLiveSourceCommandOutput
  | CreatePrefetchScheduleCommandOutput
  | CreateProgramCommandOutput
  | CreateSourceLocationCommandOutput
  | CreateVodSourceCommandOutput
  | DeleteChannelCommandOutput
  | DeleteChannelPolicyCommandOutput
  | DeleteLiveSourceCommandOutput
  | DeletePlaybackConfigurationCommandOutput
  | DeletePrefetchScheduleCommandOutput
  | DeleteProgramCommandOutput
  | DeleteSourceLocationCommandOutput
  | DeleteVodSourceCommandOutput
  | DescribeChannelCommandOutput
  | DescribeLiveSourceCommandOutput
  | DescribeProgramCommandOutput
  | DescribeSourceLocationCommandOutput
  | DescribeVodSourceCommandOutput
  | GetChannelPolicyCommandOutput
  | GetChannelScheduleCommandOutput
  | GetPlaybackConfigurationCommandOutput
  | GetPrefetchScheduleCommandOutput
  | ListAlertsCommandOutput
  | ListChannelsCommandOutput
  | ListLiveSourcesCommandOutput
  | ListPlaybackConfigurationsCommandOutput
  | ListPrefetchSchedulesCommandOutput
  | ListSourceLocationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVodSourcesCommandOutput
  | PutChannelPolicyCommandOutput
  | PutPlaybackConfigurationCommandOutput
  | StartChannelCommandOutput
  | StopChannelCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateChannelCommandOutput
  | UpdateLiveSourceCommandOutput
  | UpdateProgramCommandOutput
  | UpdateSourceLocationCommandOutput
  | UpdateVodSourceCommandOutput;

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
export type MediaTailorClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of MediaTailorClient class constructor that set the region, credentials and other options.
 */
export interface MediaTailorClientConfig extends MediaTailorClientConfigType {}

/**
 * @public
 */
export type MediaTailorClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of MediaTailorClient class. This is resolved and normalized from the {@link MediaTailorClientConfig | constructor configuration interface}.
 */
export interface MediaTailorClientResolvedConfig extends MediaTailorClientResolvedConfigType {}

/**
 * <p>Use the AWS Elemental MediaTailor SDKs and CLI to configure scalable ad insertion and linear channels. With MediaTailor, you can assemble existing content into a linear stream and serve targeted ads to viewers while maintaining broadcast quality in over-the-top (OTT) video applications. For information about using the service, including detailed information about the settings covered in this guide, see the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/">AWS Elemental MediaTailor User Guide</a>.</p>
 *          <p>Through the SDKs and the CLI you manage AWS Elemental MediaTailor configurations and channels the same as you do through the console. For example, you specify ad insertion behavior and mapping information for the origin server and the ad decision server (ADS).</p>
 * @public
 */
export class MediaTailorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MediaTailorClientResolvedConfig
> {
  /**
   * The resolved configuration of MediaTailorClient class. This is resolved and normalized from the {@link MediaTailorClientConfig | constructor configuration interface}.
   */
  readonly config: MediaTailorClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<MediaTailorClientConfig>) {
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
    return defaultMediaTailorHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: MediaTailorClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
