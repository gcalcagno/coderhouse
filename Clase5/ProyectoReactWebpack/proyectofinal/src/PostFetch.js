import React, { Component } from 'react';
import { requestPosts } from './actions';
import { connect } from 'react-redux';


const PostFetch = ({requestPosts}) => {
  return (
    <div className="col-md-12">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Listar Post desde archivo JSON</h3>
        </div>
        <div className="panel-body">
          <button className="btn btn-primary" onClick={ e => requestPosts() }>LISTAR POSTS</button>
        </div>
      </div>
    </div>
  );
}


//state viene del provider
//connect recibe masStateToProps, mapDispatchToProps
//pasa el estado y las acciones al componente PostFetch
export default connect(
  state => state,
  { requestPosts }
)(PostFetch);
