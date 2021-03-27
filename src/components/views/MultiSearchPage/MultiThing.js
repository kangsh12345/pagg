import React from 'react';
import { LinearProgress } from '@material-ui/core';
import MultiMent from './MultiMent';
import MultiMatchThing from './MultiMatchThing';
import MultiMatchKda from './MultiMatchKda';


function MultiThing() {

    const styleFrame = {
        float: 'left',
        position: 'relative',
        marginTop: '0px',
        marginLeft: '0px',
        border: '1px solid #f0f0f0',
        backgroundColor: '#ffffff',
        height: '100%',
        width: '260px',
    }

    const styleOutline = {
        position: 'relative',
        marginTop: '0px',
        marginLeft: '0px',
        border: '15px solid #d4e1ff',       // 클린유저, 트롤 유저에 따라 색깔 다르게 설정 d4e1ff
        height: '350px',
        width: '258px',
    }

    const styleOWin = {
        position: 'absolute',
        marginTop: '15px',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: '0',
        right: '0',
        border: '0px',
        borderRadius: '30px',
        height: '25px',
        width: '80px',
        fontSize: '13px',
        fontWeight: '300',
        backgroundColor: '#ff4747',
        textAlign: 'center',
        lineHeight: '25px',
        color: '#ffffff',
    }

    const styleTierBox = {
        position: 'absolute',
        marginTop: '60px',
        marginLeft: '0px',
        width: '100%',
        height: '140px',
        // backgroundColor: '#eeeeee',
    }

    const styleTierImg ={
        position: 'absolute',
        left: '0',
        right: '0',
        marginTop: '0px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '130px',
        height: '130px',
        borderRadius: '65px',
        display: 'block',
        backgroundColor: '#eeeeee',
    }

    const stylePosition = {
        position: 'absolute',
        marginTop: '85px',
        marginLeft: '130px',
        width: '55px',
        height: '55px',
        borderRadius: '30px',
        display: 'block',
        backgroundColor: '#eeeeee',
    }

    const styleTierName = {
        position: 'absolute',
        marginTop: '5px',
        marginLeft: '0px',
        width: '100%',
        height: '30px',
        fontSize: '15px',
        textAlign: 'center',
        color: '#636363',
        // backgroundColor: '#ffff00'
    }

    const styleUserName = {
        position: 'absolute',
        marginTop: '215px',
        marginLeft: '0px',
        width: '100%',
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: 'bolder',
    }

    const styleWinGraph = {
        position: 'absolute',
        marginTop: '255px',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: '0',
        right: '0',
        width: '180px',
        height: '20px',
        borderRadius: '10px',
        backgroundColor: '#ff5252',
        border: '1px solid #ffffff',
    }

    const styleWCount = {
        position: 'absolute',
        marginTop: '258px',
        marginLeft: '32px',
        color: '#ffffff',
        fontSize: '10px',
        width: '100px',
    }

    const styleLCount = {
        position: 'absolute',
        marginTop: '258px',
        marginLeft: '95px',
        color: '#ffffff',
        fontSize: '10px',
        width: '100px',
        textAlign: 'right',
    }

    const stylePercent = {
        position: 'absolute',
        marginTop: '280px',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#636363',
        fontSize: '14px',
        textAlign: 'center',
        width: '200px',
    }

    const stylePDBox = {
        position: 'relative',
        marginTop: '0px',
        marginLeft: '0px',
        width: '100%',
        height: '50px',
    }

    const styleP1 = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '0px',
        width: '50%',
        height: '100%',
        backgroundColor: '#ffffff'
    }

    const styleP1Img = {
        position: 'absolute',
        marginTop: '2.5px',
        marginLeft: '27px',
        width: '45px',
        height: '45px',
        display: 'block',
        backgroundColor: '#eeeeee',
        border: '0px',
    }
    
    const P1Percent = {
        position: 'absolute',
        marginTop: '8px',
        marginLeft: '72px',
        fontSize: '12px',
        color: '#152fa3',
        width: '60px',
        textAlign: 'center',
    }

    const P1Win = {
        position: 'absolute',
        marginTop: '26px',
        marginLeft: '72px',
        fontSize: '12px',
        color: '#949494',
        width: '60px',
        textAlign: 'center',
    }

    const styleP2 = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '50%',
        width: '50%',
        height: '100%',
        backgroundColor: '#ffffff'
    }

    const styleP2Img = {
        position: 'absolute',
        marginTop: '2.5px',
        marginLeft: '13px',
        width: '45px',
        height: '45px',
        display: 'block',
        backgroundColor: '#eeeeee',
        border: '0px',
    }

    const P2Percent = {
        position: 'absolute',
        marginTop: '8px',
        marginLeft: '58px',
        fontSize: '12px',
        color: '#949494',
        width: '60px',
        textAlign: 'center',
    }

    const P2Win = {
        position: 'absolute',
        marginTop: '26px',
        marginLeft: '58px',
        fontSize: '12px',
        color: '#949494',
        width: '60px',
        textAlign: 'center',
    }

    const styleRecentTroll = {
        position: 'relative',
        marginTop: '4px',
        marginLeft: '0px',
        backgroundColor: '#f9f9f9',
        // border: '1px solid #ffffff',
        paddingBottom: '13px',
        width: '100%',
        // backgroundColor: '#f5f5f5',
    }

    const styleR = {
        position: 'relative',
        marginTop: '0px',
        paddingTop: '5px',
        marginLeft: '0px',
        fontSize: '16px',
        fontWeight: '700',
        textAlign: 'center',
        width: '100%',
    }

    const styleRecentGame = {
        position: 'relative',
        marginTop: '5px',
        marginLeft: '0px',
        width: '100%',
        paddingBottom: '5px',
        backgroundColor: '#ffffff',
        height: '255px',
    }

    const styleRecentKda = {
        position: 'relative',
        marginTop: '0px',
        marginLeft: '0px',
        width: '100%',
        height: '275px',
        paddingTop: '15px',
        paddingBottom: '10px',
        backgroundColor: '#f5f5f5',
    }



    return (
        <div className='Frame' style={styleFrame}>
            <div className='Outline' style={styleOutline}>
                <div className='OWin' style={styleOWin}>2연패중</div>
                <div className='TierBox' style={styleTierBox} >
                    <img style={styleTierImg} />
                    <img style={stylePosition} />
                    <div style={styleTierName}>G4</div>
                </div>
                <div className='UserName' style={styleUserName}>
                    kangsh1
                </div>
                <LinearProgress 
                        style = {styleWinGraph}
                        color = 'primary'
                        value={50}
                        variant="determinate"
                />
                <div className='WCount' style={styleWCount}>100승</div>
                <div className='LCount' style={styleLCount}>100패</div>
                <div className='Percent' style={stylePercent}>승률 50%</div>
            </div>
            <div className='PDBox' style={stylePDBox}>
                <div className='P1' style={styleP1}>
                    <img style={styleP1Img} />
                    <div style={P1Percent}>80%</div>
                    <div style={P1Win}>80%</div>
                </div>
                <div className='P2' style={styleP2}>
                <img style={styleP2Img} />
                    <div style={P2Percent}>20%</div>
                    <div style={P2Win}>65%</div>
                </div>
            </div>
            <div className='RecentTroll' style={styleRecentTroll}>
                <div style={styleR}>최근 게임</div>
                <hr color='lightgrey'/>
                <MultiMent />
                <MultiMent />
            </div>
            <div className='RecentGame' style={styleRecentGame}>
                <MultiMatchThing />
                <MultiMatchThing />
                <MultiMatchThing />
                <MultiMatchThing />
                <MultiMatchThing />
                <MultiMatchThing />
                <MultiMatchThing />
                <MultiMatchThing />
                <MultiMatchThing />
                <MultiMatchThing />
            </div>
            <div className='RecentKda' style={styleRecentKda}>
                <MultiMatchKda />
                <MultiMatchKda />
                <MultiMatchKda />
                <MultiMatchKda />
                <MultiMatchKda />
                <MultiMatchKda />
                <MultiMatchKda />
                <MultiMatchKda />
                <MultiMatchKda />
                <MultiMatchKda />
            </div>
        </div>
    )
}

export default MultiThing
