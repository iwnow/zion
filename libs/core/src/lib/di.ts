import { ReflectiveInjector, Injectable, Injector, Type, Provider } from 'injection-js';
import { DiContainer } from './abstract';

@Injectable()
export class DiContainerImpl implements DiContainer {
    constructor(
        protected readonly injector: Injector
    ) {}

    get<T= any>(type: Type<T>): T {
        return this.injector.get(type);
    }
    
    createChildDiContainer(providers?: Provider[]): DiContainer {
        const childInjector = ReflectiveInjector.resolveAndCreate(providers || [], this.injector);
        return new DiContainerImpl(childInjector);
    }

    createRootDiContainer(providers?: Provider[]): DiContainer {
        const injector = ReflectiveInjector.resolveAndCreate(providers || []);
        return new DiContainerImpl(injector);
    }
}