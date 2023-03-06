import { useState, useEffect } from "react";
import axios from "axios";

const PortfolioManager = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  const getPortfolioItems = () => {
    axios
      .get("https://romanlavery.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true,
      })
      .then((response) => {
        setPortfolioItems([...response.data.portfolio_items]);
      })
      .catch((error) => {
        console.log("portfoliomanager getPortfolioItems", error);
      });
  };

  useEffect(() => {
    getPortfolioItems();
  }, []);

  return (
    <div className="portfolio-manager-wrapper">
      <div className="left-column">
        <h1>form</h1>
      </div>

      <div className="right-column">
        <h1>sidebar</h1>
      </div>
    </div>
  );
};

export default PortfolioManager;
