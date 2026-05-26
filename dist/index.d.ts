import * as _quartz_community_types from '@quartz-community/types';
export { PageGenerator, PageMatcher, QuartzComponent, QuartzComponentConstructor, QuartzComponentProps, QuartzEmitterPlugin, QuartzFilterPlugin, QuartzPageTypePlugin, QuartzPageTypePluginInstance, QuartzTransformerPlugin, StringResource, VirtualPage } from '@quartz-community/types';
export { DhammapadaComponent, ExampleComponentOptions } from './components/index.js';
import { DhammapadaOptions } from './types.js';

declare function init(options?: Partial<DhammapadaOptions>): void;
declare const Dhammapada: (userOpts?: Partial<DhammapadaOptions>) => _quartz_community_types.QuartzComponent;

export { Dhammapada, DhammapadaOptions, init };
