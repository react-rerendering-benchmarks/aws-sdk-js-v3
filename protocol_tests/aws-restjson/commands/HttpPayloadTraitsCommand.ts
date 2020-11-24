import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpPayloadTraitsInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1HttpPayloadTraitsCommand,
  serializeAws_restJson1HttpPayloadTraitsCommand,
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

export type HttpPayloadTraitsCommandInput = HttpPayloadTraitsInputOutput;
export type HttpPayloadTraitsCommandOutput = HttpPayloadTraitsInputOutput & __MetadataBearer;

/**
 * This examples serializes a blob shape in the payload.
 *
 * In this example, no JSON document is synthesized because the payload is
 * not a structure or a union type.
 */
export class HttpPayloadTraitsCommand extends $Command<
  HttpPayloadTraitsCommandInput,
  HttpPayloadTraitsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpPayloadTraitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<HttpPayloadTraitsCommandInput, HttpPayloadTraitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpPayloadTraitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpPayloadTraitsInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: HttpPayloadTraitsInputOutput.filterSensitiveLog,
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

  private serialize(input: HttpPayloadTraitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1HttpPayloadTraitsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HttpPayloadTraitsCommandOutput> {
    return deserializeAws_restJson1HttpPayloadTraitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
