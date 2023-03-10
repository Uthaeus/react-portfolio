import { useState } from "react";
import { Link } from "react-router-dom";

const PortfolioItem = (props) => {
  const { description, thumb_image_url, logo_url, id } = props.item;
  const [portfolioItemClass, setPortfolioItemClass] = useState("");

  const handleMouseEnter = () => {
    setPortfolioItemClass("image-blur");
  };

  const handleMouseLeave = () => {
    setPortfolioItemClass("");
  };

  return (
    <Link to={`/portfolio/${id}`}>
      <div
        className="portfolio-item-wrapper"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div
          className={"portfolio-img-background " + portfolioItemClass}
          style={{
            backgroundImage: `url(${thumb_image_url})`,
          }}
        />

        <div className="img-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} alt="" />
          </div>
          <div className="subtitle">{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
