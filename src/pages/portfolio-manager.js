import { useState, useEffect } from "react";
import axios from "axios";

import PortfolioSidebarList from "../component/portfolio/portfolio-sidebar-list";
import PortfolioForm from "../component/portfolio/portfolio-form";

const PortfolioManager = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [portfolioToEdit, setPortfolioToEdit] = useState({});

  const clearPortfolioToEdit = () => {
    setPortfolioToEdit({});
  }

  const handleEditClick = (portfolioItem) => {
    setPortfolioToEdit(portfolioItem);
  };

  const handleDeleteClick = (portfolioItem) => {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
        { withCredentials: true }
      )
      .then((response) => {
        let updatedItems = portfolioItems.filter((item) => {
          return item.id !== portfolioItem.id;
        });
        setPortfolioItems(updatedItems);
        return response.data;
      })
      .catch((error) => {
        console.log("handleDeleteClick error", error);
      });
  };

  const handleNewFormSubmission = (portfolioItem) => {
    let updatedPortfolioItems = [portfolioItem].concat(portfolioItems);

    setPortfolioItems(updatedPortfolioItems);
  };

  const handleEditFormSubmission = () => {
    getPortfolioItems();
  };

  const handleFormSubmissionError = (error) => {
    console.log("handleFormSubmissionError", error);
  };

  const getPortfolioItems = () => {
    axios
      .get(
        "https://romanlavery.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc",
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setPortfolioItems([...response.data.portfolio_items]);
      })
      .catch((error) => {
        console.log("portfoliomanager getPortfolioItems error", error);
      });
  };

  useEffect(() => {
    getPortfolioItems();
  }, []);

  return (
    <div className="portfolio-manager-wrapper">
      <div className="left-column">
        <PortfolioForm
          handleNewFormSubmission={handleNewFormSubmission}
          handleEditFormSubmission={handleEditFormSubmission}
          handleFormSubmissionError={handleFormSubmissionError}
          clearPortfolioToEdit={clearPortfolioToEdit}
          portfolioToEdit={portfolioToEdit}
        />
      </div>

      <div className="right-column">
        <PortfolioSidebarList
          data={portfolioItems}
          handleDeleteClick={handleDeleteClick}
          handleEditClick={handleEditClick}
        />
      </div>
    </div>
  );
};

export default PortfolioManager;
