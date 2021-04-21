import React from 'react';
import './Business.css';

class Business extends React.Component {

business = this.props.business;
render () {
  console.log(this.business)
  return (
    <div className="Business">
      <div className="image-container">
        <a href={this.business.url} rel="noopener noreferrer" target="_blank">
        <img src={this.business.imageSrc} alt={this.business.category}/>
        </a>
      </div>
      <h2>{this.business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{this.business.address}</p>
          <p>{this.business.city}</p>
          <p>{this.business.state} {this.business.zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>{this.business.category}</h3>
          <h3 className="rating">{this.business.rating} stars</h3>
          <p>{this.business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
    )
  }
};
   

export default Business;