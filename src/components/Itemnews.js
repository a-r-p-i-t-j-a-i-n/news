import React, { Component } from 'react';

export class Itemnews extends Component {
  render() {
    let { title, description, Imageurl } = this.props;
    return (
      <div className="card" style={{ width: "18rem", marginBottom: "20px" }}>
        <img src={Imageurl} className="card-img-top" alt="..." />
        <div className="card-body" style={{ maxHeight: "200px", overflow: "hidden" }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ marginBottom: "0" }}>{description}</p>
          <a href="url" className="btn btn-primary" style={{ position: "absolute", bottom: "10px" }}>Read more</a>
        </div>
      </div>
    );
  }
}

export default Itemnews;
