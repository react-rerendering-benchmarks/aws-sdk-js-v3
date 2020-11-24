import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { HttpPayloadTraitsWithMediaTypeInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommand,
  serializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommand,
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

export type HttpPayloadTraitsWithMediaTypeCommandInput = HttpPayloadTraitsWithMediaTypeInputOutput;
export type HttpPayloadTraitsWithMediaTypeCommandOutput = HttpPayloadTraitsWithMediaTypeInputOutput & __MetadataBearer;

/**
 * This examples uses a `@mediaType` trait on the payload to force a custom
 * content-type to be serialized.
 */
export class HttpPayloadTraitsWithMediaTypeCommand extends $Command<
  HttpPayloadTraitsWithMediaTypeCommandInput,
  HttpPayloadTraitsWithMediaTypeCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: HttpPayloadTraitsWithMediaTypeCommandInput) {
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
  ): Handler<HttpPayloadTraitsWithMediaTypeCommandInput, HttpPayloadTraitsWithMediaTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpPayloadTraitsWithMediaTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HttpPayloadTraitsWithMediaTypeInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: HttpPayloadTraitsWithMediaTypeInputOutput.filterSensitiveLog,
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

  private serialize(
    input: HttpPayloadTraitsWithMediaTypeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> {
    return deserializeAws_restJson1HttpPayloadTraitsWithMediaTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
