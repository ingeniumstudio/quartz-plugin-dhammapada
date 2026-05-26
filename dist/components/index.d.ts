import { QuartzComponent } from '@quartz-community/types';
import { DhammapadaOptions } from '../types.js';

interface ExampleComponentOptions {
    prefix?: string;
    suffix?: string;
    className?: string;
}
declare const _default$1: (opts?: ExampleComponentOptions) => QuartzComponent;

declare const _default: (opts?: DhammapadaOptions) => QuartzComponent;

export { _default as DhammapadaComponent, _default$1 as ExampleComponent, type ExampleComponentOptions };
