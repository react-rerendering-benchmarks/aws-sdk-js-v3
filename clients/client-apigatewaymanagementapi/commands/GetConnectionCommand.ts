import {
  ApiGatewayManagementApiClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApiGatewayManagementApiClient";
import { GetConnectionRequest, GetConnectionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetConnectionCommand,
  serializeAws_restJson1GetConnectionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetConnectionCommandInput = GetConnectionRequest;
export type GetConnectionCommandOutput = GetConnectionResponse & __MetadataBearer;

/**
 * <p>Get information about the connection with the provided id.</p>
 */
export class GetConnectionCommand extends $Command<
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
  ApiGatewayManagementApiClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayManagementApiClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectionCommandInput, GetConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayManagementApiClient";
    const commandName = "GetConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetConnectionResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectionCommandOutput> {
    return deserializeAws_restJson1GetConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
