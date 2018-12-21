

import React, {Component} from 'react';


export default class AddItem extends Component{
    state={
        title:'',
        details:''
    }

    handleSaveItem=(e)=>{
        e.preventDefault();

        console.log('New Item:',this.state);

        this.props.add(this.state);
        this.reset();
    }

    reset=()=>{
        this.setState({
            title:'',
            details:''
        });
    }

    render(){
        const{title, details}=this.state;
    
        return (
            <form onSubmit={this.handleSaveItem}>
                <div className="row">
                    <div className='input-field col s8 offset-s2'>
                    <input onChange={(e)=>this.setState({title:e.target.value})} value={title} id='title' type="text" name='title' autoComplete='off'/>
                    <label htmlFor='title'>Title</label>
                    </div>
                </div>
                <div className="row">
                    <div id='details' className='input-field col s8 offset-s2'>
                    <input onChange={(e)=>this.setState({details:e.target.value})} value={details} htmlFor='details' type="text" name='details' autoComplete='off'/>
                    <label>Details</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 center">
                        <button type='button' onClick={this.reset} className='btn red waves-effect waves-light'>Cancel</button>
                    </div>
                    <div className="col s6 center">
                        <button className='btn green waves-effect waves-light'>Add Item</button>
                    </div>
                </div>
            </form>
        );
    }
}