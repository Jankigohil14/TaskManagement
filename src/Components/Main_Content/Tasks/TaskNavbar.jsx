import React from 'react';
import DownloadExcelIcon from '../../../assets/SVGs/downloadExcel';
import {Button} from 'react-bootstrap';
import BtnRadio from '../../UI/BtnRadio';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

const tooltip = (
    <Tooltip id='download-tooltip'>
        Download Excel
        <br /> Spreadsheet
    </Tooltip>
);

const TaskNavbar = () => {
    return (
        <React.Fragment>
            <div className='row justify-content-between align-items-center mt-2 mb-3'>
                <div className='col-sm-12 col-md-6'>
                    <div className='d-flex justify-sm-content-start'>
                        <div
                            className='btn-group'
                            role='group'
                            aria-label='Basic radio toggle button group'
                        >
                            <BtnRadio id='btnRadio1' label='My Task' checked />
                            <BtnRadio id='btnRadio2' label='Team Task' />
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 mt-2 mt-md-0'>
                    <div className='d-flex justify-content-sm-start  justify-content-md-end'>
                        <Button className='btn btn-primary me-2'>
                            Add Task
                        </Button>
                        <Button className='btn btn-primary me-2'>
                            Manage Team
                        </Button>
                        <OverlayTrigger placement='top' overlay={tooltip}>
                            <Button className='btn btn-sm btn-success'>
                                <DownloadExcelIcon />
                                <span className='ms-1'> Download</span>
                            </Button>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TaskNavbar;
