import * as actionTypes from './actionTypes';

export function requestPosts() {
  console.log('hola');
  return async dispatch => {
    dispatch({
      type: actionTypes.REQUEST_POSTS
    });

    try {
      const response = await fetch('http://localhost:3001/posts');

      const data = await response.json();
      dispatch({
        type: actionTypes.REQUEST_POSTS_SUCCESS,
        posts: data
      });
      console.log(data);
    } catch(e) {
      dispatch({
        type: actionTypes.REQUEST_POSTS_ERROR
      });
    }
  }

 /* fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(posts => {
        let ps = posts.map( post => {
          post.votes = 0;
          return post;
        });
        console.log(ps);

        //this.setState({posts: ps});
      });*/
};

export function vote(id) {
  return dispatch => {
    dispatch({
      type: actionTypes.VOTE,
      id: id
    });
  };
};

export function submitPost(post) {
  return dispatch => {
    dispatch({
      type: actionTypes.SUBMIT_POST,
      post: post
    });
  };
};

export function titleChange(title) {
  return dispatch => {
    dispatch({
      type: actionTypes.TITLE_CHANGE,
      title: title
    });
  };
};

export function summaryChange(summary) {
  return dispatch => {
    dispatch({
      type: actionTypes.SUMMARY_CHANGE,
      summary: summary
    });
  };
};

/*export function listPost() {
  return dispatch => {
    dispatch({
      type: actionTypes.REQUEST_POSTS_SUCCESS,
      post: post
    });
  };
};*/

