import React from 'react'
import {Paper, LinearProgress} from '@material-ui/core'

function MatchInGameThingRed() {

    const styleBlueThing = {
        position: 'relative',
        backgroundColor: '#f2f2f2',
        border: '1px solid #cdd2d2',
        height: '40px',
    }

    const styleBlueThingFrist = {
        position: 'absolute',
        border: '1px solid #e6b1b1',                //여기(b1b4e6)
        backgroundColor: '#ffffff',
        boxShadow: '0px 0px',
        height: '38px',
        width: '240px',
        border: '0px',
        borderRadius: '2px',
        display: 'block',

    }

    const styleFront = {
        position: 'absolute',
        backgroundColor: '#ffc9c9',
        height: '38px',
        width: '3px',
        marginLeft: '0px',
        marginTop: '0px',
    }

    const styleAlert = {
        position: 'absolute',
        marginLeft: '5px',
        marginTop: '15px',
        height: '10px',
        width: '10px',
        borderRadius: '5px',
        backgroundColor: '#000000',
    }

    const styleChampImg = {
        display: 'block',
        position : 'absolute',
        marginLeft: '25px',
        marginTop: '4px',
        height: '30px',
        width: '30px',
        borderRadius: '2px',
    }

    const styleSpellImg1 = {
        position : 'absolute',
        marginLeft: '59px',
        marginTop: '4px',
        display: 'block',
        height: '14px',
        width: '14px',
        borderRadius: '1px',
    }

    const styleSpellImg2 = {
        position : 'absolute',
        marginLeft: '59px',
        marginTop: '20px',
        display: 'block',
        height: '14px',
        width: '14px',
        borderRadius: '1px',
    }

    const styleRuneImg1 = {
        position : 'absolute',
        marginLeft: '75px',
        marginTop: '4px',
        display: 'block',
        height: '14px',
        width: '14px',
        borderRadius: '7px',
    }

    const styleRuneImg2 = {
        position : 'absolute',
        marginLeft: '75px',
        marginTop: '20px',
        display: 'block',
        height: '14px',
        width: '14px',
        borderRadius: '7px',
    }

    const styleUserName = {
        position: 'absolute',
        marginLeft: '98px',
        marginTop: '10px',
        fontSize: '12px',
        fontWeight: '600',
        width: '115px',
        // backgroundColor: '#eeeeee',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    }

    const styleTierImg = {
        display: 'block',
        position: 'absolute',
        marginLeft: '270px',
        marginTop: '4px',
        height: '30px',
        width: '30px',
    }

    const styleTier = {
        position: 'absolute',
        marginTop: '11px',
        marginLeft: '310px',
        fontSize: '13px',
        fontWeight: '300',
        color: '#787878',
    }

    const styleRecent = {
        position: 'absolute',
        marginLeft: '450px',
        marginTop: '5px',
        fontSize: '10px',
        fontWeight: '700',
        color: '#c20000',
        width: '110px',
        // backgroundColor: '#eeeeee',
        textAlign: 'center',
    }

    const styleWinGraph = {
        position: 'absolute',
        marginTop: '20px',
        marginLeft: '457px',
        width: '100px',
        height: '10px',
    }

    const styleWinPercent = {
        position: 'absolute',
        marginLeft: '582px',
        marginTop: '5px',
        fontSize: '10px',
        fontWeight: '700',
        width: '70px',
        // backgroundColor: '#eeeeee',
        textAlign: 'center',
        
    }

    const styleWin = {
        position: 'absolute',
        marginLeft: '575px',
        marginTop: '19px',
        fontSize: '10px',
        width: '80px',
        // backgroundColor: '#eeeeee',
        textAlign: 'center',
    }

    const styleKda = {
        position: 'absolute',
        marginLeft: '675px',
        marginTop: '5px',
        fontSize: '10px',
        fontWeight: '600',
        width: '80px',
        textAlign: 'center',
    }

    const styleKdaDetail = {
        position: 'absolute',
        marginLeft: '665px',
        marginTop: '19px',
        fontSize: '10px',
        width: '100px',
        textAlign: 'center',
        // backgroundColor: '#eeeeee',
    }

    const styleLastTier = {
        display: 'block',
        position: 'absolute',
        marginLeft: '830px',
        marginTop: '4px',
        height: '30px',
        width: '30px',
    }

    const styleBlueThingSecond = {
        position: 'absolute',
        border: '1px solid #e6b1b1',                //여기(b1b4e6)
        backgroundColor: '#ffffff',
        boxShadow: '0px 0px',
        height: '38px',
        width: '66px',
        border: '0px',
        borderRadius: '2px',
        display: 'block',
        marginLeft: '900px',
    }

    const styleRedCard = {
        position: 'absolute',
        marginLeft: '17px',
        marginTop: '1.5px',
        display: 'block',
        height: '17px',
        width: '17px',

    }

    const styleRedCardCount ={
        position: 'absolute',
        marginLeft: '43px',
        marginTop: '3.2px',
        fontSize: '10px',
        fontWeight: '500',
        color: '#5c5b5b'
    }

    const styleYellowCard = {
        position: 'absolute',
        marginLeft: '17px',
        marginTop: '19.5px',
        display: 'block',
        height: '17px',
        width: '17px',

    }

    const styleYellowCardCount ={
        position: 'absolute',
        marginLeft: '43px',
        marginTop: '21.2px',
        fontSize: '10px',
        fontWeight: '500',
        color: '#5c5b5b'
    }


    return (
        <div>
            <div style={styleBlueThing}>
                <Paper style={styleBlueThingFrist}>
                    <div style={styleAlert} />
                    <img style={styleChampImg} />
                    <img style={styleSpellImg1} />
                    <img style={styleSpellImg2} />
                    <img style={styleRuneImg1} />
                    <img style={styleRuneImg2} />
                    <div style={styleUserName} >일이삼사오육칠팔구십십일십이십삼</div>
                </Paper>
                <div style={styleFront}/>
                <img style={styleTierImg} />
                {/* 승급전인때 v x로 표시*/}
                <div style={styleTier}>Diamond 2 ( 70LP )</div>
                <div style={styleRecent}>최근 승률</div>
                {/* 승률 낮으면 색깔 변하게 바꾸기 */}
                <LinearProgress 
                        style = {styleWinGraph}
                        color = 'secondary'
                        value={75.5}
                        variant="determinate"
                    />
                <div style={styleWinPercent}>0%</div>
                <div style={styleWin}>( 5게임 )</div>
                <div style={styleKda}>2.3 KDA</div>
                <div style={styleKdaDetail}>1 / 1 / 1</div>
                {/* 전시즌 티어 말풍선으로 나타내게하기 */}
                <img style={styleLastTier} />
                <Paper style={styleBlueThingSecond}>
                    <img style={styleRedCard} />
                    <div style={styleRedCardCount}>
                        0
                    </div>
                    <img style={styleYellowCard} />
                    <div style={styleYellowCardCount}>
                        0
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default MatchInGameThingRed
