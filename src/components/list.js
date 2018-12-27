

import React from 'react';
import ListItem from './list_item'

export default (props)=> {
    
    const listElements= props.toDos.map((item)=>{
    return (
        <ListItem complete={()=>props.complete(item._id)} 
        remove={()=>props.remove(item._id)} 
        key={item._id}
        title={item.title}
        completeStatus={item.complete}
        />
        );
    });

    return (
        <ul className='collection'>
            {listElements}
        </ul>
    );
}
