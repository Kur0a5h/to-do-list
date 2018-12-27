import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/app.css'
import React, {Component} from 'react';
import List from './list';
import AddItem from './add_item'
import dummyList from '../data/to_do_list'
import {randomString} from '../helpers';

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=budholly';

class App extends Component{
    state = {
        list:[]
    }

    componentDidMount(){
        this.getListData();
    }

    addItem = async(item)=>{
        const resp= await axios.post(BASE_URL + API_KEY, item);

        
        this.getListData();
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
            <h1 className='center'>To-Do List</h1>
            <AddItem add={this.addItem}/>
            <List complete={this.toggleComplete} remove={this.removeItem} toDos={list}/>
        </div>
    );
    }
}

export default App;
