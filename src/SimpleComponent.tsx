import * as React from "react";
import { SimpleConstValue } from "./SimpleConstValue";

console.log("This should only be executed once.");

export class SimpleComponent extends React.PureComponent {
  public render() {
    return (
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          backgroundColor: "lightblue"
        }}
      >
        Simple constant value: {SimpleConstValue}
      </div>
    );
  }
}
