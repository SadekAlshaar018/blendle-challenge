import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Back from '../Back.svg'
export default class Post extends Component {

  render() {
    const { params } = this.props
    console.log(params);
    const  formatNum = (num) => {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
    console.log(this.props);

    return (
      <div className="post__page">
        <div className="post__page-inner">
          <Link to={`/`}>
            <img src={Back} alt="" />
          </Link>
        </div>
        <div className="post__item" key={this.props.post.data.id}>
            <div className="post__item-details">
              <h1 className="main-color bold">{this.props.post.data.subreddit_name_prefixed}</h1>
              <span className="subdetails secondery-color">Subreddit details</span>
            </div>
            <div className="post__item-title">
              <h3 className="post_title main-color title">Title</h3>
              <span className="lightblue">{this.props.post.data.title}</span>
            </div>
            <div className="post__item-description">
            <h3 className="post_title main-color title">Public description</h3>
            {
              this.props.post.data.all_awardings.length > 0 ?
              <span className="lightblue">{this.props.post.data.all_awardings[0].description}</span> : <span className="lightblue">soory there is no description...</span>
            }
            </div>
            <div className="post__item-score main-color">
              <h3 className="post_title title">Subscriber count</h3>
              <span className="post_score-score lightblue">{formatNum(this.props.post.data.subreddit_subscribers)}</span>
            </div>
        </div>
      </div>
    )
  }
}
