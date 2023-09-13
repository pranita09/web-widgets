import { ComponentContainer, SectionHeader, Sidebar } from "../documentation";
import { ImageAvatar, TextAvatar } from "../components";

export const AvatarDoc = () => {
  const imageAvatarCodeString = `<ImageAvatar srcImg="https://images.pexels.com/photos/415829-9" altText="Sarah-Wilson" dimension="50px" />
<ImageAvatar srcImg="https://images.pexels.com/photos/415829-9" altText="Sarah-Wilson" dimension="100px" />
<ImageAvatar srcImg="https://images.pexels.com/photos/415829-9" altText="Sarah-Wilson" dimension="150px" />
<ImageAvatar srcImg="https://images.pexels.com/photos/415829-9" altText="Sarah-Wilson" dimension="200px" />`;

  const textAvatarCodeString = `<TextAvatar firstName="Sarah" lastName="Wilson" bgColor="#8553fa" dimension="25" />
<TextAvatar firstName="Sarah" lastName="Wilson" bgColor="#8553fa" dimension="50" />
<TextAvatar firstName="Sarah" lastName="Wilson" bgColor="#8553fa" dimension="75" />
<TextAvatar firstName="Sarah" lastName="Wilson" bgColor="#8553fa" dimension="100" />`;

  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Avatar Component"
          description="The Avatar component is used to represent a user, and displays the profile picture or name initials."
        />
        <div className="divider"></div>
        <ComponentContainer
          title="Image Avatar"
          description="A graphical representation of a user using his/her profile picture. Avatar is shown below in different sizes."
          codeString={imageAvatarCodeString}
        >
          <ImageAvatar
            srcImg={
              "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            altText={"Sarah-Wilson"}
            dimension={"50px"}
          />
          <ImageAvatar
            srcImg={
              "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            altText={"Sarah-Wilson"}
            dimension={"100px"}
          />
          <ImageAvatar
            srcImg={
              "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            altText={"Sarah-Wilson"}
            dimension={"150px"}
          />
          <ImageAvatar
            srcImg={
              "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            altText={"Sarah-Wilson"}
            dimension={"200px"}
          />
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Text Avatar"
          description="A graphical representation of a user using initials of his/her name."
          codeString={textAvatarCodeString}
        >
          <TextAvatar
            firstName="Sarah"
            lastName="Wilson"
            bgColor="#8553fa"
            dimension="25"
          />
          <TextAvatar
            firstName="Sarah"
            lastName="Wilson"
            bgColor="#8553fa"
            dimension="50"
          />
          <TextAvatar
            firstName="Sarah"
            lastName="Wilson"
            bgColor="#8553fa"
            dimension="75"
          />
          <TextAvatar
            firstName="Sarah"
            lastName="Wilson"
            bgColor="#8553fa"
            dimension="100"
          />
        </ComponentContainer>
        <div className="divider"></div>
      </div>
    </div>
  );
};
