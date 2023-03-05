import { useState } from "react";

const PortfolioItem = ({ id, description, thumb_image_url, logo_url }) => {
    //const { id, description, thumb_image_url, logo_url } = props.item;
    const [portfolioItemClass, setPortfolioItemClass] = useState('');

    const handleMouseEnter = () => {
        setPortfolioItemClass('image-blur');
    }

    const handleMouseLeave = () => {
        setPortfolioItemClass('')
    }

    return (
        <div className="portfolio-item-wrapper"
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
        >
            <div
                className={"portfolio-img-background " + portfolioItemClass}
                style={{
                    backgroundImage: `url(${thumb_image_url})` || null
                }}     
            />

            <div className="img-text-wrapper">
                <div className="logo-wrapper">
                    <img src={logo_url} alt='' />
                </div>
                <div className="subtitle">
                    {description}
                </div>
            </div>
        </div>
    );
};


export default PortfolioItem;