import { useState } from "react";

import PortfolioItem from "./portfolio-item";

const INITIAL_DATA = [
    {title: 'Quip', category: 'eCommerce', slug: 'quip'},
    {title: 'Eventbrite', category: 'Scheduling', slug: 'eventbrite'},
    {title: 'Ministry Safe', category: 'Enterprise', slug: 'ministry-safe'},
    {title: 'SwingAway', category: 'eCommerce', slug: 'swingaway'}
];

const PortfolioContainer = props => {
    const [pageTitle, setPageTitle] = useState('');
    const [data, setData] = useState(INITIAL_DATA);
    const [isLoading, setIsLoading] = useState(false);

    const handleFilter = (filter) => {
        const updatedData = data.filter(item => {
            return item.category === filter;
        });
        return updatedData;
    }

    const portfolioItems = () => {

        return data.map(item => {
            return <PortfolioItem title={item.title} slug={item.slug} />;
        })
    }

    if (isLoading) {
        return <div>Loading....</div>
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