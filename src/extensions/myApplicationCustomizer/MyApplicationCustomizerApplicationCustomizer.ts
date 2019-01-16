import { override } from "@microsoft/decorators";
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from "@microsoft/sp-application-base";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { SimpleComponent } from "../../SimpleComponent";

export interface IMyApplicationCustomizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class MyApplicationCustomizerApplicationCustomizer extends BaseApplicationCustomizer<
  IMyApplicationCustomizerApplicationCustomizerProperties
> {
  @override
  public onInit(): Promise<void> {
    this.renderPlaceholder(PlaceholderName.Top);

    this.renderPlaceholder(PlaceholderName.Bottom);

    return Promise.resolve();
  }

  private renderPlaceholder(placeholderName: PlaceholderName): void {
    const placeholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(
      placeholderName
    );
    if (placeholder && placeholder.domElement) {
      ReactDOM.render(
        React.createElement(SimpleComponent, {}),
        placeholder.domElement
      );
    } else {
      console.log(
        `Placeholder ${PlaceholderName[placeholderName]} not found on page.`
      );
    }
  }
}
