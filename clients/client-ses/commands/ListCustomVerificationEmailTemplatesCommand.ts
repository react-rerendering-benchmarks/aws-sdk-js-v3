import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import {
  ListCustomVerificationEmailTemplatesRequest,
  ListCustomVerificationEmailTemplatesResponse,
} from "../models/models_0";
import {
  deserializeAws_queryListCustomVerificationEmailTemplatesCommand,
  serializeAws_queryListCustomVerificationEmailTemplatesCommand,
} from "../protocols/Aws_query";
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

export type ListCustomVerificationEmailTemplatesCommandInput = ListCustomVerificationEmailTemplatesRequest;
export type ListCustomVerificationEmailTemplatesCommandOutput = ListCustomVerificationEmailTemplatesResponse &
  __MetadataBearer;

/**
 * <p>Lists the existing custom verification email templates for your account in the current
 *             AWS Region.</p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class ListCustomVerificationEmailTemplatesCommand extends $Command<
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCustomVerificationEmailTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCustomVerificationEmailTemplatesCommandInput, ListCustomVerificationEmailTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListCustomVerificationEmailTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomVerificationEmailTemplatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCustomVerificationEmailTemplatesResponse.filterSensitiveLog,
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
    input: ListCustomVerificationEmailTemplatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListCustomVerificationEmailTemplatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomVerificationEmailTemplatesCommandOutput> {
    return deserializeAws_queryListCustomVerificationEmailTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
