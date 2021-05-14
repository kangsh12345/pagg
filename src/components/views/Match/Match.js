import React, { useState } from 'react';
import axios from 'axios';
import PastRankList from './PastRankList';
import HashTagText from './HashTagText';
import RankTable from './RankTable';
import RecentInfo from './RecentInfo';
import MatchThing from './MatchThing';
import MatchThingDraw from './MatchThingDraw';
import { Link } from 'react-router-dom'

import { Button, Tab, Tabs, Paper, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import MatchThingWin from './MatchThingWin';



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

    const styleRankRadio = {
        border: '1px solid #cdd2d2',
        boxShadow: '0px 1px #dcdfdf',
        backgroundColor: '#ffffff',
        paddingLeft: '10px',
        marginTop: '8px',
        borderRadius: '2px',
    }

    const styleRadioUnder = {
        border: '1px solid #cdd2d2',
        boxShadow: '0px 1px #dcdfdf',
        background: '#f2f2f2',
        borderRadius: '2px',
        marginTop: '-5px',
        padding: '8px',
    }

    const styleRecentPlay = {
        border: '1px solid #cdd2d2',
        boxShadow: '0px 1px #dcdfdf',
        backgroundColor: '#ffffff',
        paddingLeft: '10px',
        marginTop: '10px',
        borderRadius: '2px',
        height: '40px',
        fontSize: '16px',
        lineHeight: '250%',
    }

    const styleRecentPlayTab = {
        border: '1px solid #cdd2d2',
        boxShadow: '0px',
        background: '#f2f2f2',
        borderRadius: '2px',
        marginTop: '-1px',
    }

    const styleRecentInfo = {
        border: '1px solid #cdd2d2',
        background: '#ffffff',
        borderRadius: '2px',
        marginTop: '-2px',
        height: '150px',
        position: 'relative',
    }

    const styleRecentMatchBox = {
        position: 'relative',
        // border: '1px solid #cdd2d2',
        // background: '#eeeeee',
        marginTop: '12px',
        padding: '0px 1px 0px 1px',
    }





    const Something = {
        position: 'relative',
        border: '1px solid #d6a800',
        marginTop: '12px',
        marginLeft: '0px',
        height: '30px',
        backgroundColor: '#5c5c5c',
        color: '#ffffff',
        paddingTop: '2px',
    }


    const styleLoading = {
        position: 'relative',
        marginTop: '10px',
        marginLeft: '3px',
        marginBottom: '20px',
    }
    
    const styleLoadingBtn = {
        width: '100%',
        height: '50px',
        backgroundColor: '#ededed',
        border: '1px solid #f5f5f5',
        display: 'block',
        borderRadius: '2px',
        outline: '0px',
    }


    //------------------------------------------------위에는 css ----- 아래는 변수--------------


    const [value, setValue] = useState('TBoxTotal');
    const [Rvalue, setRValue] = useState('RTotal');
    const [rankradiovalue, setRankradiovalue] = useState('all');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleRChange = (event, newValue) => {
        setRValue(newValue);
    };

    const handleRankRadioChange = (e) => {
        setRankradiovalue(e.target.value);
    };

    const handleRankRadioSubmit = (e) => {
        e.preventDefault();

        if (rankradiovalue === 'all') {

        } else if (rankradiovalue === 'sol') {

        } else if (rankradiovalue === 'mul') {

        } else {

        }
    }

    return (
        <div className="MatchLayout">
            <div className="MatchLayout_recognized">
                <div className="Header" style={styleHeader}>
                    <div className="PastRank" style={stylePastRank}>
                        <Grid container spacing={1}>
                            {/* {useState 변수 && 변수.map((변수2, index) => (
                                <PastTankList
                                    데이터 props로 넣어주기
                                />
                            ))} */}
                            <PastRankList />
                            <div style={styleReport}><a href="/ReportPage"><ReportProblemIcon color='error' fontSize='large' /></a></div>
                        </Grid>
                        <div className="Face" style={styleFace}>
                            <div className="UserIcon" style={styleUserIcon}>
                                {/* 유저 프로필 이미지와 레벨 받아오기 */}
                                <img className="UserIconImage" style={styleUserIconImage} />           {/* 정보 넣기 */}
                                <span className="UserLevel" style={styleUserLevel}>186</span>           {/* 정보 넣기 */}
                            </div>
                        </div>
                        <div className="Profile" style={styleProfile}>
                            <div className="UserInfo" style={styleUserInfo}>           {/* 정보 넣기 */}
                                kangsh1
                            </div>
                            <div className="Button" style={styleButton}>
                                <Button variant="contained" className="ButtonMatch" style={styleButtonMatch}>전적 검색</Button>
                                <div className="LastUpdate" style={styleLastUpdate}>최근 업데이트:
                                    {/* 날짜 받아와야함 */}
                                    <span clss="TimeCount"> 4일전</span>               {/* 정보 넣기 */}
                                </div>
                            </div>
                        </div>
                        <div className="TrollInfo" style={styleTrollInfo}>
                            <div className="TrollInfo2" style={styleTrollInfo2}>
                                {/* 이미지랑 말 가져와야함 */}
                                <img className="TrollImg" style={styleTrollImg} />           {/* 정보 넣기 */}
                                <span className="TrollState" style={styleTrollState}>클린한 유저</span>           {/* 던진 빈도에 따라 말 넣기 */}
                            </div>
                        </div>
                        <div className="HashTag" style={styleHashTag}>
                            <Grid container spacing={1}>
                                {/* {useState 변수 && 변수.map((변수2, index) => (
                                    <HashTagText
                                        데이터 props로 넣어주기
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
                            {/* 탭 눌렀을때 종합은 이 페이지로 오게 해주고 인게임 정보는 인게임정보 url로 이동되게 함 */}
                            <Tabs
                                value={value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleChange}
                            >
                                <Tab label="종합" value='TBoxTotal' style={{outline: '0px',}} component={Link} to="/match"/>
                                <Tab label="인게임 정보" value='TBoxInGame' style={{outline: '0px',}} component={Link} to="/matchingame"/>
                            </Tabs>
                        </Paper>
                    </div>
                    <div className='CBox' style={styleCBox}>
                        <Paper style={styleCBoxSol}>
                            <div className="UserSolRank" style={styleUserSolRank}>
                                
                                <img className="UserSolRankImage" style={styleUserSolRankImage} />
                                <div className="UserSolRankInfoF" style={styleUserSolRankInfoF}>
                                    솔로랭크
                                </div>
                                <div className="UserSolRankInfoS" style={styleUserSolRankInfoS}>           {/* 정보 넣기 */}
                                    Silver 4
                                </div>
                                <div className="UserSolRankInfoT" style={styleUserSolRankInfoT}>
                                    22 LP<span className="UserSolRankInfoTUnder" style={styleUserSolRankInfoTUnder}> / 1000승 1000패</span>           {/* 정보 넣기 */}
                                </div>
                                <div className="UserSolRankInfoWin" style={styleUserSolRankInfoWin}>           {/* 정보 넣기 */}
                                    승률 40%
                                </div>
                            </div>
                        </Paper>
                        <Paper style={styleCBoxMul}>
                            <div className="UserSolRank" style={styleUserMulRank}>
                                
                                <img className="UserMulRankImage" style={styleUserMulRankImage} />
                                <div className="UserMulRankInfoF" style={styleUserMulRankInfoF}>
                                    자유랭크
                                </div>
                                <div className="UserMulRankInfoS" style={styleUserMulRankInfoS}>           {/* 정보 넣기 */}
                                    Silver 4
                                </div>
                                <div className="UserMulRankInfoT" style={styleUserMulRankInfoT}>
                                    22 LP<span className="UserMulRankInfoTUnder" style={styleUserMulRankInfoTUnder}> / 1000승 1000패</span>           {/* 정보 넣기 */}
                                </div>
                                <div className="UserMulRankInfoWin" style={styleUserMulRankInfoWin}>           {/* 정보 넣기 */}
                                    승률 40%
                                </div>
                            </div>
                        </Paper>
                        <div style={styleCBoxP}>
                            <div className="UserMLine" style={styleUserMLine}>
                                주라인 : <img className="MLineImg" style={styleMLineImg} />           {/* 정보 넣기 */}
                            </div>
                            <div className="UserSLine" style={styleUserSLine}>
                                부라인 : <img className="SLineImg" style={styleSLineImg} />           {/* 정보 넣기 */}
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleRankRadioSubmit} style={styleRankRadio}>
                        <FormControl component="fieldset" className='UserRankRadio'>
                                       {/* 라디오 누를때 솔로랭크는 솔로랭크만 도표, 자랭은 자랭만 도표 보이게 설정 */}
                            <RadioGroup row aria-label="position" name="position" defaultValue="top" value={rankradiovalue} onChange={handleRankRadioChange}>
                                <FormControlLabel value="all" control={<Radio size='small' color='primary' />} label="랭크전체" />
                                <FormControlLabel value="sol" control={<Radio size='small' color='primary'/>} label="솔로랭크" />
                                <FormControlLabel value="mul" control={<Radio size='small' color='primary'/>} label="자유랭크" />
                            </RadioGroup>
                        </FormControl>
                    </form>
                    <div className='RadioUnder' style={styleRadioUnder}>
                        {/* table안에 들어가서 rows에 값 props로 전달해주기 */}
                        <RankTable />
                    </div>
                    <div className='RecentPlay' style={styleRecentPlay}>
                        최근 전적 요약
                    </div>
                    <div className='RecentPlayTab' style={styleRecentPlayTab}>
                        <Paper square>
                            {/* 탭 누를때 솔로랭크는 솔로랭크만 도표, 자랭은 자랭만 도표 보이게 설정 */}
                            <Tabs
                                value={Rvalue}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleRChange}
                            >
                                <Tab label="전체" value='RTotal' style={{fontSize: '14px', outline:'0px'}}/>
                                <Tab label="솔랭" value='RSol' style={{fontSize: '14px', outline:'0px'}}/>
                                <Tab label="자랭" value='RMul' style={{fontSize: '14px', outline:'0px'}}/>
                                <Tab label="일반" value='RNo' style={{fontSize: '14px', outline:'0px'}}/>
                            </Tabs>
                        </Paper>
                    </div>
                    <div className='RecentInfo' style={styleRecentInfo}>
                        {/* RecentInfo에 props로 최근 20게임 정보 전달 */}
                        <RecentInfo />
                    </div>
                    <div style={Something}>
                        <span style={{wordSpacing: '2px', marginLeft: '180px'}}>고의 트롤 = 팀원 4명 피해 = (게임 평균 30분) X 4 = 120분 = 2시간 손해 = 17,180원 손해</span>
                    </div>
                    <div className='RecentMatchBox' style={styleRecentMatchBox}>
                        {/* {useState 변수 && 변수.map((변수2, index) => (
                            <MatchThing(질때) MatchThingWin(이길때) MatchThingDraw(다시하기)
                                데이터 props로 넣어주기
                            />
                        ))} */}
                        <MatchThing />
                        <MatchThingWin />
                        <MatchThingDraw />
                        <MatchThing />
                        <MatchThing />
                        <MatchThing />
                        <MatchThingWin />
                        <MatchThingDraw />
                        <MatchThing />
                        <MatchThing />
                        <MatchThing />
                        <MatchThingWin />
                        <MatchThingDraw />
                        <MatchThing />
                        <MatchThing />
                        <MatchThing />
                        <MatchThingWin />
                        <MatchThingDraw />
                        <MatchThing />
                        <MatchThing />
                        <div style={styleLoading}>
                            {/*onClick={}*/}
                            <button style={styleLoadingBtn}>더보기</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Match