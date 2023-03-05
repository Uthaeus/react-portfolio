import { Link } from "react-router-dom";

const PortfolioItem = props => {
    const { id, description, thumb_image_url, logo } = props.item;

    return (
        <div>
            <img src={thumb_image_url} alt='' />
            <img src={logo} alt='' />
            <div>{description}</div>
            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    );
};


export default PortfolioItem;