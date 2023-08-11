const tasklist = [
    {
        task_id: 'TASKID01',
        project_id: 'PID01',
        task_title: 'Defining Project',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        status: 'Complete',
        target_date: '2023-04-02',
        criticality: 'Medium',
        impact: ['tecnical', 'cost'],
        assign_to: 'Project Manager',
        created_by: 'BO',
    },
    {
        task_id: 'TASKID02',
        project_id: 'PID01',
        task_title: 'Requirement Analysis',
        description:
            'The SRS must contain all the requirements for the feature',
        status: 'Complete',
        target_date: '2022-05-02',
        criticality: 'Medium',
        impact: ['tecnical', 'status'],
        assign_to: 'Project Manager',
        created_by: 'BO',
    },
    {
        task_id: 'TASKID03',
        project_id: 'PID01',
        task_title: 'Create SRS',
        description:
            'The SRS must contain all the requirements for the feature',
        status: 'Complete',
        target_date: '2022-05-02',
        criticality: 'Medium',
        impact: ['tecnical', 'status'],
        assign_to: 'Project Manager',
        created_by: 'BO',
    },
    {
        task_id: 'TASKID04',
        project_id: 'PID01',
        task_title: 'Project Planning',
        description:
            'The SRS must contain all the requirements for the feature',
        status: 'Complete',
        target_date: '2022-05-02',
        criticality: 'Medium',
        impact: ['tecnical', 'status', 'timeline'],
        assign_to: 'Project Manager',
        created_by: 'BO',
    },
    {
        task_id: 'TASKID05',
        project_id: 'PID01',
        task_title: 'Project Setup',
        description:
            'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        status: 'Active',
        target_date: '2024-01-03',
        criticality: 'High',
        impact: ['tecnical', 'quality', 'cost'],
        assign_to: 'Project Manager',
        created_by: 'BO',
    },
    {
        task_id: 'TASKID06',
        project_id: 'PID01',
        task_title: 'Resource Management',
        description:
            'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        status: 'Active',
        target_date: '2024-01-03',
        criticality: 'High',
        impact: ['tecnical', 'quality', 'cost'],
        assign_to: 'BO',
        created_by: 'BO',
    },
    {
        task_id: 'TASKID07',
        project_id: 'PID01',
        task_title: 'Risk Management',
        description:
            'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        status: 'Active',
        target_date: '2024-01-03',
        criticality: 'High',
        impact: ['tecnical', 'quality', 'cost'],
        assign_to: 'BO',
        created_by: 'BO',
    },
];

export function getTasks() {
    return tasklist;
}

export function getTask(id) {
    return tasklist.find((m) => m.task_id === id);
}
