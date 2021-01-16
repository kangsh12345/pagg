import React, {useState} from 'react';



import {Button, Tab, Tabs, Paper, Grid} from '@material-ui/core';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';




function Match(props) {



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

    const styleCBox = {
        position: 'relative',
        border: '1px solid #cdd2d2',
        boxShadow: '0px 1px #dcdfdf',
        background: '#f2f2f2',
        borderRadius: '2px',
        marginTop: '0px',
        height: '200px',
    }

    //

    const styleCBoxSol = {
        position: 'absolute',
        border: '1px solid #cdd2d2',
        marginTop: '20px',
        marginLeft: '25px',
        display: 'block',
        width: '300px',
        height: '150px',
    }

    //
    const styleCBoxMul = {
        position: 'absolute',
        border: '1px solid #cdd2d2',
        marginTop: '20px',
        marginLeft: '350px',
        display: 'block',
        width: '300px',
        height: '150px',
    }

    const styleUserSolRank = {
        position: 'relative',
    }

    const styleUserSolRankImage = {
        position: 'absolute',
        marginTop: '24px',
        marginLeft: '20px',
        display: 'block',
        width: '100px',
        height: '100px',
    }

    const styleUserSolRankInfoF = {
        position: 'absolute',
        marginTop: '24px',
        marginLeft: '130px',
        fontSize: '14px',
        color: '#8f8f8f',
    }

    const styleUserSolRankInfoS = {
        position: 'absolute',
        marginTop: '45px',
        marginLeft: '135px',
        height: '50px',
        width: '150px',
        fontSize: '25px',
        color: '#00a3de',
        fontWeight: 'bold',
    }

    const styleUserSolRankInfoT = {
        position: 'absolute',
        marginTop: '85px',
        marginLeft: '135px',
        height: '50px',
        width: '150px',
        fontSize: '12px',
        color: '#4f4f4f',
        fontWeight: 'bold',
    }

    const styleUserSolRankInfoTUnder = {
        fontSize: '12px',
        color: '#8a8a8a',
        fontWeight: 'lighter',
    }

    const styleUserSolRankInfoWin = {
        position: 'absolute',
        marginTop: '103px',
        marginLeft: '134px',
        height: '50px',
        width: '150px',
        fontSize: '13px',
        color: '#8a8a8a',
        fontWeight: 'lighter',
    }

    const styleUserMulRank = {
        position: 'relative',
    }

    const styleUserMulRankImage = {
        position: 'absolute',
        marginTop: '24px',
        marginLeft: '20px',
        display: 'block',
        width: '100px',
        height: '100px',
    }

    const styleUserMulRankInfoF = {
        position: 'absolute',
        marginTop: '24px',
        marginLeft: '130px',
        fontSize: '14px',
        color: '#8f8f8f',
    }

    const styleUserMulRankInfoS = {
        position: 'absolute',
        marginTop: '45px',
        marginLeft: '135px',
        height: '50px',
        width: '150px',
        fontSize: '25px',
        color: '#00a3de',
        fontWeight: 'bold',
    }

    const styleUserMulRankInfoT = {
        position: 'absolute',
        marginTop: '85px',
        marginLeft: '135px',
        height: '50px',
        width: '150px',
        fontSize: '12px',
        color: '#4f4f4f',
        fontWeight: 'bold',
    }

    const styleUserMulRankInfoTUnder = {
        fontSize: '12px',
        color: '#8a8a8a',
        fontWeight: 'lighter',
    }

    const styleUserMulRankInfoWin = {
        position: 'absolute',
        marginTop: '103px',
        marginLeft: '134px',
        height: '50px',
        width: '150px',
        fontSize: '13px',
        color: '#8a8a8a',
        fontWeight: 'lighter',
    }

    const styleCBoxP = {
        position: 'absolute',
        // border: '1px solid #cdd2d2',
        marginTop: '25px',
        marginLeft: '700px',
        display: 'block',
        width: '200px',
        height: '150px',
    }

    const styleUserMLine = {
        position: 'absolute',
        marginTop: '30px',
        marginLeft: '0px',
        fontSize: '16px',
        color: '#8a8a8a',
        fontWeight: 'bold',
    }

    const styleUserSLine = {
        position: 'absolute',
        marginTop: '89px',
        marginLeft: '0px',
        fontSize: '16px',
        color: '#8a8a8a',
        fontWeight: 'bold',
    }

    const styleMLineImg = {
        position: 'absolute',
        marginTop: '-43px',
        marginLeft: '80px',
        display: 'block',
        width: '60px',
        height: '60px',
    }

    const styleSLineImg = {
        position: 'absolute',
        marginTop: '-43px',
        marginLeft: '80px',
        display: 'block',
        width: '60px',
        height: '60px',
    }

//------------------------------------------------위에는 css ----- 아래는 변수--------------


    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="MatchLayout">
            <div className="MatchLayout_recognized">
                <div className="Header" style={styleHeader}>
                    <div className="PastRank" style={stylePastRank}>
                        <Grid container spacing={1}>
                            <div style={styleReport}><ReportProblemIcon color='error' fontSize='large' /></div>
                        </Grid>
                        <div className="Face" style={styleFace}>
                            <div className="UserIcon" style={styleUserIcon}>
                                {/* 유저 프로필 이미지와 레벨 받아오기 */}
                                <img className="UserIconImage" style={styleUserIconImage} />
                                <span className="UserLevel" style={styleUserLevel}>186</span>
                            </div>
                        </div>
                        <div className="Profile" style={styleProfile}>
                            <div className="UserInfo" style={styleUserInfo}>
                                kangsh1
                            </div>
                            <div className="Button" style={styleButton}>
                                <Button variant="contained" className="ButtonMatch" style={styleButtonMatch}>전적 검색</Button>
                                <div className="LastUpdate" style={styleLastUpdate}>최근 업데이트:
                                    {/* 날짜 받아와야함 */}
                                    <span clss="TimeCount"> 4일전</span>
                                </div>
                            </div>
                        </div>
                        <div className="TrollInfo" style={styleTrollInfo}>
                            <div className="TrollInfo2" style={styleTrollInfo2}>
                                {/* 이미지랑 말 가져와야함 */}
                                <img className="TrollImg" style={styleTrollImg} />
                                <span className="TrollState" style={styleTrollState}>클린한 유저</span>
                            </div>
                        </div>
                        <div className="HashTag" style={styleHashTag}>
                            <Grid container spacing={1}>
                            </Grid>
                        </div>
                    </div>
                </div>
                <div className='BigBox' style={styleBigBox}>
                    <div className='TBox' style={styleTBox}>
                        <Paper square>
                            <Tabs
                                value={value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleChange}
                            >
                                <Tab label="종합" />
                                <Tab label="인게임 정보" />
                            </Tabs>
                        </Paper>
                    </div>
                    <div className='CBox' style={styleCBox}>
                        <Paper style={styleCBoxSol}>
                            <div className="UserSolRank" style={styleUserSolRank}>
                                {/* 유저 프로필 이미지와 레벨 받아오기 */}
                                <img className="UserSolRankImage" style={styleUserSolRankImage} />
                                <div className="UserSolRankInfoF" style={styleUserSolRankInfoF}>
                                    솔로랭크
                                </div>
                                <div className="UserSolRankInfoS" style={styleUserSolRankInfoS}>
                                    Silver 4
                                </div>
                                <div className="UserSolRankInfoT" style={styleUserSolRankInfoT}>
                                    22 LP<span className="UserSolRankInfoTUnder" style={styleUserSolRankInfoTUnder}> / 1000승 1000패</span>
                                </div>
                                <div className="UserSolRankInfoWin" style={styleUserSolRankInfoWin}>
                                    승률 50%
                                </div>
                            </div>
                        </Paper>
                        <Paper style={styleCBoxMul}>
                        <div className="UserSolRank" style={styleUserMulRank}>
                                {/* 유저 프로필 이미지와 레벨 받아오기 */}
                                <img className="UserMulRankImage" style={styleUserMulRankImage} />
                                <div className="UserMulRankInfoF" style={styleUserMulRankInfoF}>
                                    자유랭크
                                </div>
                                <div className="UserMulRankInfoS" style={styleUserMulRankInfoS}>
                                    Silver 4
                                </div>
                                <div className="UserMulRankInfoT" style={styleUserMulRankInfoT}>
                                    22 LP<span className="UserMulRankInfoTUnder" style={styleUserMulRankInfoTUnder}> / 1000승 1000패</span>
                                </div>
                                <div className="UserMulRankInfoWin" style={styleUserMulRankInfoWin}>
                                    승률 50%
                                </div>
                            </div>
                        </Paper>
                        <div style={styleCBoxP}>
                            <div className="UserMLine" style={styleUserMLine}>
                                주라인 : <img className="MLineImg" style={styleMLineImg} />
                            </div>
                            <div className="UserSLine" style={styleUserSLine}>
                                부라인 : <img className="SLineImg" style={styleSLineImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Match
