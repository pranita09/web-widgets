/* eslint-disable react/prop-types */
import "./Card.css";
import { PrimaryButton, SecondaryButton } from "../Button/Button";
import { MdCancel } from "../../utils/icons";

export const Card = ({ product, shadow }) => {
  const { title, imgSrc, price, oldPrice, discount } = product;
  return (
    <div
      className="card-wrapper basic-card"
      style={{ boxShadow: shadow ? "1px 1px 15px 2px #cfcfcf" : null }}
    >
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

export const CardWithDismiss = ({ product }) => {
  const { title, imgSrc, price, oldPrice, discount } = product;
  return (
    <div className="card-wrapper card-w-dismiss">
      <div>
        <img src={imgSrc} alt={title} className="card-img" />
        <div className="card-dismiss">
          <MdCancel />
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

export const CardWithTextOverlay = ({ product }) => {
  const { title, imgSrc, price, oldPrice, discount } = product;
  return (
    <div className="card-wrapper card-w-overlay">
      <div className="overlay-bg">
        <img src={imgSrc} alt={title} className="card-img" />

        <div className="card-heading">{title}</div>
      </div>

      <div className="overlay-text">Out of Stock</div>

      <div className="card-content overlay-bg">
        <div className="product-price">
          <div className="price">&#8377; {price}</div>
          <div className="previous-price">&#8377; {oldPrice}</div>
        </div>
        <div className="discount">{discount} off</div>
      </div>

      <div className="card-actions overlay-bg">
        <PrimaryButton>Add to Cart</PrimaryButton>
        <SecondaryButton>Add to Wishlist</SecondaryButton>
      </div>
    </div>
  );
};

export const CardTextOnly = ({ product }) => {
  const { title, price, oldPrice, discount } = product;
  return (
    <div className="card-wrapper card-text-only">
      <div>
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

export const HorizontalCard = ({ product }) => {
  const { title, imgSrc } = product;
  return (
    <div className="card-wrapper card-horizontal">
      <div className="row">
        <img src={imgSrc} alt={title} className="card-img" />

        <div className="card-heading">{title}</div>
      </div>

      <div className="card-actions">
        <PrimaryButton>Add to Cart</PrimaryButton>
        <SecondaryButton>Add to Wishlist</SecondaryButton>
      </div>
    </div>
  );
};
