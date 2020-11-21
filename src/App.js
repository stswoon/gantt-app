import './App.css';
import React from "react";
import {GanttWrapper} from "./gantt-wrapper/GanttWrapper";
import {Modal, Button} from "antd";
import {ResourcesTable} from "./resource-table/ResourcesTable";
import {TaskTable} from "./resource-table/TaskTable";

class App extends React.Component {
    state = {visibleResources: false};

    render() {
        return (
            <div className="App">
                <Button type="primary" onClick={() => this.setState({visibleResources: true})}>Resources</Button>
                <Modal
                    title="Resources"
                    visible={this.state.visibleResources}
                    onOk={() => this.setState({visibleResources: false})}
                    onCancel={() => this.setState({visibleResources: false})}
                > <ResourcesTable/> </Modal>
                <Button type="primary" onClick={() => this.setState({visibleVacation: true})}>Vacation</Button>
                <Modal
                    title="Vacation"
                    visible={this.state.visibleVacation}
                    onOk={() => this.setState({visibleVacation: false})}
                    onCancel={() => this.setState({visibleVacation: false})}
                > <ResourcesTable/> </Modal>

                <Button type="primary" onClick={() => {}}>Open</Button>
                <Button type="primary" onClick={() => {}}>Save</Button>

                <div className="flex-horizontal">
                    <div>
                        <TaskTable/>
                    </div>
                    <div>
                        <GanttWrapper/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
