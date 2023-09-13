import { ComponentContainer, SectionHeader, Sidebar } from "../documentation";
import {
  Card,
  CardTextOnly,
  CardWithBadge,
  CardWithDismiss,
  CardWithTextOverlay,
  HorizontalCard,
} from "../components";

const product = {
  title: "Women Stylish Pencil Heel Sandal with Trendy Colour",
  imgSrc:
    "https://static.toiimg.com/thumb/msid-78364888,width-400,resizemode-4/78364888.jpg",
  price: 999,
  oldPrice: 1999,
  discount: "50%",
};

export const CardDoc = () => {
  const basicCardCodeString = `const product = {
      title: "Women Stylish Pencil Heel Sandal with Trendy Colour",
      imgSrc: "https://static.toiimg.com/thumb/msid-78364888,width-400,resizemode-4/78364888.jpg",
      price: 999,
      oldPrice: 1999,
      discount: "50%",
  };

<Card product={product} />`;

  const cardWithBadgeCodeString = `const product = {
      title: "Women Stylish Pencil Heel Sandal with Trendy Colour",
      imgSrc: "https://static.toiimg.com/thumb/msid-78364888,width-400,resizemode-4/78364888.jpg",
      price: 999,
      oldPrice: 1999,
      discount: "50%",
};

<CardWithBadge
      product={product}
      badgeText="Trending"
      badgeColor="#ff2c2c"
/>`;

  const cardWithDismissCodeString = `const product = {
      title: "Women Stylish Pencil Heel Sandal with Trendy Colour",
      imgSrc: "https://static.toiimg.com/thumb/msid-78364888,width-400,resizemode-4/78364888.jpg",
      price: 999,
      oldPrice: 1999,
      discount: "50%",
};

<CardWithDismiss product={product} />`;

  const cardWithTextOverlayCodeString = `const product = {
      title: "Women Stylish Pencil Heel Sandal with Trendy Colour",
      imgSrc: "https://static.toiimg.com/thumb/msid-78364888,width-400,resizemode-4/78364888.jpg",
      price: 999,
      oldPrice: 1999,
      discount: "50%",
};

<CardWithTextOverlay product={product} />`;

  const textOnlyCardCodeString = `const product = {
      title: "Women Stylish Pencil Heel Sandal with Trendy Colour",
      imgSrc: "https://static.toiimg.com/thumb/msid-78364888,width-400,resizemode-4/78364888.jpg",
      price: 999,
      oldPrice: 1999,
      discount: "50%",
};

<CardTextOnly product={product} />`;

  const horizontalCardCodeString = `const product = {
      title: "Women Stylish Pencil Heel Sandal with Trendy Colour",
      imgSrc: "https://static.toiimg.com/thumb/msid-78364888,width-400,resizemode-4/78364888.jpg",
      price: 999,
      oldPrice: 1999,
      discount: "50%",
};

<HorizontalCard product={product} />`;

  const cardWithShadowCodeString = `const product = {
      title: "Women Stylish Pencil Heel Sandal with Trendy Colour",
      imgSrc: "https://static.toiimg.com/thumb/msid-78364888,width-400,resizemode-4/78364888.jpg",
      price: 999,
      oldPrice: 1999,
      discount: "50%",
};

<Card product={product} shadow />`;

  return (
    <div className="container">
      <Sidebar />
      <div className="doc-container">
        <SectionHeader
          title="Card Component"
          description="A card is an element that is used to impart detailed knowledge about a product or category. They can mostly be found on e-commerce websites to display a product."
        />
        <div className="divider"></div>
        <ComponentContainer
          title="Basic Card"
          description="This is a basic card which showcases the product image, title, discount price and action buttons."
          codeString={basicCardCodeString}
        >
          <Card product={product} />
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Card with Badge"
          description="This is a basic card which which contains a badge. Badges are used to highlight specific information to catch the user's attention. They can appear to top-left or top-right corner of the card."
          codeString={cardWithBadgeCodeString}
        >
          <CardWithBadge
            product={product}
            badgeText="Trending"
            badgeColor="#ff2c2c"
          />
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Card with Dismiss"
          description="This is a basic card which which contains a dismiss icon. The icon can be found on the top-right corner and can be used to close the card."
          codeString={cardWithDismissCodeString}
        >
          <CardWithDismiss product={product} />
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Card with Text Overlay"
          description="This is a basic card with text overlay. Text Overlay is used to display text on top of a card/element."
          codeString={cardWithTextOverlayCodeString}
        >
          <CardWithTextOverlay product={product} />
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Text only Card"
          description="This is a basic card which has only text."
          codeString={textOnlyCardCodeString}
        >
          <CardTextOnly product={product} />
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Horizontal Card"
          description="A basic horizontal card with minimum details."
          codeString={horizontalCardCodeString}
        >
          <HorizontalCard product={product} />
        </ComponentContainer>
        <div className="divider"></div>
        <ComponentContainer
          title="Card with Shadow"
          description="A basic vertical card with box shadow"
          codeString={cardWithShadowCodeString}
        >
          <Card product={product} shadow />
        </ComponentContainer>
        <div className="divider"></div>
      </div>
    </div>
  );
};
