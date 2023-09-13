import { ComponentContainer, SectionHeader, Sidebar } from "../documentation";
import {
  FloatingButton,
  IconButton,
  LinkButton,
  PrimaryButton,
  SecondaryButton,
} from "../components";
import {
  FaPaperPlane,
  SlCalender,
  FaPlus,
  MdArrowUpward,
  FaCheck,
} from "../utils/icons";

export const ButtonDoc = () => {
  document.title = "Button | WebWidgets";
  const solidButtonsCodeString = `<PrimaryButton bgColor="#8553fa">Primary</PrimaryButton>
<PrimaryButton bgColor="#2bd825">Success</PrimaryButton>
<PrimaryButton bgColor="#fdcf00">Warning</PrimaryButton>
<PrimaryButton bgColor="#ff2c2c">Danger</PrimaryButton>
<PrimaryButton bgColor="#000">Dark</PrimaryButton>`;

  const outlineButtonsCodestring = `<SecondaryButton bgColor="#8553fa">Primary</SecondaryButton>
<SecondaryButton bgColor="#2bd825">Success</SecondaryButton>
<SecondaryButton bgColor="#fdcf00">Warning</SecondaryButton>
<SecondaryButton bgColor="#ff2c2c">Danger</SecondaryButton>
<SecondaryButton bgColor="#000">Dark</SecondaryButton>`;

  const linkButtonCodeString = `<LinkButton>Link Button</LinkButton>`;

  const iconButtonsCodeString = `<IconButton icon={<FaPaperPlane />}>Publish</IconButton>
<IconButton icon={<SlCalender />}>Add to Calender</IconButton>`;

  const floatingButtonsCodeString = `<FloatingButton icon={<FaPlus />} />
<FloatingButton icon={<MdArrowUpward />} />
<FloatingButton icon={<FaCheck />} />`;

  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Button Component"
          description="A button is a clickable element used to perform some action on a web page. They are an integral of any dynamic web page."
        />
        <div className="divider"></div>
        <ComponentContainer
          title="Solid Buttons"
          description="They are various types of solid buttons:"
          codeString={solidButtonsCodeString}
        >
          <PrimaryButton bgColor="#8553fa">Primary</PrimaryButton>
          <PrimaryButton bgColor="#2bd825">Success</PrimaryButton>
          <PrimaryButton bgColor="#fdcf00">Warning</PrimaryButton>
          <PrimaryButton bgColor="#ff2c2c">Danger</PrimaryButton>
          <PrimaryButton bgColor="#000">Dark</PrimaryButton>
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Outline Buttons"
          description="A button with an outline, which can be used for secondary actions."
          codeString={outlineButtonsCodestring}
        >
          <SecondaryButton bgColor="#8553fa">Primary</SecondaryButton>
          <SecondaryButton bgColor="#2bd825">Success</SecondaryButton>
          <SecondaryButton bgColor="#fdcf00">Warning</SecondaryButton>
          <SecondaryButton bgColor="#ff2c2c">Danger</SecondaryButton>
          <SecondaryButton bgColor="#000">Dark</SecondaryButton>
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Link Button"
          description="A button with a link, that can be used to navigate to different pages."
          codeString={linkButtonCodeString}
        >
          <LinkButton>Link Button</LinkButton>
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Icon Button"
          description="A button with a icon imparts more knowledge about the button action."
          codeString={iconButtonsCodeString}
        >
          <IconButton icon={<FaPaperPlane />}>Publish</IconButton>
          <IconButton icon={<SlCalender />}>Add to Calender</IconButton>
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Floating Action Button"
          description="A floating action button is used to perform the primary or the most common action on a web page. They can be found on the bottom right corner of the page."
          codeString={floatingButtonsCodeString}
        >
          <FloatingButton icon={<FaPlus />} />
          <FloatingButton icon={<MdArrowUpward />} />
          <FloatingButton icon={<FaCheck />} />
        </ComponentContainer>
      </div>
    </div>
  );
};
