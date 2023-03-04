import { useState } from "react";

import PortfolioItem from "./portfolio-item";

const PortfolioContainer = props => {
    const [pageTitle, setPageTitle] = useState('');
    const [data, setData] = useState([]);

    const handleFilter = (filter) => {
        const updatedData = data.filter(item => {
            return item.category === filter;
        })
    }

    const portfolioItems = () => {

        return data.map(item => {
            return <PortfolioItem title={item.title} />;
        })
    }

    return (
        <>
            <h2>{pageTitle}</h2>

            <button onClick={() => handleFilter('eCommerce')}>eCommerce</button>
            <button onClick={() => handleFilter('Scheduling')}>Scheduling</button>
            <button onClick={() => handleFilter('Enterprise')}>Enterprise</button>
            
            {portfolioItems()}
        </>
    );
};


export default PortfolioContainer;