import { Link } from "react-router-dom";

const PortfolioItem = props => {
    const { id, description, thumb_image_url, logo } = props.item;

    return (
        <div className="portfolio-item-wrapper">
            <div
                className="portfolio-img-background"
                style={{
                    backgroundImage: `url(${thumb_image_url})`
                }}     
            />

            <img src={logo} alt='' />
            <div>{description}</div>
            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    );
};


export default PortfolioItem;