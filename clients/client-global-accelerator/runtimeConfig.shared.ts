import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2018-08-08",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  signingName: "globalaccelerator",
};
