import React, { Component } from "react";
import axios from "axios";
import { DropzoneComponent } from "react-dropzone-component";

import '../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../node_modules/dropzone/dist/min/dropzone.min.css';

class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      category: "any",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleThumbDrop = this.handleThumbDrop.bind(this);
    this.handleBannerDrop = this.handleBannerDrop.bind(this);
    this.handleLogoDrop = this.handleLogoDrop.bind(this);

    this.thumbRef = React.createRef();
    this.bannerRef = React.createRef();
    this.logoRef = React.createRef();
  }

  componentDidUpdate() {
    if (Object.keys(this.props.portfolioToEdit).length > 0) {
        const {
            id,
            name,
            description,
            category,
            position,
            url,
            thumb_image_url,
            banner_image_url,
            logo_url
        } = this.props.portfolioToEdit;
        
        this.props.clearPortolioToEdit();

        this.setState({
            id: id,
            name: name || '',
            description: description || '',
            category: category || 'any',
            position: position || '',
            url: url || ''
        });
    }
  }

  handleThumbDrop() {
    return {
        addedfile: file => this.setState({ thumb_image: file })
    }
  }

  handleBannerDrop() {
    return {
        addedfile: file => this.setState({ banner_image: file })
    }
  }

  handleLogoDrop() {
    return {
        addedfile: file => this.setState({ logo: file })
    }
  }

  componentConfig() {
    return {
        iconFiletypes: ['.jpg', '.png'],
        showFiletypeIcon: true,
        postUrl: 'https://httpbin.org/post'
    }
  }

  djsConfig() {
    return {
        addRemoveLinks: true,
        maxFiles: 1
    }
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_item[name]", this.state.name);
    formData.append("portfolio_item[description]", this.state.description);
    formData.append("portfolio_item[url]", this.state.url);
    formData.append("portfolio_item[category]", this.state.category);
    formData.append("portfolio_item[position]", this.state.position);
    
    if (this.state.thumb_image) {
        formData.append("portfolio_item[thumb_image]", this.state.thumb_image);
    }
    if (this.state.banner_image) {
        formData.append("portfolio_item[thumb_image]", this.state.banner_image);
    }
    if (this.state.logo) {
        formData.append("portfolio_item[thumb_image]", this.state.logo);
    }

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    axios
      .post(
        "https://romanlavery.devcamp.space/portfolio/portfolio_items",
        this.buildForm(),
        { withCredentials: true }
      )
      .then((response) => {
        this.props.handleSuccessfulFormSubmission(response.data.portfolio_item);

        this.setState({
            name: "",
            description: "",
            category: "any",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: "",
        });

        [this.thumbRef, this.bannerRef, this.logoRef].forEach(ref => {
            ref.current.dropzone.removeAllFiles();
        })
      })
      .catch((error) => {
        console.log("portfolio form handleSubmit", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <form className="portfolio-form-wrapper" onSubmit={this.handleSubmit}>
        <div className="two-column">
          <input
            type="text"
            name="name"
            placeholder="Portfolio Item Name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="url"
            placeholder="URL"
            value={this.state.url}
            onChange={this.handleChange}
          />
        </div>

        <div className="two-column">
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={this.state.position}
            onChange={this.handleChange}
          />

          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            className='select-element'
          >
            <option value="any">Category</option>
            <option value="any">Any/All</option>
            <option value="eCommerce">eCommerce</option>
            <option value="Scheduling">Scheduling</option>
            <option value="Enterprise">Enterprise</option>
          </select>
        </div>

        <div className="one-column">
          <textarea
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>

        <div className="image-uploaders">
            <DropzoneComponent 
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handleThumbDrop()}
                ref={this.thumbRef}
            >
                <div className="dz-message">Thumbnail</div>
            </DropzoneComponent>
            <DropzoneComponent 
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handleBannerDrop()}
                ref={this.bannerRef}
            >
                <div className="dz-message">Banner</div>
            </DropzoneComponent>
            <DropzoneComponent 
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}
                eventHandlers={this.handleLogoDrop()}
                ref={this.logoRef}
            >
                <div className="dz-message">Logo</div>
            </DropzoneComponent>
        </div>

        <div>
          <button className="btn" type="submit">Save</button>
        </div>
      </form>
    );
  }
}

export default PortfolioForm;
