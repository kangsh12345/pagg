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
        padding: '3.5px 14px 3.5px 14px',
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
            alert('??????')
        }).catch(err => {
            alert('??????')
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

    const te1 = files => { // ??????
        setimagefile(files[0])
    }

    const te2 = files => { // ??????
        setrefile(files[0])
    }


    return (
        <div>
            <div style={styleHeader}>
                ?????? ??????
            </div>
            <div style={bigBox} onSubmit={handleSubmit}>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>
                            ?????? ??????
                    </InputLabel>
                        <Select
                            value={kind}
                            onChange={handleChange}
                            label="?????? ??????"
                        >
                            <MenuItem value={"?????? ??????"}>?????? ??????</MenuItem>
                            <MenuItem value={"?????? ??????"}>?????? ??????</MenuItem>
                            <MenuItem value={"??????"}>??????</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div >
                    <InputBase style={styleInputBase} placeholder="????????????" inputRef={trollname} />
                </div>
                <div >
                    <TextField multiline rows={7} InputProps={{ disableUnderline: true }} style={styleInputBase2} placeholder="" inputRef={abouttroll}></TextField>


                </div>
                <div>
                    <LocalOfferIcon style={styleTagImg} />
                    <span style={styleTagImgText}>Tag (????????? ??????)</span>
                    <InputBase style={styleInputBase3} placeholder="??????,cs??????,..." inputRef={tag}></InputBase>
                </div>
                <div style={styleDrop} className="dropzone">
                    <DropzoneArea
                        dropzoneText={file ? "?????? ?????? ????????? ??????" : ""}
                        Icon={file ? AddCircleIcon : "none"}
                        filesLimit='1'
                        showAlerts={false}
                        onDrop={aa2}
                        onDelete={aa}
                        onChange={te1}
                    />

                    <DropzoneArea
                        dropzoneText={file2 ? "???????????? ??????(.rofl) ??????" : ""}
                        Icon={file2 ? AddCircleIcon : "none"}
                        filesLimit='1'
                        showAlerts={false}
                        onDrop={bb2}
                        onDelete={bb}
                        onChange={te2}
                    />

                </div>
                <div>
                    <Button type="submit" variant="contained" style={styleButtonMatch} onClick={handleSubmit}>?????? ??????</Button>
                </div>
            </div>
        </div>
    )
}

export default ReportPage
