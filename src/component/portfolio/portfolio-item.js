import { Link } from "react-router-dom";

const PortfolioItem = props => {

    return (
        <div>
            <h3>{props.title}</h3>

            <Link to={`/portfolio/${props.slug}`}>Link</Link>
        </div>
    );
};


export default PortfolioItem;