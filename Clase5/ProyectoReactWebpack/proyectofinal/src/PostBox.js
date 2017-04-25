import React from 'react';
import { submitPost, titleChange, summaryChange } from './actions';
import { connect } from 'react-redux';

const PostBox = ({title, summary, titleChange, summaryChange, submitPost}) => {
  return (

    <div className="col-md-12">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Agregar un nuevo Post</h3>
        </div>
        <div className="panel-body">
          <div className="form-group">
            <label>Titulo:</label>
            <input className="form-control" type="text" value={title} onChange={ e => titleChange(e.target.value) }/>
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea className="form-control" value={summary} onChange={ e => summaryChange(e.target.value) }/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={e => submitPost({title, summary})}>Submit</button>
          </div>
        </div>
        </div>
      </div>
  );
};

//state viene del provider
//connect recibe masStateToProps, mapDispatchToProps
//pasa el estado y las acciones al componente PostBox
export default connect(
  state => state.editor,
  { titleChange, summaryChange, submitPost }
)(PostBox);
