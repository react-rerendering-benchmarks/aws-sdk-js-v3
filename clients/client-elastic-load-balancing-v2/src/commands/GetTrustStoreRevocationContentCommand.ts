// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { GetTrustStoreRevocationContentInput, GetTrustStoreRevocationContentOutput } from "../models/models_0";
import {
  de_GetTrustStoreRevocationContentCommand,
  se_GetTrustStoreRevocationContentCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTrustStoreRevocationContentCommand}.
 */
export interface GetTrustStoreRevocationContentCommandInput extends GetTrustStoreRevocationContentInput {}
/**
 * @public
 *
 * The output of {@link GetTrustStoreRevocationContentCommand}.
 */
export interface GetTrustStoreRevocationContentCommandOutput
  extends GetTrustStoreRevocationContentOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the specified revocation file.</p>
 *          <p>This action returns a pre-signed S3 URI which is
 *       active for ten minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, GetTrustStoreRevocationContentCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, GetTrustStoreRevocationContentCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // GetTrustStoreRevocationContentInput
 *   TrustStoreArn: "STRING_VALUE", // required
 *   RevocationId: Number("long"), // required
 * };
 * const command = new GetTrustStoreRevocationContentCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustStoreRevocationContentOutput
 * //   Location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTrustStoreRevocationContentCommandInput - {@link GetTrustStoreRevocationContentCommandInput}
 * @returns {@link GetTrustStoreRevocationContentCommandOutput}
 * @see {@link GetTrustStoreRevocationContentCommandInput} for command's `input` shape.
 * @see {@link GetTrustStoreRevocationContentCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link RevocationIdNotFoundException} (client fault)
 *  <p>The specified revocation ID does not exist.</p>
 *
 * @throws {@link TrustStoreNotFoundException} (client fault)
 *  <p>The specified trust store does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 */
export class GetTrustStoreRevocationContentCommand extends $Command<
  GetTrustStoreRevocationContentCommandInput,
  GetTrustStoreRevocationContentCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetTrustStoreRevocationContentCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTrustStoreRevocationContentCommandInput, GetTrustStoreRevocationContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTrustStoreRevocationContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "GetTrustStoreRevocationContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v10",
        operation: "GetTrustStoreRevocationContent",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: GetTrustStoreRevocationContentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetTrustStoreRevocationContentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTrustStoreRevocationContentCommandOutput> {
    return de_GetTrustStoreRevocationContentCommand(output, context);
  }
}
