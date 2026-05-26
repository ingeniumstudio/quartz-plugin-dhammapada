import { DhammapadaComponent } from "./components";
import type { DhammapadaOptions } from "./types";

let globalOptions: DhammapadaOptions = {
  endpoint: "",
};

export function init(options?: Partial<DhammapadaOptions>): void {
  globalOptions = { ...globalOptions, ...options };
}

export const Dhammapada = (userOpts?: Partial<DhammapadaOptions>) =>
  DhammapadaComponent({ ...globalOptions, ...userOpts });

export { DhammapadaComponent };
export { ExampleTransformer } from "./transformer";
export { ExampleFilter } from "./filter";
export { ExampleEmitter } from "./emitter";
export { default as ExampleComponent } from "./components/ExampleComponent";

export type {
  DhammapadaOptions,
  ExampleTransformerOptions,
  ExampleFilterOptions,
  ExampleEmitterOptions,
} from "./types";

export type { ExampleComponentOptions } from "./components/ExampleComponent";

// Re-export shared types from @quartz-community/types
export type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
  StringResource,
  QuartzTransformerPlugin,
  QuartzFilterPlugin,
  QuartzEmitterPlugin,
  QuartzPageTypePlugin,
  QuartzPageTypePluginInstance,
  PageMatcher,
  PageGenerator,
  VirtualPage,
} from "@quartz-community/types";
