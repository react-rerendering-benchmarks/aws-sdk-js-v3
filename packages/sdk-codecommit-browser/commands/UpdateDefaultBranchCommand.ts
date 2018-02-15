import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {UpdateDefaultBranch} from '../model/UpdateDefaultBranch';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateDefaultBranchInput} from '../types/UpdateDefaultBranchInput';
import {UpdateDefaultBranchOutput} from '../types/UpdateDefaultBranchOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdateDefaultBranchCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdateDefaultBranchInput,
    OutputTypesUnion,
    UpdateDefaultBranchOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UpdateDefaultBranchInput,
        UpdateDefaultBranchOutput,
        Blob
    >();

    constructor(readonly input: UpdateDefaultBranchInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<UpdateDefaultBranchInput, UpdateDefaultBranchOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateDefaultBranch
        };

        return stack.resolve(
            handler<UpdateDefaultBranchInput, UpdateDefaultBranchOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}