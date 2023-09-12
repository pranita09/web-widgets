/* eslint-disable react/prop-types */
import { CodeBlock } from "../.";
import "./ComponentContainer.css";

export const ComponentContainer = ({
  title,
  description,
  codeString,
  children,
}) => {
  return (
    <div className="component-container">
      <div className="component-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="component-content">{children}</div>
      <h3>How to use {title} component?</h3>
      <CodeBlock codeString={codeString} />
    </div>
  );
};
