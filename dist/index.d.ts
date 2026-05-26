import * as _quartz_community_types from '@quartz-community/types';
import { QuartzTransformerPlugin, QuartzFilterPlugin, QuartzEmitterPlugin } from '@quartz-community/types';
export { PageGenerator, PageMatcher, QuartzComponent, QuartzComponentConstructor, QuartzComponentProps, QuartzEmitterPlugin, QuartzFilterPlugin, QuartzPageTypePlugin, QuartzPageTypePluginInstance, QuartzTransformerPlugin, StringResource, VirtualPage } from '@quartz-community/types';
export { DhammapadaComponent, ExampleComponent, ExampleComponentOptions } from './components/index.js';
import { ExampleTransformerOptions, ExampleFilterOptions, ExampleEmitterOptions, DhammapadaOptions } from './types.js';

/**
 * Example transformer showing remark/rehype usage and resource injection.
 */
declare const ExampleTransformer: QuartzTransformerPlugin<Partial<ExampleTransformerOptions>>;

/**
 * Example filter that removes drafts, tagged pages, and excluded path prefixes.
 */
declare const ExampleFilter: QuartzFilterPlugin<Partial<ExampleFilterOptions>>;

/**
 * Example emitter that writes a JSON manifest of content metadata.
 */
declare const ExampleEmitter: QuartzEmitterPlugin<Partial<ExampleEmitterOptions>>;

declare function init(options?: Partial<DhammapadaOptions>): void;
declare const Dhammapada: (userOpts?: Partial<DhammapadaOptions>) => _quartz_community_types.QuartzComponent;

export { Dhammapada, DhammapadaOptions, ExampleEmitter, ExampleEmitterOptions, ExampleFilter, ExampleFilterOptions, ExampleTransformer, ExampleTransformerOptions, init };
