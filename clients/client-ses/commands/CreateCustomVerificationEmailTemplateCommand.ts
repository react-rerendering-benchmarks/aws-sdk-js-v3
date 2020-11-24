import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateCustomVerificationEmailTemplateRequest } from "../models/models_0";
import {
  deserializeAws_queryCreateCustomVerificationEmailTemplateCommand,
  serializeAws_queryCreateCustomVerificationEmailTemplateCommand,
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

export type CreateCustomVerificationEmailTemplateCommandInput = CreateCustomVerificationEmailTemplateRequest;
export type CreateCustomVerificationEmailTemplateCommandOutput = __MetadataBearer;

/**
 * <p>Creates a new custom verification email template.</p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class CreateCustomVerificationEmailTemplateCommand extends $Command<
  CreateCustomVerificationEmailTemplateCommandInput,
  CreateCustomVerificationEmailTemplateCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCustomVerificationEmailTemplateCommandInput) {
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
  ): Handler<CreateCustomVerificationEmailTemplateCommandInput, CreateCustomVerificationEmailTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "CreateCustomVerificationEmailTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomVerificationEmailTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
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
    input: CreateCustomVerificationEmailTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCreateCustomVerificationEmailTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomVerificationEmailTemplateCommandOutput> {
    return deserializeAws_queryCreateCustomVerificationEmailTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
