import React from 'react';
import ReactDOM from 'react-dom';
import SinglePost from './singlePost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SinglePost />, div);
  ReactDOM.unmountComponentAtNode(div);
});
