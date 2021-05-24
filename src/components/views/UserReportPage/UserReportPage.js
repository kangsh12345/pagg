import React, { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { InputBase } from '@material-ui/core';
import UserReportThing from './UserReportThing';
import "./UserReportPage.css";
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: 15,
        marginLeft: 15,
        minWidth: 200,
        backgroundColor: "#ffffff",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function UserReportPage() {

    const classes = useStyles();
    const [kind, setKind] = useState('');
    const [tier, settier] = useState('')

    const handleChange1 = e => {
        setKind(e.target.value);
    };

    const handleChange2 = e => {
        settier(e.target.value);
    };

    const styleSelect = {
        position: 'absolute',
        marginTop: '-10px',
        marginLeft: '-15px',
    }







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
        marginTop: '35px',
        fontSize: '26px',
    }

    const styleInputBase = {
        position: 'absolute',
        marginLeft: '750px',
        marginTop: '34px',
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
        marginTop: '36px',
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

                <div style={styleSelect}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>
                            트롤 유형
                    </InputLabel>
                        <Select
                            value={kind}
                            onChange={handleChange1}
                            label="트롤유형"
                        >
                            <MenuItem value="">
                                <em>없음</em>
                            </MenuItem>
                            <MenuItem value={"우물 잠수"}>우물 잠수</MenuItem>
                            <MenuItem value={"고의 던짐"}>고의 던짐</MenuItem>
                            <MenuItem value={"헬퍼"}>헬퍼</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>
                            티어
                    </InputLabel>
                        <Select
                            value={tier}
                            onChange={handleChange2}
                            label="티어"
                        >
                            <MenuItem value="">
                                <em>없음</em>
                            </MenuItem>
                            <MenuItem value={"언랭"}>언랭</MenuItem>
                            <MenuItem value={"아이언"}>아이언</MenuItem>
                            <MenuItem value={"브론즈"}>브론즈</MenuItem>
                            <MenuItem value={"실버"}>실버</MenuItem>
                            <MenuItem value={"골드"}>골드</MenuItem>
                            <MenuItem value={"플래티넘"}>플래티넘</MenuItem>
                            <MenuItem value={"다이아"}>다이아</MenuItem>
                            <MenuItem value={"마스터"}>마스터</MenuItem>
                            <MenuItem value={"그랜드 마스터"}>그랜드 마스터</MenuItem>
                            <MenuItem value={"챌린저"}>챌린저</MenuItem>
                        </Select>
                    </FormControl>
                </div>



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
                className="dialog"
            >
                {/* <DialogTitle  id="max-width-dialog-title" style={{ textAlign: 'center' }}>필터</DialogTitle> */}
                <form>

                </form>

            </Dialog>
        </div>
    )
}

export default UserReportPage