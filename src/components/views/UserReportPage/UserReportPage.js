import React from 'react'

import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { InputBase } from '@material-ui/core';
import UserReportThing from './UserReportThing';

import { Link } from 'react-router-dom'


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
        marginLeft: '725px',
        marginTop: '1px',
        fontSize: '26px',
    }

    const styleInputBase = {
        position: 'absolute',
        marginLeft: '720px',
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
    }

    const styleBorder = {
        position: 'absolute',
        marginLeft: '970px',
        marginTop: '2px',
        fontSize: '22px',
    }

    const bigBox = {
        position: 'relative',
        // backgroundColor: '#eeeeee',
        marginTop: '-20px',
        paddingBottom: '50px',
        width: '1000px',
        margin: '0px auto',
    }




    return (
        <div>
            <div style={styleHeader}>
                <SearchIcon style={styleSearchIcon} />
                <InputBase style={styleInputBase} placeholder="소환사명..."/>
                <TuneIcon style={styleTuneIcon} />
                <a href="/ReportPage">
                    <BorderColorIcon style={styleBorder} />
                </a>
            </div>
            <div style={bigBox}>
                <UserReportThing />
                <UserReportThing />
                
            </div>
        </div>
    )
}

export default UserReportPage