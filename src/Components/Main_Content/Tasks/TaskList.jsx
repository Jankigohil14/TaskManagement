import React, {useEffect, useState} from 'react';
import TaskNavbar from './TaskNavbar';
import {getTasks} from '../../Services/fakeTaskList';
import TaskTable from './TaskTable';

const task_list = getTasks();

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(task_list);
    }, []);
    return (
        <React.Fragment>
            <div className='ms-0 me-4'>
                <div className='row justify-content-start align-items-center'>
                    <div className='col-sm-12 col-md-9'>
                        <h1 className='display-5'>Task List</h1>
                    </div>
                </div>
                <TaskNavbar />
                <div className='row justify-content-start align-items-center mt-2'>
                    <div className='col-sm-12'>
                        <TaskTable tasksData={tasks} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TaskList;
