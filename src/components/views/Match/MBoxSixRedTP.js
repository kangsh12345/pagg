import React from "react";

function MBoxSixRedTP(props) {
    const styleRFirstPlayer = {
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
        <div className="MBoxSixRedTP">
            <div className="RFirstPlayer" style={styleRFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} src={props.matchdata[9][5][3].championimg} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>
                    {props.matchdata[9][5][0].summonercdname}
                </div>
            </div>
            <div className="RSecondPlayer" style={styleRFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} src={props.matchdata[9][6][3].championimg} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>
                    {props.matchdata[9][6][0].summonercdname}
                </div>
            </div>
            <div className="RThirdPlayer" style={styleRFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} src={props.matchdata[9][7][3].championimg} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>
                    {props.matchdata[9][7][0].summonercdname}
                </div>
            </div>
            <div className="RFourthPlayer" style={styleRFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} src={props.matchdata[9][8][3].championimg} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>
                    {props.matchdata[9][8][0].summonercdname}
                </div>
            </div>
            <div className="RFifthPlayer" style={styleRFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} src={props.matchdata[9][9][3].championimg} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>
                    {props.matchdata[9][9][0].summonercdname}
                </div>
            </div>
        </div>
    );
}

export default MBoxSixRedTP;
