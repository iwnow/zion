import { Type, Provider } from 'injection-js';

export  * from 'injection-js';

export abstract class DiContainer {
    abstract get<T= any>(type: Type<T>): T;
    abstract createChildDiContainer(providers?: Provider[]): DiContainer;
    abstract createRootDiContainer(providers?: Provider[]): DiContainer;
}