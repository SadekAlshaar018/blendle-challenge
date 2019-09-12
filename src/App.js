import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Post from './component/Post';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      postIndex:[]
    };
  }
  componentDidMount () {
    const url = 'https://www.reddit.com/best.json?limit=10';
    setTimeout(() => {
      fetch(url)
      .then( data => {
        return data.json();
      })
      .then( data => {
        // console.log(data);
        var newdata = data.data.children.sort(this.sortArray);
        var postIndex=[];
        for(var i=0; i<newdata.length; i++){
          postIndex[i]= newdata[i].data.id;
        };
        console.log(postIndex);

        this.setState({
          data: newdata,
          postIndex
        });
      })
      .catch( err => {
        console.log(err);
      })
    }, 100);

  }

   sortArray(a, b) {
      return b.data.score-a.data.score
    // const scoreA = a.score;
    // const scoreB = b.score;

    // let defaultScor = 0;

    // if (scoreA < scoreB) {
    //   defaultScor = 1;
    // }else if (scoreA > scoreB) {
    //   defaultScor = -1;
    // }
    // return defaultScor;
  }
  render(){
    return (
      <div className="container">
        <div className="content">
      {
        this.state.data.length>0 ?
            <Switch>
              <Route
                path='/post/:id'
                render={params => <Post  params= {params.match.params} post={this.state.data[
                  this.state.postIndex.indexOf(
                    params.match.params.id
                  )
                ]}/>}
                />
              <Route  path='/' 
                render={props => <Home data={this.state.data}/>}
              />
            </Switch>
         : <div><h1>Loading...</h1></div>}
         </div>
      </div>
    );
  }
}
