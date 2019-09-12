import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default class singlePost extends Component {

  render(){
    return(
      <li className="list-item" key={this.props.item.id}>
        <a href={`https://www.reddit.com/${this.props.item.permalink}`} target="_blank">
          <h3 className="list-item_title main-color title">{this.props.item.title}</h3>
        </a>
        <div className="list-item_score">
          <Link to={`post/${this.props.item.id}`}>
            <span className="list-item_score-prefixed">{this.props.item.subreddit_name_prefixed}</span>
          </Link>
          <span className="list-item_score-score secondery-color">{this.props.item.score}</span>
        </div>
      </li>

    )

  }
}
