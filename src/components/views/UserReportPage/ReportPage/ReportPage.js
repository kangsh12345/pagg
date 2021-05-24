import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { InputBase, Button, TextField } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { DropzoneArea } from 'material-ui-dropzone';
import "./ReportPage.css";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: 15,
        marginLeft: 15,
        minWidth: 200,
        backgroundColor: "#ffffff",
    },
    dropZone: {
        height: '50px',
    }
}));


function ReportPage() {
    const styleHeader = {
        position: 'relative',
        width: '1000px',
        margin: '0 auto',
        height: '70px',
        backgroundColor: '#eeeeee',
        marginTop: '30px',
        lineHeight: '70px',
        paddingLeft: '15px',
        borderTop: '1px solid #b3b3b3',
        borderLeft: '1px solid #b3b3b3',
        borderRight: '1px solid #b3b3b3',

        fontSize: '25px',
        fontWeight: '700',
    }

    const bigBox = {
        position: 'relative',
        backgroundColor: '#ffffff',
        border: '1px solid #b3b3b3',
        marginTop: '0px',
        paddingBottom: '50px',
        width: '1000px',
        height: '700px',
        margin: '0px auto',
    }

    const styleInputBase = {
        position: 'absolute',
        marginLeft: '15px',
        marginTop: '15px',
        padding: '0px 14px 0 14px',
        width: '200px',
        height: '28px',
        border: '1px solid #b3b3b3',
        backgroundColor: '#ffffff',
        // borderRadius: '10px',
    }

    const styleInputBase2 = {
        position: 'absolute',
        marginLeft: '14px',
        marginTop: '55px',
        padding: '7px 14px 7px 14px',
        width: '970px',
        height: '150px',
        border: '1px solid #b3b3b3',
        outline: '0px',
        fontSize: '16px',
        resize: 'none',

        // borderRadius: '10px',
    }

    const styleTagImg = {
        position: 'absolute',
        marginTop: '225px',
        marginLeft: '20px',
        fontSize: '17px',
        color: '#cccccc',
    }

    const styleTagImgText = {
        position: 'absolute',
        marginTop: '223px',
        marginLeft: '44px',
        color: '#9c9c9c',
    }

    const styleInputBase3 = {
        position: 'absolute',
        marginLeft: '15px',
        marginTop: '250px',
        padding: '1px 14px 0 14px',
        width: '970px',
        height: '40px',
        border: '1px solid #b3b3b3',
        outline: '0px',

        // borderRadius: '10px',
    }

    const styleDrop = {
        positon: 'absolute',
        marginTop: '320px',
        marginLeft: '15px',
        width: '970px',
        marginLeft: '21px',
        // height: '130px',
        // border: '1px solid #b3b3b3',
    }

    const styleButtonMatch = {
        position: 'absolute',
        backgroundColor: '#00c261',
        // padding: '10px 30px 10px 30px',
        color: '#ffffff',
        outline: '0px',
        left: '0px',
        right: '0px',
        margin: '0 auto',
        marginTop: '200px',
        fontSize: '20px',

    }



    const classes = useStyles();
    const [kind, setKind] = useState('');
    const [file, setfile] = useState(true);
    const [file2, setfile2] = useState(true);



    const [imagefile, setimagefile] = useState(null);
    const [refile, setrefile] = useState(null);

    const trollname = useRef(null);
    // trollname.current.value
    const abouttroll = useRef(null);
    const tag = useRef(null);


    const handleSubmit = async e => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('Trollname', trollname.current.value);
        formData.append('Trolltype', kind);
        formData.append('Trollinfo', abouttroll.current.value);
        formData.append('Trolltag', tag.current.value);
        formData.append('picture', imagefile);
        formData.append('gamefile', refile);

        return axios.post("/report", formData).then(res => {
            alert('성공')
        }).catch(err => {
            alert('실패')
        })
    }


    const handleChange = e => {
        setKind(e.target.value);
    };


    const aa = e => {
        setfile(true);
    }

    const aa2 = e => {
        setfile(false);
    }

    const bb = e => {
        setfile2(true);
    }

    const bb2 = e => {
        setfile2(false);
    }

    const te1 = files => { // 사진
        setimagefile(files[0])
    }

    const te2 = files => { // 사진
        setrefile(files[0])
    }


    return (
        <div>
            <div style={styleHeader}>
                유저 신고
            </div>
            <div style={bigBox} onSubmit={handleSubmit}>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>
                            트롤 유형
                    </InputLabel>
                        <Select
                            value={kind}
                            onChange={handleChange}
                            label="트롤 유형"
                        >
                            <MenuItem value={"우물 잠수"}>우물 잠수</MenuItem>
                            <MenuItem value={"고의 던짐"}>고의 던짐</MenuItem>
                            <MenuItem value={"헬퍼"}>헬퍼</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div >
                    <InputBase style={styleInputBase} placeholder="소환사명" inputRef={trollname} />
                </div>
                <div >
                    <TextField multiline rows={7} InputProps={{ disableUnderline: true }} style={styleInputBase2} placeholder="" inputRef={abouttroll}></TextField>


                </div>
                <div>
                    <LocalOfferIcon style={styleTagImg} />
                    <span style={styleTagImgText}>Tag (쉼표로 구분)</span>
                    <InputBase style={styleInputBase3} placeholder="욕설,cs뺏음,..." inputRef={tag}></InputBase>
                </div>
                <div style={styleDrop} className="dropzone">
                    <DropzoneArea
                        dropzoneText={file ? "신고 관련 이미지 첨부" : ""}
                        Icon={file ? AddCircleIcon : "none"}
                        filesLimit='1'
                        showAlerts={false}
                        onDrop={aa2}
                        onDelete={aa}
                        onChange={te1}
                    />

                    <DropzoneArea
                        dropzoneText={file2 ? "다시보기 파일(.rofl) 첨부" : ""}
                        Icon={file2 ? AddCircleIcon : "none"}
                        filesLimit='1'
                        showAlerts={false}
                        onDrop={bb2}
                        onDelete={bb}
                        onChange={te2}
                    />

                </div>
                <div>
                    <Button type="submit" variant="contained" style={styleButtonMatch} onClick={handleSubmit}>작성 완료</Button>
                </div>
            </div>
        </div>
    )
}

export default ReportPage
