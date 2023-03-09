import { useState, useEffect } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";


const PortfolioContainer = props => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getPortfolioItems = () => {
        setIsLoading(true);
        axios.get('https://romanlavery.devcamp.space/portfolio/portfolio_items')
        .then(response => {
            setData([...response.data.portfolio_items]);
        })
        .catch(error => {
            console.log('portfolio container getPortfolioItems error', error);
        });
        setIsLoading(false);
    }

    useEffect(() => {
        getPortfolioItems();
    }, [])

    const handleFilter = (filter) => {
        const updatedData = data.filter(item => {
            return item.category === filter;
        });
        return updatedData;
    }

    const portfolioItems = data.map(item => {
        return <PortfolioItem key={item.id} item={item} />;
    });

    if (isLoading) {
        return <div>Loading....</div>
    }

    return (
        <div className="portfolio-items-wrapper">
            <button className="btn" onClick={() => handleFilter('eCommerce')}>eCommerce</button>
            <button className="btn" onClick={() => handleFilter('Scheduling')}>Scheduling</button>
            <button className="btn" onClick={() => handleFilter('Enterprise')}>Enterprise</button>
        
            {portfolioItems}
        </div>
    );
};


export default PortfolioContainer;