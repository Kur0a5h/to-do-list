
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/app.css'
import axios from 'axios';
import {Route} from 'react-router-dom';
import React, {Component} from 'react';
import List from './list';
import AddItem from './add_item'
import ViewItem from './view_item';
import {BASE_URL, API_KEY} from '../config/api';



class App extends Component{
    state = {
        list:[]
    }

    componentDidMount(){
        this.getListData();
    }

    addItem = async(item)=>{
        await axios.post(BASE_URL + API_KEY, item);

        
        await this.getListData();
    }

    async getListData(){

        //.then promise method -- the old way that many still use so know how to use it
        // axios.get(BASE_URL+API_KEY).then((resp)=>{
        //     console.log('Get Todos Respons:',resp);
        // }).catch((err)=>{
        //     console.log('Error getting list data:',err.message);
        // });
        try{
        
        const resp = await axios.get(BASE_URL + API_KEY);

        this.setState({
            list:resp.data.todos
        });
    }catch(err){
        console.log('Something went wrong in getListData:',err.message);
    }

    }
    removeItem=async(id)=>{
        const resp = await axios.delete(`${BASE_URL}/${id+API_KEY}`);
        
        this.getListData();
    }

    toggleComplete=async(id)=>{
        const resp = await axios.put(`${BASE_URL}/${id+API_KEY}`);
        console.log(resp);
        this.getListData();
    }
    render(){
        const {list}=this.state;

        return(
            <div className='container'>
                <Route path='/' exact render={(props)=>{
                    return <List {...props} remove={this.removeItem} toDos={list} complete={this.toggleComplete}/>;
                }}/>

                <Route path='/add-item' render={(props)=>{
                    return <AddItem {...props} add={this.addItem}/>;
                }}/>

                <Route path='/item/:item_id' component={ViewItem}/>
            </div>
    );
    }
}

export default App;
