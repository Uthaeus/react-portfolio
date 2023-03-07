import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSidebarList = (props) => {
  const portfolioList = props.data.map((item) => {
    return (
      <div key={item.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img src={item.thumb_image_url} alt="" />
        </div>
        <h1 className="title">{item.name}</h1>
        <h2>{item.id}</h2>
        <button onClick={() => props.handleDeleteClick(item)}>
          <FontAwesomeIcon icon="fa-solid fa-trash" />
        </button>
      </div>
    );
  });

  return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;
