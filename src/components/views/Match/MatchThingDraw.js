import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import MBoxSixBlueTP from "./MBoxSixBlueTP";
import MBoxSixRedTP from "./MBoxSixRedTP";

function MatchThingDraw(props) {
    const styleMatchThingBox = {
        width: "100%",
        height: "100px",
        marginTop: "8px",
        marginLeft: "1px",
        border: "1px solid #b5b5b5", //여기(b5b5b5)
        backgroundColor: "#d4d4d4", //여기 색깔 바꾸기(d4d4d4)--
        borderRadius: "2px"
    };

    //////////////////

    const styleMBoxFirst = {
        position: "absolute",
        border: "1px solid #b5b5b5", //여기(b5b5b5)
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px",
        height: "98px",
        width: "70px",
        border: "0px",
        borderRadius: "2px",
        display: "block"
    };

    const styleMBoxFRank = {
        position: "absolute",
        marginLeft: "-65px",
        marginTop: "-41px",
        width: "200px",
        lineHeight: "17px",
        textAlign: "center",
        fontSize: "10px",
        fontWeight: "bold",
        color: "#696969"
    };

    const styleMBoxFDay = {
        position: "absolute",
        marginLeft: "-65px",
        marginTop: "-23px",
        width: "200px",
        lineHeight: "17px",
        textAlign: "center",
        fontSize: "9px",
        color: "#858585"
    };

    const styleMBoxFGameResult = {
        position: "absolute",
        marginLeft: "-65px",
        marginTop: "5px",
        width: "200px",
        lineHeight: "17px",
        textAlign: "center",
        fontSize: "11px",
        fontWeight: "bold",
        color: "#666666" //여기 색깔 바꾸기(666666)
    };

    const styleMBoxFGameTime = {
        position: "absolute",
        marginLeft: "-65px",
        marginTop: "20px",
        width: "200px",
        lineHeight: "17px",
        textAlign: "center",
        fontSize: "8px",
        color: "#858585"
    };

    ////////////////////////

    const styleMBoxSecond = {
        position: "absolute",
        marginLeft: "71px",
        // border: '1px solid #b5b5b5',
        backgroundColor: "#d4d4d4", //여기 색깔 바꾸기(d4d4d4)
        boxShadow: "0px 0px",
        height: "98px",
        width: "160px",
        border: "0px",
        display: "block",
        borderRadius: "0px"
    };

    const styleMBoxSecondChampionImg = {
        position: "absolute",
        marginTop: "15px",
        marginLeft: "15px",
        display: "block",
        width: "55px",
        height: "55px",
        borderRadius: "6px"
    };

    const styleMBoxSecondSpellFImg = {
        position: "absolute",
        marginTop: "15px",
        marginLeft: "75px",
        display: "block",
        width: "27px",
        height: "27px",
        borderRadius: "4px"
    };

    const styleMBoxSecondSpellSImg = {
        position: "absolute",
        marginTop: "43px",
        marginLeft: "75px",
        display: "block",
        width: "27px",
        height: "27px",
        borderRadius: "4px"
    };

    const styleMBoxSecondRunesFImg = {
        position: "absolute",
        marginTop: "17.5px",
        marginLeft: "107px",
        display: "block",
        width: "24px",
        height: "24px",
        borderRadius: "20px",
        backgroundColor: "#141414"
    };

    const styleMBoxSecondRunesSImg = {
        position: "absolute",
        marginTop: "46.5px",
        marginLeft: "109.5px",
        display: "block",
        width: "20px",
        height: "20px",
        borderRadius: "20px",
        backgroundColor: "#c2c2c2"
    };

    const styleMBoxSecondChampionName = {
        position: "absolute",
        marginLeft: "-22px",
        marginTop: "74px",
        width: "200px",
        textAlign: "center",
        fontSize: "11px",
        color: "#787878"
    };

    //////////////////

    const styleMBoxThree = {
        position: "absolute",
        marginLeft: "231px",
        border: "1px solid #b5b5b5", //여기(b5b5b5)
        backgroundColor: "#d4d4d4", //여기(d4d4d4)
        boxShadow: "0px 0px",
        height: "98px",
        width: "500px",
        border: "0px",
        display: "block",
        borderRadius: "0px"
    };

    const styleMBoxThreeLevelCs = {
        position: "absolute",
        marginTop: "6px",
        marginLeft: "12px",
        color: "#575757",
        fontSize: "11px"
    };

    const styleMBoxThreeItemTable = {
        position: "absolute",
        marginLeft: "10px",
        marginTop: "25px",
        border: "1px solid #b5b5b5", //여기(b5b5b5)
        backgroundColor: "#d4d4d4", //여기(d4d4d4)
        boxShadow: "0px 0px",
        height: "57px",
        width: "160px",
        border: "0px",
        display: "block",
        borderRadius: "0px"
    };

    const FirstItem = {
        position: "absolute",
        marginTop: "0px",
        marginLeft: "0px",
        display: "block",
        // border: '1px solid #ffffff',
        borderRadius: "6px",
        width: "26px",
        height: "26px",
        backgroundColor: "#dbdbdb",
        border: "0",
        outline: "0"
    };

    const SecondItem = {
        position: "absolute",
        marginTop: "0px",
        marginLeft: "29px",
        display: "block",
        // border: '1px solid #ffffff',
        borderRadius: "6px",
        width: "26px",
        height: "26px",
        backgroundColor: "#dbdbdb",
        border: "0",
        outline: "0"
    };

    const ThirdItem = {
        position: "absolute",
        marginTop: "0px",
        marginLeft: "58px",
        display: "block",
        // border: '1px solid #ffffff',
        borderRadius: "6px",
        width: "26px",
        height: "26px",
        backgroundColor: "#dbdbdb",
        border: "0",
        outline: "0"
    };

    const FourthItem = {
        position: "absolute",
        marginTop: "29px",
        marginLeft: "0px",
        display: "block",
        // border: '1px solid #ffffff',
        borderRadius: "6px",
        width: "26px",
        height: "26px",
        backgroundColor: "#dbdbdb",
        border: "0",
        outline: "0"
    };

    const FifthItem = {
        position: "absolute",
        marginTop: "29px",
        marginLeft: "29px",
        display: "block",
        // border: '1px solid #ffffff',
        borderRadius: "6px",
        width: "26px",
        height: "26px",
        backgroundColor: "#dbdbdb",
        border: "0",
        outline: "0"
    };

    const SixthItem = {
        position: "absolute",
        marginTop: "29px",
        marginLeft: "58px",
        display: "block",
        // border: '1px solid #ffffff',
        borderRadius: "6px",
        width: "26px",
        height: "26px",
        backgroundColor: "#dbdbdb",
        border: "0",
        outline: "0"
    };

    const WardItem = {
        position: "absolute",
        marginTop: "0px",
        marginLeft: "87px",
        display: "block",
        // border: '1px solid #ffffff',
        borderRadius: "6px",
        width: "26px",
        height: "26px",
        backgroundColor: "#dbdbdb",
        border: "0",
        outline: "0"
    };

    //////////////////////

    const styleMBoxFour = {
        position: "absolute",
        marginLeft: "381px",
        border: "1px solid #b5b5b5", //여기(b5b5b5)
        backgroundColor: "#d4d4d4", //여기(d4d4d4)
        boxShadow: "0px 0px",
        height: "98px",
        width: "140px",
        border: "0px",
        display: "block",
        borderRadius: "0px"
    };

    const styleKDAF = {
        position: "absolute",
        // border: '1px solid #ffffff',
        marginTop: "35px",
        marginLeft: "0px",
        width: "130px",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#666666"
    };

    const styleKDAS = {
        position: "absolute",
        // border: '1px solid #ffffff',
        marginTop: "37px",
        marginLeft: "0px",
        width: "130px",
        textAlign: "center",
        fontSize: "13px",
        // fontWeight: '300',
        color: "#8a8a8a"
    };

    const styleKDAT = {
        position: "absolute",
        // border: '1px solid #ffffff',
        marginTop: "60px",
        marginLeft: "0px",
        width: "130px",
        textAlign: "center",
        fontSize: "13px",
        // fontWeight: '300',
        color: "#8a8a8a"
    };

    //////////////////////////

    const styleMBoxFive = {
        position: "absolute",
        marginLeft: "541px",
        border: "1px solid #b5b5b5", //여기(b5b5b5)
        backgroundColor: "#d4d4d4", //여기(d4d4d4)
        boxShadow: "0px 0px",
        height: "98px",
        width: "160px",
        border: "0px",
        display: "block",
        borderRadius: "0px"
    };

    //////////////////////////

    const styleMBoxSixF = {
        position: "absolute",
        marginLeft: "748px",
        border: "1px solid #b5b5b5", //여기(b5b5b5)
        backgroundColor: "#d4d4d4", //여기(d4d4d4)
        boxShadow: "0px 0px",
        height: "98px",
        width: "90px",
        border: "0px",
        display: "block",
        borderRadius: "0px"
    };

    //

    const styleMBoxSixS = {
        position: "absolute",
        marginLeft: "840px",
        border: "1px solid #b5b5b5", //여기(b5b5b5)
        backgroundColor: "#d4d4d4", //여기(d4d4d4)
        boxShadow: "0px 0px",
        height: "98px",
        width: "90px",
        border: "0px",
        display: "block",
        borderRadius: "0px"
    };

    ////////////////////////////

    const styleMBoxSeven = {
        position: "absolute",
        marginLeft: "931px",
        border: "1px solid #b5b5b5", //여기(b5b5b5)
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px",
        height: "98px",
        width: "35px",
        border: "0px",
        display: "block",
        borderRadius: "2px",
        outline: "0px"
    };

    ///////////// 위는 css

    const [Result, setResult] = useState("");
    const [maindata, setmaindata] = useState(props.matchdata[9].filter(item => item[1] === props.matchdata[5].searchuserpick));
    const [team, setteam] = useState(props.matchdata[6].searchuserpickteam === "blue" ? 0 : 5);

    const [TotalBK, setTotalBK] = useState(
        props.matchdata[9][0][6].kills +
            props.matchdata[9][1][6].kills +
            props.matchdata[9][2][6].kills +
            props.matchdata[9][3][6].kills +
            props.matchdata[9][4][6].kills
    );

    const [TotalRK, setTotalRK] = useState(
        props.matchdata[9][5][6].kills +
            props.matchdata[9][6][6].kills +
            props.matchdata[9][7][6].kills +
            props.matchdata[9][8][6].kills +
            props.matchdata[9][9][6].kills
    );

    const Gametype = () => {
        if (props.matchdata[3].queueid === "5v5 Ranked Solo games") {
            return <span style={{ position: "absolute", fontSize: "12px", marginTop: "1px", marginLeft: "-12px" }}>솔랭</span>;
        } else if (props.matchdata[3].queueid === "5v5 ARAM games") {
            return <>무작위 총력전</>;
        } else if (props.matchdata[3].queueid === "5v5 Ranked Flex games") {
            return <>자유 5:5 랭크</>;
        }
    };

    const MaxDArray = props.matchdata[9].map(item => {
        return item[6].totalDamageDealtToChampions;
    });

    return (
        <form>
            {/* //승리 패배 다시하기에 따라 색깔달라지게 설정 (일단 만들어 놓은거는 패배일때) 고의 트롤한 판은 보라색으로 하자 */}
            {/* 내팀이 패배하면 빨간계열 내팀이 이기면 파란계열 */}
            <div className="MatchThingBox" style={styleMatchThingBox}>
                <Paper className="MBoxFirst" style={styleMBoxFirst}>
                    {/*여기(dbdbdb) */}
                    <div
                        style={{
                            backgroundColor: "#dbdbdb",
                            marginTop: "49px",
                            height: "2px",
                            width: "20px",
                            marginLeft: "25px",
                            borderRadius: "5px"
                        }}
                    />
                    <div className="MBoxFRank" style={styleMBoxFRank}>
                        <Gametype />
                    </div>
                    <div className="MBoxFDay" style={styleMBoxFDay}>
                        <span>{props.matchdata[0].timedate}</span>
                    </div>
                    <div className="MBoxFGameResult" style={styleMBoxFGameResult}>
                        다시하기
                    </div>
                    <div className="MBoxFGameTime" style={styleMBoxFGameTime}>
                        <span>{props.matchdata[2].GameTime[0]}</span>분 <span>{props.matchdata[2].GameTime[1]}</span>초
                    </div>
                </Paper>
                <Paper className="MBoxSecond" style={styleMBoxSecond}>
                    <img className="MBoxSecondChampionImg" style={styleMBoxSecondChampionImg} src={maindata[0][3].championimg} />
                    <img className="MBoxSecondSpellFImg" style={styleMBoxSecondSpellFImg} src={maindata[0][4].spell1Idimg} />
                    <img className="MBoxSecondSpellSImg" style={styleMBoxSecondSpellSImg} src={maindata[0][5].spell1Idimg} />
                    <img className="MBoxSecondRunesFImg" style={styleMBoxSecondRunesFImg} src={maindata[0][6].perkPrimary.perk0img} />
                    <img className="MBoxSecondRunesSImg" style={styleMBoxSecondRunesSImg} src={maindata[0][6].perkSub.subnruneing} />
                    <div className="MBoxSecondChampionName" style={styleMBoxSecondChampionName}>
                        {maindata[0][3].champion}
                    </div>
                </Paper>
                <Paper className="MBoxThree" style={styleMBoxThree}>
                    <div className="MBoxThreeLevelCs" style={styleMBoxThreeLevelCs}>
                        Lv.<span>{maindata[0][6].champLevel}</span>{" "}
                        <span style={{ color: "#7a7a7a", marginLeft: "5px" }}>
                            CS: <span>{maindata[0][6].totalMinionsKilled}</span>,
                            <span>{(maindata[0][6].totalMinionsKilled / props.matchdata[2].GameTime[1]).toFixed(1)}</span>cs/min
                        </span>
                    </div>
                    <Paper className="MBoxThreeItemTable" style={styleMBoxThreeItemTable}>
                        {maindata[0][6].item0img === "#" ? (
                            <div className="FirstItem" style={FirstItem} />
                        ) : (
                            <img className="FirstItem" style={FirstItem} src={maindata[0][6].item0img} />
                        )}
                        {maindata[0][6].item1img === "#" ? (
                            <div className="SecondItem" style={SecondItem} />
                        ) : (
                            <img className="SecondItem" style={SecondItem} src={maindata[0][6].item1img} />
                        )}
                        {maindata[0][6].item2img === "#" ? (
                            <div className="ThridfItem" style={ThirdItem} />
                        ) : (
                            <img className="ThridfItem" style={ThirdItem} src={maindata[0][6].item2img} />
                        )}
                        {maindata[0][6].item3img === "#" ? (
                            <div className="FourthItem" style={FourthItem} />
                        ) : (
                            <img className="FourthItem" style={FourthItem} src={maindata[0][6].item3img} />
                        )}
                        {maindata[0][6].item4img === "#" ? (
                            <div className="FifthItem" style={FifthItem} />
                        ) : (
                            <img className="FifthItem" style={FifthItem} src={maindata[0][6].item4img} />
                        )}
                        {maindata[0][6].item5img === "#" ? (
                            <div className="SixthItem" style={SixthItem} />
                        ) : (
                            <img className="SixthItem" style={SixthItem} src={maindata[0][6].item5img} />
                        )}
                        {maindata[0][6].item6img === "#" ? (
                            <div className="WardItem" style={WardItem} />
                        ) : (
                            <img className="WardItem" style={WardItem} src={maindata[0][6].item6img} />
                        )}
                    </Paper>
                </Paper>
                <Paper className="MBoxFour" style={styleMBoxFour}>
                    {" "}
                    {/*여기(293ad6)*/}
                    {/* <div className="KDAF" style={styleKDAF}>
                        <span>{maindata[0][6].kills}</span> / <span style={{ color: "#d62929" }}>{maindata[0][6].deaths}</span> /{" "}
                        <span>{maindata[0][6].assists}</span>
                    </div>
                    <div className="KDAS" style={styleKDAS}></div>
                    <div className="KDAT" style={styleKDAT}></div> */}
                </Paper>
                <Paper className="MBoxFive" style={styleMBoxFive}></Paper>
                <Paper className="MBoxSixF" style={styleMBoxSixF}>
                    <MBoxSixBlueTP matchdata={props.matchdata} />
                </Paper>
                <Paper className="MBoxSixS" style={styleMBoxSixS}>
                    <MBoxSixRedTP matchdata={props.matchdata} />
                </Paper>
                <div className="MBoxSeven" style={styleMBoxSeven}></div>
            </div>
        </form>
    );
}

export default MatchThingDraw;
