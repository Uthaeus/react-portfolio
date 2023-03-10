import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PortfolioDetail = (props) => {
    const currentItem = useParams();
    const [portfolioItem, setPortfolioItem] = useState({});

    const getPortfolioItem = () => {
        axios.get(`https://romanlavery.devcamp.space/portfolio/portfolio_items/${currentItem.slug}`)
        .then(response => {
            setPortfolioItem(response.data.portfolio_item);
        }).catch(error => {
            console.log('getPortfolioItem portfolio-detail error', error);
        });
    }

    useEffect(() => {
        getPortfolioItem();
    }, []);

    const { id, name, description, url } = portfolioItem;

    return (
        <>
        <h1>Portfolio Detail for {id}</h1>
        </>
    );
};


export default PortfolioDetail;