import React from 'react';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import Gantt, {
    Tasks,
    Dependencies,
    Resources,
    ResourceAssignments,
    Column,
    Editing,
    Toolbar,
    Item,
    Validation
} from 'devextreme-react/gantt';

import {tasks, dependencies, resources, resourceAssignments} from './data.js';

export class GanttWrapper extends React.Component {
    render() {
        return (
            <Gantt
                taskListWidth={300}
                scaleType="days"
                height={700}
                firstDayOfWeek={1}
            >

                <Tasks dataSource={tasks}/>
                <Resources dataSource={resources}/>
                <ResourceAssignments dataSource={resourceAssignments}/>

                <Toolbar>
                    <Item name="zoomIn"/>
                    <Item name="zoomOut"/>
                </Toolbar>

                <Column dataField="title" caption="Subject" width={300}/>

                <Editing enabled={true} allowTaskDeleting={true}/>
            </Gantt>
        );
    }
}