import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSidebarList = (props) => {
  const portfolioList = props.data.map((item) => {
    return (
      <div key={item.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img src={item.thumb_image_url} alt="" />
        </div>
        <div className="text-content">
          <div className="title">{item.name}</div>
          <div className="actions">
            <div className="action-icon" onClick={() => props.handleEditClick(item)}>
              <FontAwesomeIcon icon="edit" />
            </div>
            <div className="action-icon" onClick={() => props.handleDeleteClick(item)}>
              <FontAwesomeIcon icon="trash" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;
