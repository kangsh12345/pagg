import { LinearProgress, Paper } from "@material-ui/core";
import React from "react";

function STeamDetailForm(props) {
    const styleForm = {
        position: "relative",
        marginTop: "-1px",
        marginLeft: "-1px",
        borderRadius: "0px",
        // backgroundColor: '#cc6a6a',
        backgroundColor: "#ffe8e8",
        borderRadius: "0px",
        width: "436px",
        height: "74.6px",
        boxShadow: "0px 0px",
        border: "1px solid #c9c9c9"
    };

    const styleFirstS = {
        position: "absolute",
        marginTop: "-1px",
        marginLeft: "-1px",
        borderRadius: "0px",
        // backgroundColor: '#cc6a6a',
        backgroundColor: "#ffe8e8",
        borderRadius: "0px",
        width: "200px",
        height: "74.6px",
        boxShadow: "0px 0px",
        border: "1px solid #c9c9c9"
    };

    const styleFirstSChampionImg = {
        position: "absolute",
        marginTop: "17.3px",
        marginLeft: "15px",
        borderRadius: "6px !important",
        height: "40px",
        width: "40px",
        boxShadow: "0px 0px",
        display: "block"
    };

    const styleFirstSChampionLevel = {
        position: "absolute",
        top: "100%",
        left: "100%",
        marginTop: "-30px",
        marginLeft: "-185px",
        width: "18px",
        height: "18px",
        paddingLeft: "0px",
        boxSizing: "borderBox",
        backgroundSize: "100%",
        lineHeight: "17px",
        fontSize: "14px",
        textAlign: "center",
        // backgroundColor: '#b0b0b0',
        borderRadius: "8px",
        color: "#ffffff",
        background: "rgba(100,100,100, 0.7)"
    };

    const styleSpellF = {
        position: "absolute",
        marginTop: "19px",
        marginLeft: "56px",
        borderRadius: "1px",
        height: "18px",
        width: "18px",
        boxShadow: "0px 0px",
        display: "block"
    };

    const styleSpellS = {
        position: "absolute",
        marginTop: "38px",
        marginLeft: "56px",
        borderRadius: "1px",
        height: "18px",
        width: "18px",
        boxShadow: "0px 0px",
        display: "block"
    };

    const styleRunesF = {
        position: "absolute",
        marginTop: "19px",
        marginLeft: "75px",
        borderRadius: "1px",
        height: "18px",
        width: "18px",
        boxShadow: "0px 0px",
        display: "block",
        borderRadius: "10px",
        backgroundColor: "#141414"
    };

    const styleRunesS = {
        position: "absolute",
        marginTop: "40px",
        marginLeft: "76.7px",
        borderRadius: "1px",
        height: "15px",
        width: "15px",
        boxShadow: "0px 0px",
        display: "block",
        borderRadius: "10px"
    };

    const styleTier = {
        position: "absolute",
        marginTop: "19px",
        marginLeft: "96px",
        borderRadius: "1px",
        height: "18px",
        width: "18px",
        boxShadow: "0px 0px",
        display: "block",
        borderRadius: "10px"
        // border: '0.2px solid #707070',
    };

    const styleUserName = {
        position: "absolute",
        marginTop: "21px",
        marginLeft: "118px",
        fontSize: "10px",
        color: "#5e5e5e",
        width: "72px",
        height: "15px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    };

    const ItemTable = {
        position: "absolute",
        marginTop: "40px",
        marginLeft: "96px",
        borderRadius: "2px",
        boxShadow: "0px 0px",
        height: "18px",
        width: "98px",
        backgroundColor: "#ffe8e8"
    };

    const Item1 = {
        position: "absolute",
        marginTop: "1px",
        marginLeft: "-1px",
        display: "block",
        border: "0px",
        borderRadius: "2px",
        height: "14px",
        width: "14px",
        backgroundColor: "#d1c5c5"
    };

    const Item2 = {
        position: "absolute",
        marginTop: "1px",
        marginLeft: "13.5px",
        display: "block",
        border: "0px",
        borderRadius: "2px",
        height: "14px",
        width: "14px",
        backgroundColor: "#d1c5c5"
    };

    const Item3 = {
        position: "absolute",
        marginTop: "1px",
        marginLeft: "28px",
        display: "block",
        border: "0px",
        borderRadius: "2px",
        height: "14px",
        width: "14px",
        backgroundColor: "#d1c5c5"
    };

    const Item4 = {
        position: "absolute",
        marginTop: "1px",
        marginLeft: "42.5px",
        display: "block",
        border: "0px",
        borderRadius: "2px",
        height: "14px",
        width: "14px",
        backgroundColor: "#d1c5c5"
    };

    const Item5 = {
        position: "absolute",
        marginTop: "1px",
        marginLeft: "57px",
        display: "block",
        border: "0px",
        borderRadius: "2px",
        height: "14px",
        width: "14px",
        backgroundColor: "#d1c5c5"
    };

    const Item6 = {
        position: "absolute",
        marginTop: "1px",
        marginLeft: "71.5px",
        display: "block",
        border: "0px",
        borderRadius: "2px",
        height: "14px",
        width: "14px",
        backgroundColor: "#d1c5c5"
    };

    const Item7 = {
        position: "absolute",
        marginTop: "1px",
        marginLeft: "86px",
        display: "block",
        border: "0px",
        borderRadius: "2px",
        height: "14px",
        width: "14px",
        backgroundColor: "#d1c5c5"
    };

    ///

    const styleSecondS = {
        position: "absolute",
        marginTop: "-1px",
        marginLeft: "198px",
        borderRadius: "0px",
        // backgroundColor: '#cc6a6a',
        backgroundColor: "#ffffff",
        borderRadius: "0px",
        width: "238px",
        height: "74.6px",
        boxShadow: "0px 0px",
        border: "1px solid #c9c9c9"
    };

    const styleKda = {
        position: "absolute",
        marginTop: "5px",
        marginLeft: "10px",
        fontSize: "12px",
        color: "#6b6b6b"
        // wordSpacing: '-2px',
        // backgroundColor: '#eeeeee',

        // width: '110px',
        // textAlign: 'center',
    };

    const styleKda2 = {
        position: "absolute",
        marginTop: "5px",
        marginLeft: "170px",
        fontSize: "12px",
        color: "#6b6b6b"
        // wordSpacing: '-2px',
    };

    const styleCs = {
        position: "absolute",
        marginTop: "25px",
        marginLeft: "10px",
        fontSize: "12px",
        color: "#6b6b6b"

        // width: '110px',
        // textAlign: 'center',
    };

    const styleDamage = {
        position: "absolute",
        marginTop: "45px",
        marginLeft: "10px",
        fontSize: "12px",
        color: "#6b6b6b"
    };

    const styleDamageGraph = {
        position: "absolute",
        marginTop: "49px",
        marginLeft: "50px",
        width: "100px",
        height: "10px"
    };

    const styleDamageCount = {
        position: "absolute",
        marginTop: "44px",
        marginLeft: "172px",
        fontSize: "12px",
        color: "#6b6b6b"
    };

    return (
        <div>
            <div className="Form" style={styleForm}>
                <div className="FirstS" style={styleFirstS}>
                    <img className="FirstSChampionImg" style={styleFirstSChampionImg} src={props.userdata[3].championimg} />
                    <span className="FirstSChampionLevel" style={styleFirstSChampionLevel}>
                        {props.userdata[6].champLevel}
                    </span>
                    <img className="SpellF" style={styleSpellF} src={props.userdata[4].spell1Idimg} />
                    <img className="SpellS" style={styleSpellS} style={styleSpellS} src={props.userdata[5].spell1Idimg} />
                    <img className="RunesF" style={styleRunesF} src={props.userdata[6].perkPrimary.perk0img} />
                    <img className="RunesS" style={styleRunesS} src={props.userdata[6].perkSub.subnruneing} />
                    <img className="Tier" style={styleTier} />
                    <span className="UserName" style={styleUserName}>
                        {props.userdata[0].summonercdname}
                    </span>
                    <Paper className="ItemTable" style={ItemTable}>
                        {props.userdata[6].item0img === "#" ? (
                            <div className="Item1" style={Item1} />
                        ) : (
                            <img className="Item1" style={Item1} src={props.userdata[6].item0img} />
                        )}
                        {props.userdata[6].item1img === "#" ? (
                            <div className="Item2" style={Item2} />
                        ) : (
                            <img className="Item2" style={Item2} src={props.userdata[6].item1img} />
                        )}
                        {props.userdata[6].item2img === "#" ? (
                            <div className="Item3" style={Item3} />
                        ) : (
                            <img className="Item3" style={Item3} src={props.userdata[6].item2img} />
                        )}
                        {props.userdata[6].item3img === "#" ? (
                            <div className="Item4" style={Item4} />
                        ) : (
                            <img className="Item4" style={Item4} src={props.userdata[6].item3img} />
                        )}
                        {props.userdata[6].item4img === "#" ? (
                            <div className="Item5" style={Item5} />
                        ) : (
                            <img className="Item5" style={Item5} src={props.userdata[6].item4img} />
                        )}
                        {props.userdata[6].item5img === "#" ? (
                            <div className="Item6" style={Item6} />
                        ) : (
                            <img className="Item6" style={Item6} src={props.userdata[6].item5img} />
                        )}
                        {props.userdata[6].item6img === "#" ? (
                            <div className="Item7" style={Item7} />
                        ) : (
                            <img className="Item7" style={Item7} src={props.userdata[6].item6img} />
                        )}
                    </Paper>
                </div>
                <div className="SecondS" style={styleSecondS}>
                    <div className="Kda" style={styleKda}>
                        {props.userdata[6].kills}/{props.userdata[6].deaths}/{props.userdata[6].assists} (
                        {(((props.userdata[6].kills + props.userdata[6].assists) / props.totalK) * 100).toFixed(0)}%)
                    </div>
                    <div className="Kda2" style={styleKda2}>
                        {props.userdata[6].deaths === 0
                            ? "Perfect"
                            : ((props.userdata[6].kills + props.userdata[6].assists) / props.userdata[6].deaths).toFixed(2) + ":1"}
                    </div>
                    <div className="Cs" style={styleCs}>
                        CS: {props.userdata[6].totalMinionsKilled} ({(props.userdata[6].totalMinionsKilled / props.time).toFixed(1)}cs/min)
                    </div>
                    <div className="Damage" style={styleDamage}>
                        피해량
                    </div>
                    <LinearProgress
                        style={styleDamageGraph}
                        color="secondary"
                        value={(props.userdata[6].totalDamageDealtToChampions / Math.max.apply(null, props.maxD)) * 100}
                        variant="determinate"
                    />
                    <div className="DamageCount" style={styleDamageCount}>
                        {props.userdata[6].totalDamageDealtToChampions.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default STeamDetailForm;
