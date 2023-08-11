import React from 'react';
import _ from 'lodash';

const TaskTable = ({tasksData}) => {
    const columns = [
        {_name: 'task_id', label: 'Task Id'},
        {_name: 'project_id', label: 'Project Id'},
        {_name: 'task_title', label: 'Task Title'},
        {_name: 'description', label: 'Description'},
        {_name: 'status', label: ' Status'},
        {_name: 'target_date', label: 'Target Date'},
        {_name: 'criticality', label: 'Criticality'},
        {
            _name: 'impact',
            label: 'Impact',
            content: (taskData) => {
                return taskData.impact.join(', ');
            },
        },
        {_name: 'assign_to', label: 'Assign To'},
        {_name: 'created_by', label: 'Created By'},
    ];

    const render_table_cell = (item, column) => {
        if (column.content) {
            return column.content(item);
        }
        return _.get(item, column._name);
    };

    const createKey = (item, column) => {
        return item._id + (column._name || column.key);
    };
    return (
        <React.Fragment>
            <div className='table-responsive'>
                <table className='table  table-hover'>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column._name}
                                    scope='col'
                                    className='shrink-1'
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {tasksData.map((task) => (
                            <tr key={task.task_id} className='align-middle'>
                                {columns.map((col) => (
                                    <td
                                        className='text-start'
                                        key={createKey(task, col)}
                                    >
                                        {render_table_cell(task, col)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};

export default TaskTable;
