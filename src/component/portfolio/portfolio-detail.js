import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PortfolioDetail = (props) => {
  const currentItem = useParams();
  const [portfolioItem, setPortfolioItem] = useState({});

  const getPortfolioItem = () => {
    axios
      .get(
        `https://romanlavery.devcamp.space/portfolio/portfolio_items/${currentItem.slug}`
      )
      .then((response) => {
        setPortfolioItem(response.data.portfolio_item);
      })
      .catch((error) => {
        console.log("getPortfolioItem portfolio-detail error", error);
      });
  };

  useEffect(() => {
    getPortfolioItem();
  }, []);

  const {
    id,
    name,
    description,
    url,
    banner_image_url,
    category,
    logo_url,
    thumb_image_url,
  } = portfolioItem;

  const bannerStyles = {
    backgroundImage: `url(${banner_image_url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat'
  };

  const logoStyles = {
    width: "200px",
  };

  return (
    <div className="portfolio-detail-wrapper">
      <div
        className="banner"
        style={bannerStyles}
      >
        <img src={logo_url} alt="" style={logoStyles} />
      </div>

      <div className="portfolio-detail-description-wrapper">
        <div className="description">{description}</div>
      </div>

      <div className="bottom-content-wrapper">
        <a href={url} className="site-link" target="_blank" rel="noreferrer">
          Visit {name}
        </a>
      </div>
    </div>
  );
};

export default PortfolioDetail;
