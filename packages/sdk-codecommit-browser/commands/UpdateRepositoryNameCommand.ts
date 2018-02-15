import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {UpdateRepositoryName} from '../model/UpdateRepositoryName';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateRepositoryNameInput} from '../types/UpdateRepositoryNameInput';
import {UpdateRepositoryNameOutput} from '../types/UpdateRepositoryNameOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdateRepositoryNameCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdateRepositoryNameInput,
    OutputTypesUnion,
    UpdateRepositoryNameOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UpdateRepositoryNameInput,
        UpdateRepositoryNameOutput,
        Blob
    >();

    constructor(readonly input: UpdateRepositoryNameInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<UpdateRepositoryNameInput, UpdateRepositoryNameOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateRepositoryName
        };

        return stack.resolve(
            handler<UpdateRepositoryNameInput, UpdateRepositoryNameOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}