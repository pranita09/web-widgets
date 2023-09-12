import "./Image.css";
import {
  ComponentContainer,
  SectionHeader,
  Sidebar,
} from "../../documentation";
import { Image, RoundImage } from "../../components";

export const ImageDoc = () => {
  const respImageCodeString = `<Image 
      srcImg="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg"
      altText="Landscape"
/>`;

  const roundImageCodeString = `<RoundImage 
      srcImg="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg"
      altText="Landscape"
/>`;

  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Image Component"
          description="An image can be reponsive, which fits in all screen sizes. Images can also be round and square."
        />
        <div className="divider"></div>
        <ComponentContainer
          title="Responsive Image"
          description="A responsive image will adapt to the width of it's parent container. Resize the brower window to see the image behave responsive. You can set custom width of the resp-img class, and the img will be responsive wrt to it."
          codeString={respImageCodeString}
        >
          <Image
            srcImg="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg"
            altText="Landscape"
          />
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Round Image"
          description="A round image is circular in shape, and has the default size of 300 X 300px."
          codeString={roundImageCodeString}
        >
          <RoundImage
            srcImg="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg"
            altText="Landscape"
          />
        </ComponentContainer>
        <div className="divider"></div>
      </div>
    </div>
  );
};
