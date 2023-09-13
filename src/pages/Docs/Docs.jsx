import { Link } from "react-router-dom";
import "./Docs.css";
import { CodeBlock } from "../../documentation";

export const Docs = () => {
  const codeSnippet = `<link rel="stylesheet" type="text/css" href="https://web-widgets-v1.netlify.app/src/App.css"></link>`;
  return (
    <div className="docs">
      {/* <div className="installation">
        <span className="title">Installation</span>
        <div className="install-guide">
          <p>
            <span>WebWidgets</span> provides a variety of CSS components that
            will make your design development faster and easier. To use it add
            the following link in the <code>head</code> tag of your{" "}
            <code>HTML</code>.
          </p>
          <div>
            <CodeBlock codeString={codeSnippet}></CodeBlock>
          </div>
        </div>
      </div> */}

      <div className="components-list">
        <span className="title">All Components</span>
        <ul className="list">
          <Link to="/docs/avatar">
            <li>Avatar</li>
          </Link>
          <Link to="/docs/alert">
            <li>Alert</li>
          </Link>
          <Link to="/docs/badge">
            <li>Badge</li>
          </Link>
          <Link to="/docs/button">
            <li>Button</li>
          </Link>
          <Link to="/docs/heading">
            <li>Heading</li>
          </Link>
          <Link to="/docs/card">
            <li>Card</li>
          </Link>
          <Link to="/docs/text">
            <li>Text</li>
          </Link>
          <Link to="/docs/image">
            <li>Image</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
