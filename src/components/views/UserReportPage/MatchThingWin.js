import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';
import MBoxFiveHashTagWin from '../Match/MBoxFiveHashTagWin';
import MBoxSixBlueTP from '../Match/MBoxSixBlueTP';
import MBoxSixRedTP from '../Match/MBoxSixRedTP';

// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';
// import STeamDetailForm from './STeamDetailForm';
// import FTeamDetailForm from './FTeamDetailForm';

function MatchThingWin() {

    const styleMatchThingBox = {
        width: '100%',
        height: '100px',
        marginTop: '8px',
        marginLeft: '1px',
        border: '1px solid #b1b4e6',                //여기(b1b4e6)
        backgroundColor: '#c9ccff',                 //여기 색깔 바꾸기(c9ccff)
        borderRadius: '2px',
    }

    //////////////////

    const styleMBoxFirst = {
        position: 'absolute',
        border: '1px solid #b1b4e6',                //여기(b1b4e6)
        backgroundColor: '#ffffff',
        boxShadow: '0px 0px',
        height: '98px',
        width: '70px',
        border: '0px',
        borderRadius: '2px',
        display: 'block',
    }

    const styleMBoxFRank = {
        position: 'absolute',
        marginLeft: '-65px',
        marginTop: '-40px',
        width: '200px',
        lineHeight: '17px',
        textAlign: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#696969',
    }

    const styleMBoxFDay = {
        position: 'absolute',
        marginLeft: '-65px',
        marginTop: '-23px',
        width: '200px',
        lineHeight: '17px',
        textAlign: 'center',
        fontSize: '9px',
        color: '#858585',
    }

    const styleMBoxFGameResult = {
        position: 'absolute',
        marginLeft: '-65px',
        marginTop: '5px',
        width: '200px',
        lineHeight: '17px',
        textAlign: 'center',
        fontSize: '11px',
        color: '#2b44ff',                    //여기 색깔 바꾸기(2b44ff)
    }

    const styleMBoxFGameTime = {
        position: 'absolute',
        marginLeft: '-65px',
        marginTop: '20px',
        width: '200px',
        lineHeight: '17px',
        textAlign: 'center',
        fontSize: '8px',
        color: '#858585',
    }

    ////////////////////////

    const styleMBoxSecond = {
        position: 'absolute',
        marginLeft: '71px',
        // border: '1px solid #e6b1b1',
        backgroundColor: '#c9ccff',         //여기 색깔 바꾸기(c9ccff)
        boxShadow: '0px 0px',
        height: '98px',
        width: '160px',
        border: '0px',
        display: 'block',
        borderRadius: '0px',
    }

    const styleMBoxSecondChampionImg = {
        position: 'absolute',
        marginTop: '15px',
        marginLeft: '15px',
        display: 'block',
        width: '55px',
        height: '55px',
        borderRadius: "6px !important",
    }

    const styleMBoxSecondSpellFImg = {
        position: 'absolute',
        marginTop: '15px',
        marginLeft: '75px',
        display: 'block',
        width: '27px',
        height: '27px',
        borderRadius: "4px",
    }

    const styleMBoxSecondSpellSImg = {
        position: 'absolute',
        marginTop: '43px',
        marginLeft: '75px',
        display: 'block',
        width: '27px',
        height: '27px',
        borderRadius: "4px",
    }

    const styleMBoxSecondRunesFImg = {
        position: 'absolute',
        marginTop: '15px',
        marginLeft: '107px',
        display: 'block',
        width: '27px',
        height: '27px',
        borderRadius: "6px !important",
    }

    const styleMBoxSecondRunesSImg = {
        position: 'absolute',
        marginTop: '43px',
        marginLeft: '107px',
        display: 'block',
        width: '27px',
        height: '27px',
        borderRadius: "6px !important",
    }

    const styleMBoxSecondChampionName = {
        position: 'absolute',
        marginLeft: '-22px',
        marginTop: '74px',
        width: '200px',
        textAlign: 'center',
        fontSize: '11px',
        color: '#787878',
    }

    //////////////////
    
    const styleMBoxThree = {
        position: 'absolute',
        marginLeft: '231px',
        border: '1px solid #b1b4e6',            //여기(b1b4e6)
        backgroundColor: '#c9ccff',             //여기(c9ccff)
        boxShadow: '0px 0px',
        height: '98px',
        width: '150px',
        border: '0px',
        display: 'block',
        borderRadius: '0px',
    }
    
    const styleMBoxThreeLevelCs = {
        position: 'absolute',
        marginTop: '6px',
        marginLeft: '12px',
        color: '#575757',
        fontSize: '11px',
    }

    const styleMBoxThreeItemTable = {
        position: 'absolute',
        marginLeft: '10px',
        marginTop: '25px',
        border: '1px solid #b1b4e6',            //여기(b1b4e6)
        backgroundColor: '#c9ccff',             //여기(c9ccff)
        boxShadow: '0px 0px',
        height: '57px',
        width: '160px',
        border: '0px',
        display: 'block',
        borderRadius: '0px',
    }

    const FirstItem = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '0px',
        display: 'block',
        // border: '1px solid #ffffff',
        borderRadius: '6px',
        width: '26px',
        height: '26px',
    }

    const SecondItem = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '29px',
        display: 'block',
        // border: '1px solid #ffffff',
        borderRadius: '6px',
        width: '26px',
        height: '26px',
    }

    const ThirdItem = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '58px',
        display: 'block',
        // border: '1px solid #ffffff',
        borderRadius: '6px',
        width: '26px',
        height: '26px',
    }

    const FourthItem = {
        position: 'absolute',
        marginTop: '29px',
        marginLeft: '0px',
        display: 'block',
        // border: '1px solid #ffffff',
        borderRadius: '6px',
        width: '26px',
        height: '26px',
    }

    const FifthItem = {
        position: 'absolute',
        marginTop: '29px',
        marginLeft: '29px',
        display: 'block',
        // border: '1px solid #ffffff',
        borderRadius: '6px',
        width: '26px',
        height: '26px',
    }

    const SixthItem = {
        position: 'absolute',
        marginTop: '29px',
        marginLeft: '58px',
        display: 'block',
        // border: '1px solid #ffffff',
        borderRadius: '6px',
        width: '26px',
        height: '26px',
    }

    const WardItem = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '87px',
        display: 'block',
        // border: '1px solid #ffffff',
        borderRadius: '6px',
        width: '26px',
        height: '26px',
    }

    //////////////////////

    const styleMBoxFour = {
        position: 'absolute',
        marginLeft: '381px',
        border: '1px solid #b1b4e6',                //여기(b1b4e6)
        backgroundColor: '#c9ccff',                 //여기(c9ccff)
        boxShadow: '0px 0px',
        height: '98px',
        width: '140px',
        border: '0px',
        display: 'block',
        borderRadius: '0px',
    }

    const styleKDAF = {
        position: 'absolute',
        // border: '1px solid #ffffff',
        marginTop: '10px',
        marginLeft: '0px',
        width: '130px',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#666666',
    }

    const styleKDAS = {
        position: 'absolute',
        // border: '1px solid #ffffff',
        marginTop: '36px',
        marginLeft: '0px',
        width: '130px',
        textAlign: 'center',
        fontSize: '13px',
        // fontWeight: '300',
        color: '#8a8a8a',
    }
    
    const styleKDAT = {
        position: 'absolute',
        // border: '1px solid #ffffff',
        marginTop: '60px',
        marginLeft: '0px',
        width: '130px',
        textAlign: 'center',
        fontSize: '13px',
        // fontWeight: '300',
        color: '#8a8a8a',
    }

    //////////////////////////

    const styleMBoxFive = {
        position: 'absolute',
        marginLeft: '541px',
        border: '1px solid #b1b4e6',                //여기(b1b4e6)
        backgroundColor: '#c9ccff',                 //여기(c9ccff)
        boxShadow: '0px 0px',
        height: '98px',
        width: '160px',
        border: '0px',
        display: 'block',
        borderRadius: '0px',
    }

    //////////////////////////

    const styleMBoxSixF = {
        position: 'absolute',
        marginLeft: '748px',
        border: '1px solid #b1b4e6',                //여기(b1b4e6)
        backgroundColor: '#c9ccff',                 //여기(c9ccff)
        boxShadow: '0px 0px',
        height: '98px',
        width: '90px',
        border: '0px',
        display: 'block',
        borderRadius: '0px',
    }

//

    const styleMBoxSixS = {
        position: 'absolute',
        marginLeft: '840px',
        border: '1px solid #b1b4e6',                //여기(b1b4e6)
        backgroundColor: '#c9ccff',                 //여기(c9ccff)
        boxShadow: '0px 0px',
        height: '98px',
        width: '90px',
        border: '0px',
        display: 'block',
        borderRadius: '0px',
    }
    
    ////////////////////////////


    const styleMBoxSeven = {
        position: 'absolute',
        marginLeft: '931px',
        border: '1px solid #b1b4e6',         //여기(b1b4e6)
        backgroundColor: '#ffffff',
        boxShadow: '0px 0px',
        height: '98px',
        width: '35px',
        border: '0px',
        display: 'block',
        borderRadius: '2px',
        color: '#6a75cc',                   //여기(6a75cc)
        outline: '0px',
    }


    

    return (
        <form>
            {/* //승리 패배 다시하기에 따라 색깔달라지게 설정 (일단 만들어 놓은거는 패배일때) 고의 트롤한 판은 보라색으로 하자 */}
            {/* 내팀이 패배하면 빨간계열 내팀이 이기면 파란계열 */}
            <div className='MatchThingBox' style={styleMatchThingBox}>
                <Paper className="MBoxFirst" style={styleMBoxFirst}>
                                                {/*여기(a9b1db) */}
                    <div style={{backgroundColor: '#a9b1db', marginTop: '49px', height: '2px', width: '20px', marginLeft: '25px', borderRadius: '5px'}}/>
                    <div className="MBoxFRank" style={styleMBoxFRank}>솔랭</div>
                    <div className="MBoxFDay" style={styleMBoxFDay}><span>15</span>일 전</div>
                    <div className="MBoxFGameResult" style={styleMBoxFGameResult}>승리</div>
                    <div className="MBoxFGameTime" style={styleMBoxFGameTime}><span>20</span>분 <span>51</span>초</div>
                </Paper>
                <Paper className="MBoxSecond" style={styleMBoxSecond}>
                    <img className="MBoxSecondChampionImg" style={styleMBoxSecondChampionImg} />
                    <img className="MBoxSecondSpellFImg" style={styleMBoxSecondSpellFImg} />
                    <img className="MBoxSecondSpellSImg" style={styleMBoxSecondSpellSImg} />
                    <img className="MBoxSecondRunesFImg" style={styleMBoxSecondRunesFImg} />
                    <img className="MBoxSecondRunesSImg" style={styleMBoxSecondRunesSImg} />
                    <div className="MBoxSecondChampionName" style={styleMBoxSecondChampionName}>트위스티드 페이트</div>
                </Paper>
                <Paper className="MBoxThree" style={styleMBoxThree}>
                    <div className="MBoxThreeLevelCs" style={styleMBoxThreeLevelCs}>Lv.<span>8</span> <span style={{color: '#7a7a7a'}}>( CS: <span>23</span>, <span>1.3</span>cs/min )</span></div>
                    <Paper className="MBoxThreeItemTable" style={styleMBoxThreeItemTable}>
                        <img className="FirstItem" style ={FirstItem} />
                        <img className="SecondItem" style ={SecondItem} />
                        <img className="ThridfItem" style ={ThirdItem} />
                        <img className="FourthItem" style ={FourthItem} />
                        <img className="FifthItem" style ={FifthItem} />
                        <img className="SixthItem" style ={SixthItem} />
                        <img className="WardItem" style ={WardItem} />
                    </Paper>
                </Paper>
                <Paper className="MBoxFour" style={styleMBoxFour}>                                {/*여기(293ad6)*/}
                    <div className='KDAF' style={styleKDAF}><span>0</span> / <span style={{color: '#d62929'}}>0</span> / <span>0</span></div>
                    <div className='KDAS' style={styleKDAS}><span style={{color: '#787878', fontWeight: 'bold',}}>0.00</span> 평점</div>
                    <div className='KDAT' style={styleKDAT}>킬관여율 <span>0</span>%</div>
                </Paper>
                <Paper className="MBoxFive" style={styleMBoxFive}>
                    <MBoxFiveHashTagWin />
                </Paper>
                <Paper className="MBoxSixF" style={styleMBoxSixF}>
                    <MBoxSixBlueTP />
                </Paper>
                <Paper className="MBoxSixS" style={styleMBoxSixS}>
                    <MBoxSixRedTP />
                </Paper>
                <div className="MBoxSeven" style={styleMBoxSeven}/>
            </div>



            
    </form>
    )
}

export default MatchThingWin