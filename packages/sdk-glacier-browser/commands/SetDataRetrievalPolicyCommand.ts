import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {SetDataRetrievalPolicy} from '../model/SetDataRetrievalPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {SetDataRetrievalPolicyInput} from '../types/SetDataRetrievalPolicyInput';
import {SetDataRetrievalPolicyOutput} from '../types/SetDataRetrievalPolicyOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class SetDataRetrievalPolicyCommand implements __aws_types.Command<
    InputTypesUnion,
    SetDataRetrievalPolicyInput,
    OutputTypesUnion,
    SetDataRetrievalPolicyOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        SetDataRetrievalPolicyInput,
        SetDataRetrievalPolicyOutput,
        Blob
    >();

    constructor(readonly input: SetDataRetrievalPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<SetDataRetrievalPolicyInput, SetDataRetrievalPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: SetDataRetrievalPolicy
        };

        return stack.resolve(
            handler<SetDataRetrievalPolicyInput, SetDataRetrievalPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}