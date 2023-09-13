/* eslint-disable react/prop-types */
import { PrimaryButton, SecondaryButton } from "../Button/Button";
import "./Card.css";

export const Card = ({ product }) => {
  const { title, imgSrc, price, oldPrice, discount } = product;
  return (
    <div className="card-wrapper basic-card">
      <div>
        <img src={imgSrc} alt={title} className="card-img" />

        <div className="card-heading">{title}</div>
      </div>
      <div className="card-content">
        <div className="product-price">
          <div className="price">&#8377; {price}</div>
          <div className="previous-price">&#8377; {oldPrice}</div>
        </div>
        <div className="discount">{discount} off</div>
      </div>

      <div className="card-actions">
        <PrimaryButton>Add to Cart</PrimaryButton>
        <SecondaryButton>Add to Wishlist</SecondaryButton>
      </div>
    </div>
  );
};

export const CardWithBadge = ({ product, badgeText, badgeColor }) => {
  const { title, imgSrc, price, oldPrice, discount } = product;
  return (
    <div className="card-wrapper card-w-badge">
      <div>
        <img src={imgSrc} alt={title} className="card-img" />
        <div className="card-badge" style={{ backgroundColor: badgeColor }}>
          <div className="span">{badgeText}</div>
        </div>

        <div className="card-heading">{title}</div>
      </div>
      <div className="card-content">
        <div className="product-price">
          <div className="price">&#8377; {price}</div>
          <div className="previous-price">&#8377; {oldPrice}</div>
        </div>
        <div className="discount">{discount} off</div>
      </div>

      <div className="card-actions">
        <PrimaryButton>Add to Cart</PrimaryButton>
        <SecondaryButton>Add to Wishlist</SecondaryButton>
      </div>
    </div>
  );
};
