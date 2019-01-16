import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MyWebPartWebPartStrings';
import { SimpleComponent } from "../../SimpleComponent";
import MyWebPart from './components/MyWebPart';
import { IMyWebPartProps } from './components/IMyWebPartProps';

export interface IMyWebPartWebPartProps {
  description: string;
}

export default class MyWebPartWebPart extends BaseClientSideWebPart<IMyWebPartWebPartProps> {

  public render(): void {
    ReactDom.render(React.createElement(
      SimpleComponent,
      {}
    ), this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
