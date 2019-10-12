import React from 'react';
import { Input, Button, List } from 'antd'


const TodoListUI = (props)=>{
    return(
        <div style={{ margin: 10 }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{ width: 250, marginRight: 10 }}
                    onChange={props.changeInput}

                />
                <Button
                    type="primary"
                    onClick={props.addBtn}
                >Add</Button>
            </div>
            <div style={{ marginTop: 10, width: 300 }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (<List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>)}
                />
            </div>
        </div>
    )
}


export default TodoListUI;