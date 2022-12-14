import React, { useState } from 'react';
import axios from 'axios';
import PastRankList from '../Match/PastRankList';
import HashTagText from '../Match/HashTagText';
import { Link } from 'react-router-dom';

import { Button, Tab, Tabs, Paper, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import MatchInGameThing from './MatchInGameThing';
import MatchInGameThingRed from './MatchInGameThingRed';

function MatchInGame(props) {
    
    const styleHeader = {
        position: 'relative',
        width: '1000px',
        margin: '0 auto',
        padding: '20px 0 0 0',
    }

    const styleReport = {
        marginLeft: 'auto',
    }

    const stylePastRank = {
        marginTop: '-5px',
        paddingLeft: '30px',
        paddingBottom: '15px',
    }

    const styleFace = {
        display: 'inline-block',
        width: '100px',
        paddingLeft: '0px',
        verticalAlign: 'top',
    }

    const styleUserIcon = {
        position: 'relative',
    }

    const styleUserIconImage = {
        marginTop: '15px',
        display: 'block',
        width: '100px',
        height: '100px',
    }

    const styleUserLevel = {
        position: 'absolute',
        top: '100%',
        left: '50%',
        marginTop: '-14px',
        marginLeft: '-22px',
        width: '44px',
        height: '24px',
        paddingTop: '3px',
        boxSizing: 'borderBox',
        // background: url(../images/site / summoner / bg - levelbox.png),
        backgroundSize: '100%',
        lineHeight: '17px',
        fontSize: '14px',
        textAlign: 'center',
        color: '#eabd56',
    }

    const styleProfile = {
        position: 'relative',
        display: 'inline-block',
        height: '100px',
        margin: '0px 25px 0px 25px',
        verticalAlign: 'top',
        lineHeight: '1.1',
    }

    const styleUserInfo = {
        marginTop: '20px',
        fontSize: '25px',
        fontWeight: 'bold',
    }

    const styleButton = {
        position: 'absolute',
        left: '0px',
        right: '0px',
        bottom: '0px',
        fontSize: '0px',
        margin: '15px 0px -6px 0px',
        whiteSpace: 'nowrap',
    }

    const styleButtonMatch = {
        position: 'relative',
        backgroundColor: '#00c261',
        color: '#ffffff',
        outline: '0px',
    }

    const styleLastUpdate = {
        position: 'absolute',
        left: '0px',
        bottom: '-18px',
        height: '12px',
        color: '#99a2a2',
        fontSize: '11px',
    }

    const styleTrollInfo = {
        display: 'inline-block',
        width: '80px',
        paddingLeft: '500px',
        verticalAlign: 'top',
    }

    const styleTrollInfo2 = {
        position: 'relative',
    }

    const styleTrollImg = {
        borderRadius: "6px !important",
        marginTop: '25px',
        display: 'block',
        width: '80px',
        height: '80px',
    }

    const styleTrollState = {
        color: '#363636',
        position: 'absolute',
        top: '100%',
        left: '50%',
        marginLeft: '-60px',
        width: '200px',
        height: '24px',
        paddingTop: '3px',
        lineHeight: '17px',
        textAlign: 'center',
    }

    const styleHashTag = {
        display: 'flex',
        marginTop: '20px',
        height: '30px',
        backgroundColor: '#f2f2f2',
        border: '1px solid #cdd2d2',
    }

    const styleBigBox = {
        display: 'relative',
        width: '1000px',
        margin: '0px auto',
        verticalAlign: 'middle',
        paddingLeft: '30px',
        marginTop: '3px',
    }

    const styleTBox = {
        border: '1px solid #cdd2d2',
        boxShadow: '0px 1px #dcdfdf',
        background: '#f2f2f2',
        borderRadius: '2px',
        marginTop: '-5px',
    }

    const styleInGameBox = {
        position: 'relative',
        border: '1px solid #cdd2d2',
        boxShadow: '0px 1px #dcdfdf',
        background: '#f2f2f2',
        borderRadius: '2px',
        marginTop: '0px',
        height: '300px',
    }

    const styleNoImg = {
        display: 'block',
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '35px',
        left: '0',
        right: '0',
        height: '130px',
        width: '130px'
    }

    const styleNoMent = {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: '0',
        right: '0',
        marginTop: '190px',
        width: '700px',
        textAlign: 'center',
        fontSize: '22px',
    }

    const styleNoMent2 = {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: '0',
        right: '0',
        marginTop: '230px',
        width: '700px',
        textAlign: 'center',
        fontSize: '18px',
        color: '#a6a6a6',
    }

    const styleTimeBox = {
        position: 'relative',
        border: '1px solid #cdd2d2',
        boxShadow: '0px 1px #dcdfdf',
        backgroundColor: '#f2f2f2',
        marginTop: '0px',
        height: '40px',
    }

    const styleTime1 = {
        position: 'absolute',
        marginLeft: '17px',
        marginTop: '7px',
        fontSize: '15px',
        fontWeight: '700',
        color: '#6e6e6e',
    }

    const styleTime2 = {
        position: 'absolute',
        marginLeft: '75px',
        marginTop: '10px',
        borderLeft: '1px solid #b0b0b0',
        fontSize: '13px',
        fontWeight: '500',
        color: '#6e6e6e',
        width: '100px',
        // backgroundColor: '#ffffff',
        textAlign: 'right',
    }

    const styleTime3 = {
        position: 'absolute',
        marginLeft: '195px',
        marginTop: '10px',
        borderLeft: '1px solid #b0b0b0',
        fontSize: '13px',
        fontWeight: '500',
        color: '#6e6e6e',
        width: '55px',
        // backgroundColor: '#ffffff',
        textAlign: 'right',
    }

    const styleInGmaeBox2 = {
        position: 'relative',
        border: '1px solid #cdd2d2',
        boxShadow: '0px 1px #dcdfdf',
        background: '#f2f2f2',
        borderRadius: '2px',
        marginTop: '0px',
        height: '451px',
        marginBottom: '40px',
    }

    const styleBlueBox = {
        position: 'relative',
        // border: '1px solid #ffffff',
        backgroundColor: '#007bc7',
        // background: 'linear-gradient(to right, blue, white)',
        height: '25px',
    }

    
    const styleBlueBoxSpace = {
        positon: 'absolute',
        backgroundColor: '#ffffff',
        height: '25px',
        width: '10px',
        marginLeft: '10px',
    }

    const styleBlueBoxin = {
        position: 'absolute',
        color: '#ffffff',
        height: '21px',
        marginTop: '-22px',
        marginLeft: '30px',
        borderRadius: '5px',
        fontSize: '18px',
        lineHeight: '21px',
    }

    
    const styleBlueBoxin2 = {
        position: 'absolute',
        color: '#ffffff',
        height: '21px',
        marginTop: '-23px',
        marginLeft: '327px',
        borderRadius: '5px',
        fontSize: '13px',
        lineHeight: '21px',
    }

    const styleBlueBoxin3 = {
        position: 'absolute',
        color: '#ffffff',
        height: '21px',
        marginTop: '-23px',
        marginLeft: '630px',
        borderRadius: '5px',
        fontSize: '13px',
        lineHeight: '21px',
    }

    const styleBlueBoxin4 = {
        position: 'absolute',
        color: '#ffffff',
        height: '21px',
        marginTop: '-23px',
        marginLeft: '827px',
        borderRadius: '5px',
        fontSize: '13px',
        lineHeight: '21px',
    }

    const styleBlueBoxin5 = {
        position: 'absolute',
        color: '#ffffff',
        height: '21px',
        marginTop: '-28px',
        marginLeft: '925px',
        borderRadius: '5px',
        fontSize: '10px',
        lineHeight: '21px',
    }

    const styleBlueBoxin6 = {
        position: 'absolute',
        color: '#ffffff',
        height: '21px',
        marginTop: '-16px',
        marginLeft: '915px',
        borderRadius: '5px',
        fontSize: '10px',
        lineHeight: '21px',
    }


    const styleRedBox = {
        position: 'relative',
        backgroundColor: '#c70000',
        // background: 'linear-gradient(to right, red, white)',
        // border: '1px solid #ffffff',
        height: '25px',
    }

    
    const styleRedBoxSpace = {
        positon: 'absolute',
        backgroundColor: '#ffffff',
        height: '25px',
        width: '10px',
        marginLeft: '10px',
    }

    const styleRedBoxin = {
        position: 'absolute',
        color: '#ffffff',
        height: '21px',
        marginTop: '-22px',
        marginLeft: '30px',
        borderRadius: '5px',
        fontSize: '18px',
        lineHeight: '21px',
    }

    const styleRedBoxin2 = {
        position: 'absolute',
        color: '#ffffff',
        height: '21px',
        marginTop: '-23px',
        marginLeft: '327px',
        borderRadius: '5px',
        fontSize: '13px',
        lineHeight: '21px',
    }

    const styleRedBoxin3 = {
        position: 'absolute',
        color: '#ffffff',
        height: '21px',
        marginTop: '-23px',
        marginLeft: '630px',
        borderRadius: '5px',
        fontSize: '13px',
        lineHeight: '21px',
    }

    const styleRedBoxin4 = {
        position: 'absolute',
        color: '#ffffff',
        height: '21px',
        marginTop: '-23px',
        marginLeft: '827px',
        borderRadius: '5px',
        fontSize: '13px',
        lineHeight: '21px',
    }

    const styleRedBoxin5 = {
        position: 'absolute',
        color: '#ffffff',
        height: '21px',
        marginTop: '-28px',
        marginLeft: '925px',
        borderRadius: '5px',
        fontSize: '10px',
        lineHeight: '21px',
    }

    const styleRedBoxin6 = {
        position: 'absolute',
        color: '#ffffff',
        height: '21px',
        marginTop: '-16px',
        marginLeft: '915px',
        borderRadius: '5px',
        fontSize: '10px',
        lineHeight: '21px',
    }
    

    //----------------------------------------------------????????? css, ????????? ??????

    const [value, setValue] = useState('TBoxInGame');

    //?????? ?????? ?????? ???????????? ???????????? ???????????? ????????????
    //??????????????? setingame?????? true??? ?????????????????? ingame ??????????????? ??????
    const [ingame, setingame] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="MatchLayout">
            <div className="MatchLayout_recognized">
                <div className="Header" style={styleHeader}>
                    <div className="PastRank" style={stylePastRank}>
                        <Grid container spacing={1}>
                            {/* {useState ?????? && ??????.map((??????2, index) => (
                                <PastTankList
                                    ????????? props??? ????????????
                                />
                            ))} */}
                            <PastRankList />
                            <div style={styleReport}><a href="/ReportPage"><ReportProblemIcon color='error' fontSize='large' /></a></div>
                        </Grid>
                        <div className="Face" style={styleFace}>
                            <div className="UserIcon" style={styleUserIcon}>
                                {/* ?????? ????????? ???????????? ?????? ???????????? */}
                                <img className="UserIconImage" style={styleUserIconImage} />           {/* ?????? ?????? */}
                                <span className="UserLevel" style={styleUserLevel}>186</span>           {/* ?????? ?????? */}
                            </div>
                        </div>
                        <div className="Profile" style={styleProfile}>
                            <div className="UserInfo" style={styleUserInfo}>           {/* ?????? ?????? */}
                                kangsh1
                            </div>
                            <div className="Button" style={styleButton}>
                                {/* ???????????? ????????? ???????????? ???????????? /match??? ??????????????? ?????? ???????????? */}
                                <Button variant="contained" className="ButtonMatch" style={styleButtonMatch}>?????? ??????</Button>
                                <div className="LastUpdate" style={styleLastUpdate}>?????? ????????????:
                                    {/* ?????? ??????????????? */}
                                    <span clss="TimeCount"> 4??????</span>               {/* ?????? ?????? */}
                                </div>
                            </div>
                        </div>
                        <div className="TrollInfo" style={styleTrollInfo}>
                            <div className="TrollInfo2" style={styleTrollInfo2}>
                                {/* ???????????? ??? ??????????????? */}
                                <img className="TrollImg" style={styleTrollImg} />           {/* ?????? ?????? */}
                                <span className="TrollState" style={styleTrollState}>????????? ??????</span>           {/* ?????? ????????? ?????? ??? ?????? */}
                            </div>
                        </div>
                        <div className="HashTag" style={styleHashTag}>
                            <Grid container spacing={1}>
                                {/* {useState ?????? && ??????.map((??????2, index) => (
                                    <HashTagText
                                        ????????? props??? ????????????
                                    />
                                ))} */}
                                <HashTagText />
                            </Grid>
                        </div>
                    </div>
                </div>
                <div className='BigBox' style={styleBigBox}>
                    <div className='TBox' style={styleTBox}>
                        <Paper square>
                            {/* ??? ???????????? ????????? ??? ???????????? ?????? ????????? ????????? ????????? ??????????????? url??? ???????????? ??? */}
                            <Tabs
                                value={value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleChange}
                            >
                                <Tab label="??????" value='TBoxTotal' style={{outline: '0px',}} component={Link} to="/match"/>
                                <Tab label="????????? ??????" value='TBoxInGame' style={{outline: '0px',}} component={Link} to="/matchingame"/>
                            </Tabs>
                        </Paper>
                    </div>

                    {ingame &&

                    ///blue side
                    <div className='InGameBox' style={styleInGameBox}>
                        <img style={styleNoImg}/>
                        <div style={styleNoMent}><span style={{fontWeight: '600',}}>kangsh1</span>?????? ???????????? ????????????.</div>
                        <div style={styleNoMent2}>?????? ?????????????????? ?????? ??????????????????</div>
                    </div>
                    }
                    {!ingame &&
                    <>
                        <div style={styleTimeBox}>
                            <div style={styleTime1}>??????</div>
                            <div style={styleTime2}>???????????? ??????</div>
                            {/* ????????? ?????? ?????? */}
                            <div style={styleTime3}>08:02</div>
                        </div>
                        <div className='InGameBox2' style={styleInGmaeBox2}>
                            <div className='BlueBox' style={styleBlueBox}>
                                <div style={styleBlueBoxSpace} />
                                <span className='BlueBoxin' style={styleBlueBoxin}>?????????</span>
                                <span style={styleBlueBoxin2}>S2021</span>
                                <span style={styleBlueBoxin3}>????????? ??????</span>
                                <span style={styleBlueBoxin4}>S2020</span>
                                <span style={styleBlueBoxin5}>??????</span>
                                <span style={styleBlueBoxin6}>????????????</span>
                            </div>
                            {/* ?????? ????????? map????????? ???????????? */}
                            <MatchInGameThing />
                            <MatchInGameThing />
                            <MatchInGameThing />
                            <MatchInGameThing />
                            <MatchInGameThing />



                            <div className='BlueBox' style={styleRedBox}>
                                <div style={styleRedBoxSpace} />
                                <span className='BlueBoxin' style={styleRedBoxin}>?????????</span>
                                <span style={styleRedBoxin2}>S2021</span>
                                <span style={styleRedBoxin3}>????????? ??????</span>
                                <span style={styleRedBoxin4}>S2020</span>
                                <span style={styleRedBoxin5}>??????</span>
                                <span style={styleRedBoxin6}>????????????</span>
                            </div>
                            {/* ?????? ????????? map????????? ???????????? */}
                            <MatchInGameThingRed />
                            <MatchInGameThingRed />
                            <MatchInGameThingRed />
                            <MatchInGameThingRed />
                            <MatchInGameThingRed />
                        </div>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default MatchInGame