import { useState } from "react";

import PortfolioItem from "./portfolio-item";

const PortfolioContainer = props => {
    const [pageTitle, setPageTitle] = useState('');
    const [data, setData] = useState([]);

    const portfolioItems = () => {

        return data.map(item => {
            return <PortfolioItem title={item.title} />;
        })
    }

    return (
        <>
            <h2>{pageTitle}</h2>
            
            {portfolioItems()}
        </>
    );
};


export default PortfolioContainer;