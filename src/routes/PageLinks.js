import ManageTaskIcon from '../assets/SVGs/ManageTaskIcon';
import TaskSummaryIcon from '../assets/SVGs/TaskSummaryIcon';
import ManageProjectIcon from './../assets/SVGs/ManageProjectIcon';

export const pagelinks = [
    {
        pagelink: 'manage_tasks',
        pagelink_icon: <ManageTaskIcon />,
        pageTitle: 'Manage Tasks',
    },
    {
        pagelink: 'manage_project',
        pagelink_icon: <ManageProjectIcon />,
        pageTitle: 'Manage Projects',
    },
    {
        pagelink: 'task_summary',
        pagelink_icon: <TaskSummaryIcon />,
        pageTitle: 'Task Summary',
    },
];
