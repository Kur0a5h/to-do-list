import React from 'react';
import {Link} from 'react-router-dom';

export default (props) =>{
    const{completeStatus}=props;
   
    const showCheck= completeStatus ? 'check_box':'check_box_outline_blank';
    return(
        <li  className='collection-item row'>
        <div className="col s1 center">
        
        <i onClick={props.complete} className='material-icons'>{showCheck}</i>
        
        </div>
        <div className="col s9">
        <Link to={`/item/${props.itemId}`} >{props.title}</Link>
        </div>
        
        <div className="col s2 center">
        <button onClick={props.remove} className='btn-floating red darken-2 waves-light'>
        <i className='material-icons'>delete</i>
        </button>
        </div>
        
        </li>
    );
}