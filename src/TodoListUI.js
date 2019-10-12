import React, { Component } from 'react';
import { Input, Button, List } from 'antd'


class TodoListUI extends Component {
    render() {
        return (
            <div style={{ margin: 10 }}>
                <div>
                    <Input
                        placeholder={this.props.inputValue}
                        style={{ width: 250, marginRight: 10 }}
                        onChange={this.props.changeInput}

                    />
                    <Button
                        type="primary"
                        onClick={this.props.addBtn}
                    >Add</Button>
                </div>
                <div style={{ marginTop: 10, width: 300 }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (<List.Item onClick={() => this.props.deleteItem(index)}>{item}</List.Item>)}

                    />


                </div>
            </div>
        );
    }
}


export default TodoListUI;