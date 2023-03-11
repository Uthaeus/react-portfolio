import { useState, useEffect } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

const PortfolioContainer = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPortfolioItems = (filter = null) => {
    setIsLoading(true);
    axios
      .get("https://romanlavery.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        if (filter) {
          const updatedData = response.data.portfolio_items.filter((item) => {
            return item.category === filter;
          });
          setData(updatedData);
        } else {
          setData([...response.data.portfolio_items]);
        }
      })
      .catch((error) => {
        console.log("portfolio container getPortfolioItems error", error);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    getPortfolioItems();
  }, []);

  const handleFilter = (filter) => {
    if (filter === "CLEAR_FILTERS") {
      getPortfolioItems();
    } else {
        getPortfolioItems(filter);
    }
  };

  const portfolioItems = data.map((item) => {
    return <PortfolioItem key={item.id} item={item} />;
  });

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="homepage-wrapper">
      <div className="filter-links">
        <button className="btn" onClick={() => handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button className="btn" onClick={() => handleFilter("Scheduling")}>
          Scheduling
        </button>
        <button className="btn" onClick={() => handleFilter("Enterprise")}>
          Enterprise
        </button>
        <button className="btn" onClick={() => handleFilter("CLEAR_FILTERS")}>
          All
        </button>
      </div>

      <div className="portfolio-items-wrapper">{portfolioItems}</div>
    </div>
  );
};

export default PortfolioContainer;
