

import React from 'react';
import ListItem from './list_item'
import NavButton from './nav_button'

export default (props)=> {
    
    const listElements= props.toDos.map((item)=>{
    return (
        <ListItem 
        complete={()=>props.complete(item._id)} 
        remove={()=>props.remove(item._id)} 
        key={item._id}
        title={item.title}
        completeStatus={item.complete}
        />
        );
    });

    return (
        <div>
            <h1 className='center'>To-Do List</h1>
            <NavButton to='/add-item' text='Add Item' />
        
            <ul className='collection'>
                {listElements}
            </ul>
        </div>
    );
}
