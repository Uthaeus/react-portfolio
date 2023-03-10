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

  return (
    <div>
        <h2>{name}</h2>
    </div>
  );
};

export default PortfolioDetail;
