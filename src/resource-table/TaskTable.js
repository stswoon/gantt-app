import React from "react";
import {Table, Button, Input} from "antd";
import {State} from "../State";
import uuid from 'react-uuid'

export class TaskTable extends React.Component {
    state = {resources: State.getResources()}; //{key, name}

    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Input value={text} onChange={(e) => this.changeName(e.target.value, record)}/>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <Button onClick={() => this.removeRecord(record)}>Delete</Button>
                </div>
            )
        }
    ];

    add = () => {
        const newResources = this.state.resources.map(item => item);
        newResources.push({key: uuid(), name: "NewResource"});
        this.setState({resources: newResources});
        State.setResources(newResources);
    };

    removeRecord = (record) => {
        const newResources = this.state.resources.filter(item => item !== record);
        this.setState({resources: newResources});
        State.setResources(newResources);
    };

    saveData = (resources) => {
        this.setState({resources: resources});
        State.setResources(resources);
    };

    changeName = (text, record) => {
        const newResources = this.state.resources.map(item => {
            if (item !== record) {
                return item;
            } else {
                return {...record, name: text}
            }
        });
        this.setState({resources: newResources});
        State.setResources(newResources);
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.add}>Add</Button>
                <Table size="small" columns={this.columns} dataSource={this.state.resources} onChange={this.saveData}/>
            </div>
        )
    }
}



