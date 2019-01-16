import * as React from "react";

console.log("This should only be executed once.");

export class SimpleComponent extends React.PureComponent {
  public render() {
    return (
      <div>I am component</div>
    );
  }
}
