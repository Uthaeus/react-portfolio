import { useState, useEffect } from "react";
import axios from "axios";

import PortfolioSidebarList from "../component/portfolio/portfolio-sidebar-list";
import PortfolioForm from "../component/portfolio/portfolio-form";

const PortfolioManager = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  const handleSuccessfulFormSubmission = (portfolioItem) => {
    let updatedPortfolioItems = [portfolioItem].concat(portfolioItems);

    setPortfolioItems(updatedPortfolioItems);
  };

  const handleFormSubmissionError = (error) => {
    console.log("handleFormSubmissionError", error);
  };

  const getPortfolioItems = () => {
    axios
      .get("https://romanlavery.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {
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
        <PortfolioForm
          handleSuccessfulFormSubmission={handleSuccessfulFormSubmission}
          handleFormSubmissionError={handleFormSubmissionError}
        />
      </div>

      <div className="right-column">
        <PortfolioSidebarList data={portfolioItems} />
      </div>
    </div>
  );
};

export default PortfolioManager;