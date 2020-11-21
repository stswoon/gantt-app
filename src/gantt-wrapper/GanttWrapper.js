import React from 'react';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import {Button} from "antd";

import Gantt, {
    Tasks,
    Resources,
    ResourceAssignments,
    Column,
    Editing,
    Toolbar,
    Item
} from 'devextreme-react/gantt';

import {tasks, resources, resourceAssignments} from './data.js';

export class GanttWrapper extends React.Component {
    render() {
        return (
            <Gantt
                taskListWidth={0}
                scaleType="days"
                height={800}
                firstDayOfWeek={1}
                showResources={true}
                onClick={() => {}}
            >

                <Tasks dataSource={tasks} />
                <Resources dataSource={resources}/>
                <ResourceAssignments dataSource={resourceAssignments}/>

                <Toolbar>
                    <Item name="zoomIn"/>
                    <Item name="zoomOut"/>
                </Toolbar>

                <Column dataField="title" caption="Subject" width={300}/>

                <Editing enabled={false}/>
            </Gantt>
        );
    }
}
