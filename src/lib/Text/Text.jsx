import "./Text.css";
import { SectionHeader, Sidebar, CodeBlock } from "../../documentation";
import { Text } from "../../components";

export const TextDoc = () => {
  const textCodeString = `<Text size="5xl">(5xl) In love with React & Next</Text>
<Text size="4xl">(4xl) In love with React & Next</Text>
<Text size="3xl">(3xl) In love with React & Next</Text>
<Text size="2xl">(2xl) In love with React & Next</Text>
<Text size="xl">(xl) In love with React & Next</Text>
<Text size="lg">(lg) In love with React & Next</Text>
<Text size="md">(md) In love with React & Next</Text>
<Text size="sm">(sm) In love with React & Next</Text>
<Text size="xs">(xs) In love with React & Next</Text>`;

  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Text Component"
          description="Text is used to render text and paragraphs within the interface."
        />
        <div className="divider"></div>
        <div className="list">
          <Text size="5xl">(5xl) In love with React & Next</Text>
          <Text size="4xl">(4xl) In love with React & Next</Text>
          <Text size="3xl">(3xl) In love with React & Next</Text>
          <Text size="2xl">(2xl) In love with React & Next</Text>
          <Text size="xl">(xl) In love with React & Next</Text>
          <Text size="lg">(lg) In love with React & Next</Text>
          <Text size="md">(md) In love with React & Next</Text>
          <Text size="sm">(sm) In love with React & Next</Text>
          <Text size="xs">(xs) In love with React & Next</Text>
        </div>
        <h3>How to use Text component?</h3>
        <CodeBlock codeString={textCodeString} />
        <div className="divider"></div>
      </div>
    </div>
  );
};
