

const PortfolioDetail = (props) => {
    return (
        <h1>Portfolio Detail for {props.match.params.slug}</h1>
    );
};


export default PortfolioDetail;