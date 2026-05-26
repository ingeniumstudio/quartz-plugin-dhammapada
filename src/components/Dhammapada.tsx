import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import type { DhammapadaOptions } from "../types";
import style from "./styles/dhammapada.scss";
// @ts-expect-error - inline script import handled by Quartz bundler
import script from "./scripts/dhammapada.inline.ts";

export default ((opts?: DhammapadaOptions) => {
  const { endpoint, className = "dhammapada-container" } = opts ?? {};

  const Component: QuartzComponent = (props: QuartzComponentProps) => {
    // Only render on the home page (index.md)
    if (props.fileData.slug !== "index") {
      return null;
    }

    if (!endpoint) {
      console.warn("DhammapadaComponent: No endpoint provided in options.");
      return null;
    }

    return (
      <div class={classNames(className)}>
        <p id="dhammapada-text" class="dhammapada-text loading" data-endpoint={endpoint}>
          Fetching Dhammapada verse
        </p>
      </div>
    );
  };

  Component.css = style;
  Component.afterDOMLoaded = script;

  return Component;
}) satisfies QuartzComponentConstructor;
