import "./Card.css";
import {
  ComponentContainer,
  SectionHeader,
  Sidebar,
} from "../../documentation";
import { Card, CardWithBadge } from "../../components";

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
      </div>
    </div>
  );
};
