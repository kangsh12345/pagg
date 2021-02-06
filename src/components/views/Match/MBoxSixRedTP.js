import React from 'react'

function MBoxSixRedTP() {
    const styleRFirstPlayer = {
        position: 'relative',
        marginTop: '2px',
        height: '17.2px',
        // backgroundColor: '#ffc9c9',
    }

    const styleFirstPlayerChampion = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '0px',
        display: 'block',
        width: '17px',
        height: '17px',
    }

    const styleFirstPlayerName = {
        position: 'absolute',
        marginTop: '1px',
        marginLeft: '19px',
        fontSize: '10px',
        color: '#5e5e5e',
        width: '70px',
        height: '15px',

        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        // border: '1px solid #eeeeee',
    }

    return (
        <div className="MBoxSixRedTP">
            <div className="RFirstPlayer" style={styleRFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>일이삼사오육칠팔</div>
            </div>
            <div className="RSecondPlayer" style={styleRFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>kangsh5</div>
            </div>
            <div className="RThirdPlayer" style={styleRFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>kangsh6</div>
            </div>
            <div className="RFourthPlayer" style={styleRFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>kangsh7</div>
            </div>
            <div className="RFifthPlayer" style={styleRFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>kangsh8</div>
            </div>
        </div>
    )
}

export default MBoxSixRedTP