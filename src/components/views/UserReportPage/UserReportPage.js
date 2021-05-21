import React, { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { InputBase } from '@material-ui/core';
import UserReportThing from './UserReportThing';
import "./UserReportPage.css";
import { Link } from 'react-router-dom'


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function UserReportPage() {

    const styleHeader = {
        position: 'relative',
        width: '1000px',
        margin: '0 auto',
        padding: '20px 0 0 0',
        height: '70px',
        // backgroundColor: '#eeeeee',

    }

    const styleSearchIcon = {
        position: 'absolute',
        marginLeft: '755px',
        marginTop: '1px',
        fontSize: '26px',
    }

    const styleInputBase = {
        position: 'absolute',
        marginLeft: '750px',
        marginTop: '0px',
        padding: '1px 10px 0 37px',
        width: '200px',
        height: '28px',
        border: '1px solid #d6d6d6',
        borderRadius: '10px',
    }

    const styleTuneIcon = {
        position: 'absolute',
        marginLeft: '933px',
        marginTop: '0px',
        fontSize: '26px',
        color: '#303030',
    }

    const styleBorder = {
        position: 'absolute',
        marginLeft: '970px',
        marginTop: '2px',
        fontSize: '22px',
        color: '#303030'
    }

    const bigBox = {
        position: 'relative',
        // backgroundColor: '#eeeeee',
        marginTop: '-20px',
        paddingBottom: '50px',
        width: '1000px',
        margin: '0px auto',
    }

    //////////////////

    const [open, setopen] = useState(false);

    const handleClickOpen = () => {
        setopen(true);
    }

    const handleClose = () => {
        setopen(false);
    }


    return (
        <div>
            <div style={styleHeader}>
                <SearchIcon style={styleSearchIcon} />
                <InputBase style={styleInputBase} placeholder="소환사명..." />
                {/* <a href='javascript:void(0)' onclick='preventClick(event)'>
                    <TuneIcon style={styleTuneIcon} onClick={handleClickOpen} />
                </a> */}
                <a href="/ReportPage">
                    <BorderColorIcon style={styleBorder} />
                </a>
            </div>
            <div style={bigBox}>
                <UserReportThing />
                <UserReportThing />

            </div>

            <Dialog
                fullWidth={true}
                maxWidth={"sm"}
                open={open}
                onClose={handleClose}
                // aria-labelledby="max-width-dialog-title"
                className= "dialog"
            >
                {/* <DialogTitle  id="max-width-dialog-title" style={{ textAlign: 'center' }}>필터</DialogTitle> */}
                <form>

                </form>

            </Dialog>
        </div>
    )
}

export default UserReportPage