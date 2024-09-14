import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://up.yimg.com/ib/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&pid=Api&rs=1&c=1&qlt=95&w=147&h=98":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
  <p className="card-text">  {description}... </p>
    <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
