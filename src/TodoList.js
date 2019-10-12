import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import { changeInputAction,deleteItemAction,addItemAction,getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInput = this.changeInput.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addBtn = this.addBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return (  
            <TodoListUI
                inputValue = {this.state.inputValue}
                changeInput = {this.changeInput}
                addBtn = {this.addBtn}
                deleteItem = {this.deleteItem}
                list = {this.state.list}
            />
        );
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5da1a7d87ab42e4fa1407438/example/todoList')
        .then((res)=>{
            console.log(res)
            const action = getListAction(res.data)
            store.dispatch(action)
        });
    }
    changeInput(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    addBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action =deleteItemAction(index)
        store.dispatch(action)
    }
        
    
}
 
export default TodoList;