import React, { Component } from 'react';
import SinglePost from './singlePost';
import '../App.css';
export default class Home extends Component {

  render () {
    const dataArray = this.props.data;
    // console.log(dataArray);
    return (
      <div className="block">
        <div className="block__head">
          <h1 className="block__head-title main-color">Home</h1>
          <h3 className="block_head-subtitle secondery-color">Top 10 posts</h3>
        </div>
        <div className="block__posts">
            <div className="main-list">
              <ul className="main-list_list">{dataArray.map( (item, id ) =>
              <SinglePost item={item.data} key={id}/>
                )}</ul>
            </div>
        </div>
      </div>
    )
  }
}
