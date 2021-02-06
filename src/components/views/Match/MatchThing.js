import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';
import MBoxFiveHashTag from './MBoxFiveHashTag';
import MBoxSixBlueTP from './MBoxSixBlueTP';
import MBoxSixRedTP from './MBoxSixRedTP';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import STeamDetailForm from './STeamDetailForm';
import FTeamDetailForm from './FTeamDetailForm';

function MatchThing() {

    const styleMatchThingBox = {
        width: '100%',
        height: '100px',
        marginTop: '8px',
        marginLeft: '1px',
        border: '1px solid #e6b1b1',                //여기(b1b4e6)
        backgroundColor: '#ffc9c9',                 //여기 색깔 바꾸기(c9ccff)
        borderRadius: '2px',
    }

    //////////////////

    const styleMBoxFirst = {
        position: 'absolute',
        border: '1px solid #e6b1b1',                //여기(b1b4e6)
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
        color: '#ff2b2b',                    //여기 색깔 바꾸기(2b44ff)
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
        backgroundColor: '#ffc9c9',         //여기 색깔 바꾸기(c9ccff)
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
        border: '1px solid #e6b1b1',            //여기(b1b4e6)
        backgroundColor: '#ffc9c9',             //여기(c9ccff)
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
        border: '1px solid #e6b1b1',            //여기(b1b4e6)
        backgroundColor: '#ffc9c9',             //여기(c9ccff)
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
        border: '1px solid #e6b1b1',                //여기(b1b4e6)
        backgroundColor: '#ffc9c9',                 //여기(c9ccff)
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
        border: '1px solid #e6b1b1',                //여기(b1b4e6)
        backgroundColor: '#ffc9c9',                 //여기(c9ccff)
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
        border: '1px solid #e6b1b1',                //여기(b1b4e6)
        backgroundColor: '#ffc9c9',                 //여기(c9ccff)
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
        border: '1px solid #e6b1b1',                //여기(b1b4e6)
        backgroundColor: '#ffc9c9',                 //여기(c9ccff)
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
        border: '1px solid #e6b1b1',         //여기(b1b4e6)
        backgroundColor: '#ffffff',
        boxShadow: '0px 0px',
        height: '98px',
        width: '35px',
        border: '0px',
        display: 'block',
        borderRadius: '2px',
        color: '#cc6a6a',                   //여기(6a75cc)
        outline: '0px',
    }
    ////////////////아래부터는 match detail 정보

    const styleMBoxDetail = {
        position: 'relative',
        marginTop: '0px',
        marginLeft: '1px',
        borderRadius: '0px',
        // backgroundColor: '#cc6a6a',
        backgroundColor: '#f2bdbd',         
        width: '100%',
        height: '400px',
        border: '1px solid #c9c9c9',        //여기(a1a2cf)
    }

    const styleMBoxUpF = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '0px',
        height: '30px',
        width: '45%',
        backgroundColor: '#ffffff',
        border: '0px',
        borderRadius: '0px',
        boxShadow: '0px 0px',
        display: 'block',
    }

    const styleResultTeam = {
        position: 'absolute',
        marginTop: '3px',
        marginLeft: '12px',
        fontSize: '14px',
    }

    const styleResultKda = {
        position: 'absolute',
        marginTop: '3px',
        marginLeft: '170px',
        fontSize: '14px',
    }

    const styleKdaImg = {
        position: 'absolute',
        display: 'block',
        height: '20px',
        width: '20px',
        marginTop: '1.8px',
    }

    const styleResultGold = {
        position: 'absolute',
        marginTop: '3px',
        marginLeft: '320px',
        fontSize: '14px',
    }

    const styleGoldImg = {
        position: 'absolute',
        display: 'block',
        height: '20px',
        width: '20px',
        marginTop: '1.8px',
    }

    //////////////////

    const styleMBoxUp = {
        position: 'absolute',
        marginTop: '-1px',
        marginLeft: '434.5px',
        height: '32.5px',
        width: '10%',
        backgroundColor: '#eeeeee',
        border: '1px solid #c9c9c9',            //여기(a1a2cf)
        borderRadius: '0px',
        boxShadow: '0px 0px',
        display: 'block',
    }

    //////////////////

    const styleMBoxUpS = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '531px',
        height: '30px',
        width: '435px',
        backgroundColor: '#ffffff',
        border: '0px',
        borderRadius: '0px',
        boxShadow: '0px 0px',
        display: 'block',
    }
    
    ////////////////////

    const styleFTeamDetail = {
        position: 'absolute',
        marginTop: '30px',
        marginLeft: '-1px',
        borderRadius: '0px',
        // backgroundColor: '#cc6a6a',
        backgroundColor: '#dbdfff',                 
        borderRadius: '0px',
        width: '437px',
        height: '369px',
        boxShadow: '0px 0px',
        border: '1px solid #c9c9c9',        //여기(a1a2cf)
    }

    const styleFTeamOb = {
        position: 'absolute',
        marginTop: '30px',
        marginLeft: '434.5px',
        borderRadius: '0px',
        // backgroundColor: '#cc6a6a',
        backgroundColor: '#f2f3ff',                
        borderRadius: '0px',
        width: '10%',
        height: '185px',
        boxShadow: '0px 0px',
        border: '1px solid #c9c9c9',        //여기(a1a2cf)
    }

    //

    const styleSTeamDetail = {
        position: 'absolute',
        marginTop: '30px',
        marginLeft: '530px',
        borderRadius: '0px',
        // backgroundColor: '#cc6a6a',
        backgroundColor: '#ffdbdb',
        borderRadius: '0px',
        width: '437px',
        height: '369px',
        boxShadow: '0px 0px',
        border: '1px solid #c9c9c9',        //여기(a1a2cf)
    }

    const styleSTeamOb = {
        position: 'absolute',
        marginTop: '214px',
        marginLeft: '434.5px',
        borderRadius: '0px',
        // backgroundColor: '#cc6a6a',
        backgroundColor: '#fff2f2',
        borderRadius: '0px',
        width: '10%',
        height: '185px',
        boxShadow: '0px 0px',
        border: '1px solid #c9c9c9',        //여기(a1a2cf)
    }

    ///////////

    const Baron = {
        position: 'absolute',
        marginTop: '25px',
        marginLeft: '12px',
        width: '70px',
        height: '30px',
        // backgroundColor: '#fffffff',
    }

    const BaronImg = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '12px',
        width: '30px',
        height: '30px',
        display: 'block',
    }

    const BaronCount = {
        position: 'absolute',
        marginTop: '3px',
        marginLeft: '42px',
        width: '30px',
        fontSize: '15px',
        // backgroundColor: '#ffffff',
        textAlign: 'center',
    }

    //////////

    const Dragon = {
        position: 'absolute',
        marginTop: '75px',
        marginLeft: '12px',
        width: '70px',
        height: '30px',
        // backgroundColor: '#ffffff',
    }

    const DragonImg = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '12px',
        width: '30px',
        height: '30px',
        display: 'block',
    }

    const DragonCount = {
        position: 'absolute',
        marginTop: '3px',
        marginLeft: '42px',
        width: '30px',
        fontSize: '15px',
        // backgroundColor: '#ffffff',
        textAlign: 'center',
    }

    /////////////

    const Tower = {
        position: 'absolute',
        marginTop: '125px',
        marginLeft: '12px',
        width: '70px',
        height: '30px',
        // backgroundColor: '#ffffff',
    }

    const TowerImg = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '12px',
        width: '30px',
        height: '30px',
        display: 'block',
    }

    const TowerCount = {
        position: 'absolute',
        marginTop: '3px',
        marginLeft: '42px',
        width: '30px',
        fontSize: '15px',
        // backgroundColor: '#ffffff',
        textAlign: 'center',
    }


    ///////////// 위는 css

    const [PM, setPM] = useState(true);
    const [Result, setResult] = useState('');


    useEffect(() => {
        
    }, [])

    const MBoxHandler = (event) => {
        event.preventDefault();
        setPM(!PM);
    }


    

    return (
        <form>
            {/* //승리 패배 다시하기에 따라 색깔달라지게 설정 (일단 만들어 놓은거는 패배일때) 고의 트롤한 판은 보라색으로 하자 */}
            {/* 내팀이 패배하면 빨간계열 내팀이 이기면 파란계열 */}
            <div className='MatchThingBox' style={styleMatchThingBox}>
                <Paper className="MBoxFirst" style={styleMBoxFirst}>
                                                {/*여기(a9b1db) */}
                    <div style={{backgroundColor: '#dba9a9', marginTop: '49px', height: '2px', width: '20px', marginLeft: '25px', borderRadius: '5px'}}/>
                    <div className="MBoxFRank" style={styleMBoxFRank}>솔랭</div>
                    <div className="MBoxFDay" style={styleMBoxFDay}><span>15</span>일 전</div>
                    <div className="MBoxFGameResult" style={styleMBoxFGameResult}>패배</div>
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
                    <MBoxFiveHashTag />
                </Paper>
                <Paper className="MBoxSixF" style={styleMBoxSixF}>
                    <MBoxSixBlueTP />
                </Paper>
                <Paper className="MBoxSixS" style={styleMBoxSixS}>
                    <MBoxSixRedTP />
                </Paper>
                <button className="MBoxSeven" style={styleMBoxSeven} onClick={MBoxHandler}>
                    {PM && <AddIcon style={{marginTop: '65px'}} fontSize='small' />}
                    {!PM && <RemoveIcon style={{marginTop: '65px'}} fontSize='small' />}
                </button>
            </div>



            {!PM && 
            <div className="MBoxDetail" style={styleMBoxDetail}>
                <Paper className="MBoxUpF" style={styleMBoxUpF}>
                    <div className="ResultTeam" style={styleResultTeam}>
                        {/* 패배는 빨강 승리는 파랑 */}
                        <span style={{fontWeight: 'bold', color: '#4031b5'}}>승리</span> &nbsp;(<span>블루</span>팀)
                    </div>
                    <div className="ResultKda" style={styleResultKda}>
                        <img className="KdaImg" style={styleKdaImg}/>
                        <div style={{marginLeft: '25px', wordSpacing: '-2px'}}>110 / <span style={{color: '#d62929'}}>330</span> / 100</div>
                    </div>
                    <div className="ResultGold" style={styleResultGold}>
                        <img className="GoldImg" style={styleGoldImg}/>
                        <div style={{marginLeft: '25px'}}><span>9.4</span>천</div>
                    </div>
                </Paper>
                <Paper className="MBoxUp" style={styleMBoxUp}></Paper>
                <Paper className="MBoxUpS" style={styleMBoxUpS}>
                    <div className="ResultTeam" style={styleResultTeam}>
                        {/* 패배는 빨강 승리는 파랑 */}
                        <span style={{fontWeight: 'bold', color: '#e33030'}}>패배</span> &nbsp;(<span>레드</span>팀)
                    </div>
                    <div className="ResultKda" style={styleResultKda}>
                        <img className="KdaImg" style={styleKdaImg}/>
                        <div style={{marginLeft: '25px', wordSpacing: '-2px'}}>110 / <span style={{color: '#d62929'}}>330</span> / 100</div>
                    </div>
                    <div className="ResultGold" style={styleResultGold}>
                        <img className="GoldImg" style={styleGoldImg}/>
                        <div style={{marginLeft: '25px'}}><span>9.4</span>천</div>
                    </div>
                </Paper>

                <Paper className="FTeamDetail" style={styleFTeamDetail}>
                    <FTeamDetailForm />
                    <FTeamDetailForm />
                    <FTeamDetailForm />
                    <FTeamDetailForm />
                    <FTeamDetailForm />
                </Paper>
                <Paper className="FTeamOb" style={styleFTeamOb}>
                    <div className="Baron" style={Baron}>
                        <img style={BaronImg} />
                        <div className='BaronCount' style={BaronCount}>0</div>
                    </div>
                    <div className="Dragon" style={Dragon}>
                        <img style={DragonImg} />
                        <div className='DragonCount' style={DragonCount}>0</div>
                    </div>
                    <div className="Tower" style={Tower}>
                        <img style={TowerImg} />
                        <div className='TowerCount' style={TowerCount}>0</div>
                    </div>
                </Paper>
                <Paper className="STeamDetail" style={styleSTeamDetail}>
                    <STeamDetailForm />
                    <STeamDetailForm />
                    <STeamDetailForm />
                    <STeamDetailForm />
                    <STeamDetailForm />
                </Paper>
                <Paper className="STeamOb" style={styleSTeamOb}>
                <div className="Baron" style={Baron}>
                        <img style={BaronImg} />
                        <div className='BaronCount' style={BaronCount}>0</div>
                    </div>
                    <div className="Dragon" style={Dragon}>
                        <img style={DragonImg} />
                        <div className='DragonCount' style={DragonCount}>0</div>
                    </div>
                    <div className="Tower" style={Tower}>
                        <img style={TowerImg} />
                        <div className='TowerCount' style={TowerCount}>0</div>
                    </div>
                </Paper>
            </div>
            }
    </form>
    )
}

export default MatchThing