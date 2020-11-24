import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutWebhookInput, PutWebhookOutput } from "../models/models_0";
import {
  deserializeAws_json1_1PutWebhookCommand,
  serializeAws_json1_1PutWebhookCommand,
} from "../protocols/Aws_json1_1";
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

export type PutWebhookCommandInput = PutWebhookInput;
export type PutWebhookCommandOutput = PutWebhookOutput & __MetadataBearer;

/**
 * <p>Defines a webhook and returns a unique webhook URL generated by CodePipeline. This
 *             URL can be supplied to third party source hosting providers to call every time there's a
 *             code change. When CodePipeline receives a POST request on this URL, the pipeline defined
 *             in the webhook is started as long as the POST request satisfied the authentication and
 *             filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty
 *             and DeregisterWebhookWithThirdParty APIs can be used to automatically configure
 *             supported third parties to call the generated webhook URL.</p>
 */
export class PutWebhookCommand extends $Command<
  PutWebhookCommandInput,
  PutWebhookCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutWebhookCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutWebhookCommandInput, PutWebhookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PutWebhookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutWebhookInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutWebhookOutput.filterSensitiveLog,
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

  private serialize(input: PutWebhookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutWebhookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutWebhookCommandOutput> {
    return deserializeAws_json1_1PutWebhookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
