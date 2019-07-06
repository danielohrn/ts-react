import * as React from "react";
import { render } from "react-dom";

interface IProps {
  text: string;
}

const Component: React.FunctionComponent<IProps> = props => (
  <div>{props.text}</div>
);

render(
  <Component text="Typescript react template" />,
  document.getElementById("app-root")
);
