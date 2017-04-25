import React from 'react';
import { vote } from './actions';
import { connect } from 'react-redux';
import './post.css';

/**
 * Este componente es el encargado de renderizar 1 solo posts.
 *
 * Podríamos llamarlo PostItem también.
 */
const Post = ({id, title, summary, votes, vote}) => {
  return (
    <div className="post col-xs-12 col-md-4">
      <div className="thumbnail">
        <div className="caption">
          <h3>{title}</h3>
          <p>{summary}</p>
          <p>
            VOTOS: {votes || 0}
            <button className="btn btn-success" onClick={ event => vote(id) }>+</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => state,
  { vote }
)(Post);