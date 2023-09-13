import "./Heading.css";
import { SectionHeader, Sidebar, CodeBlock } from "../../documentation";
import { Heading } from "../../components";

export const HeadingDoc = () => {
  const headingCodeString = `<Heading size="h1">(h1) This is a heading.</Heading>
<Heading size="h2">(h2) This is a heading.</Heading>
<Heading size="h3">(h3) This is a heading.</Heading>
<Heading size="h4">(h4) This is a heading.</Heading>
<Heading size="h5">(h5) This is a heading.</Heading>
<Heading size="h6">(h6) This is a heading.</Heading>`;

  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Heading Component"
          description="Heading is used to render semantic HTML heading elements."
        />
        <div className="divider"></div>
        <div className="list">
          <Heading size="h1">(h1) This is a heading.</Heading>
          <Heading size="h2">(h2) This is a heading.</Heading>
          <Heading size="h3">(h3) This is a heading.</Heading>
          <Heading size="h4">(h4) This is a heading.</Heading>
          <Heading size="h5">(h5) This is a heading.</Heading>
          <Heading size="h6">(h6) This is a heading.</Heading>
        </div>
        <h3 className="code-heading">How to use Heading component?</h3>
        <CodeBlock codeString={headingCodeString} />
        <div className="divider"></div>
      </div>
    </div>
  );
};
