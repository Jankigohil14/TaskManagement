import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import RootLayot from '../Pages/RootLayout';
import ErroPage from '../Pages/ErroPage';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import TaskPage from './../Pages/TaskPage';
import ProjectPage from '../Pages/ProjectPage';
import TaskSummaryPage from '../Pages/TaskSummaryPage';

const AllRoutes = () => {
    const router_routes = createBrowserRouter([
        {
            path: '/',
            element: <RootLayot />,
            errorElement: <ErroPage />,
            children: [
                {index: true, element: <LoginPage />},
                {
                    path: 'index',
                    element: <HomePage />,
                    children: [
                        {
                            path: 'manage_tasks',
                            element: <TaskPage />,
                        },
                        {
                            path: 'manage_project',
                            element: <ProjectPage />,
                        },
                        {
                            path: 'task_summary',
                            element: <TaskSummaryPage />,
                        },
                    ],
                },
            ],
        },
    ]);

    return (
        <React.Fragment>
            <RouterProvider router={router_routes}></RouterProvider>
        </React.Fragment>
    );
};

export default AllRoutes;
