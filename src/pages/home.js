import axios from "axios";

import PortfolioContainer from "../component/portfolio/portfolio-container";

const HomePage = () => {
    const getPortfolioItems = () => {
        axios.get('https://romanlavery.devcamp.space/portfolio/portfolio_items')
        .then(response => {

        })
        .catch(error => {

        });
    }

    return (
        <div>
            <h1>Homer Simpson's Portfolio</h1>
            <PortfolioContainer />
        </div>
    );
};


export default HomePage;