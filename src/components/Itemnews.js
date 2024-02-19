import React, { Component } from 'react'

export class Itemnews extends Component {
  render() {
    let {title,description,Imageurl}=this.props
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={Imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="url" className="btn btn-primary">Read more</a>
        </div>
      </div>
    )
  }
}

export default Itemnews