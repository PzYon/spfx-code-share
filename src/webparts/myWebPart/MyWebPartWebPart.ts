import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import { SimpleComponent } from "../../SimpleComponent";

export interface IMyWebPartWebPartProps {
  description: string;
}

export default class MyWebPartWebPart extends BaseClientSideWebPart<
  IMyWebPartWebPartProps
> {
  public render(): void {
    ReactDom.render(React.createElement(SimpleComponent, {}), this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: ""
          },
          groups: [
            {
              groupName: "",
              groupFields: [
                PropertyPaneTextField("description", {
                  label: ""
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
