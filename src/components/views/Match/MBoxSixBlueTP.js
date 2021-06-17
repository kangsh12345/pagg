import React from "react";

function MBoxSixBlueTP(props) {
    const styleBFirstPlayer = {
        position: "relative",
        marginTop: "2px",
        height: "17.2px"
        // backgroundColor: '#ffc9c9',
    };

    const styleFirstPlayerChampion = {
        position: "absolute",
        marginTop: "0px",
        marginLeft: "0px",
        display: "block",
        width: "17px",
        height: "17px"
    };

    const styleFirstPlayerName = {
        position: "absolute",
        marginTop: "1px",
        marginLeft: "19px",
        fontSize: "10px",
        color: "#5e5e5e",
        width: "70px",
        height: "15px",

        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
        // border: '1px solid #eeeeee',
    };
    return (
        <div className="MBoxSixBlueTP">
            <div className="BFirstPlayer" style={styleBFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} src={props.matchdata[9][0][3].championimg} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>
                    {props.matchdata[9][0][0].summonercdname}
                </div>
            </div>
            <div className="BSecondPlayer" style={styleBFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} src={props.matchdata[9][1][3].championimg} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>
                    {props.matchdata[9][1][0].summonercdname}
                </div>
            </div>
            <div className="BThirdPlayer" style={styleBFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} src={props.matchdata[9][2][3].championimg} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>
                    {props.matchdata[9][2][0].summonercdname}
                </div>
            </div>
            <div className="BFourthPlayer" style={styleBFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} src={props.matchdata[9][3][3].championimg} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>
                    {props.matchdata[9][3][0].summonercdname}
                </div>
            </div>
            <div className="BFifthPlayer" style={styleBFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} src={props.matchdata[9][4][3].championimg} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>
                    {props.matchdata[9][4][0].summonercdname}
                </div>
            </div>
        </div>
    );
}

export default MBoxSixBlueTP;
