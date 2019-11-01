import '@abraham/reflection';

import { ReflectiveInjector } from 'injection-js';

import { DiContainer } from './abstract';
import { DiContainerImpl } from './di';


const coreInjector = ReflectiveInjector.resolveAndCreate([
    {
        provide: DiContainer,
        useClass: DiContainerImpl
    }
]);

export function getCoreDiContainer(): DiContainer {
    return coreInjector.get(DiContainer);
}