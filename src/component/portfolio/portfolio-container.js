
import PortfolioItem from "./portfolio-item";

const PortfolioContainer = props => {

    const portfolioItems = () => {
        const data = ['quip', 'event', 'safe'];

        return data.map(item => {
            return <PortfolioItem />;
        })
    }

    return (
        <>
            <h2>Portfolio items go here...</h2>
            
            {portfolioItems()}
        </>
    );
};


export default PortfolioContainer;