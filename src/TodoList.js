import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store'
import { changeInputAction,deleteItemAction,addItemAction } from './store/actionCreators'



class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInput = this.changeInput.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addBtn = this.addBtn.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return (  
            <div style={{margin:10}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{width:250,marginRight:10}} 
                        onChange = {this.changeInput}
                        
                    />
                    <Button 
                        type="primary"
                        onClick={this.addBtn}
                    >Add</Button>
                </div>
                <div style={{marginTop:10,width:300}}>
                    <List
                        bordered
                        dataSource = {this.state.list}
                        renderItem = {(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    
                    />

                    
                </div>
            </div>
        );
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