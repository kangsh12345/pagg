import React from 'react'

function MBoxSixBlueTP() {

    const styleBFirstPlayer = {
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
        <div className="MBoxSixBlueTP">
            <div className="BFirstPlayer" style={styleBFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>일이삼사오육칠팔</div>
            </div>
            <div className="BSecondPlayer" style={styleBFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>kangsh1</div>
            </div>
            <div className="BThirdPlayer" style={styleBFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>kangsh2</div>
            </div>
            <div className="BFourthPlayer" style={styleBFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>kangsh3</div>
            </div>
            <div className="BFifthPlayer" style={styleBFirstPlayer}>
                <img className="FirstPlayerChampion" style={styleFirstPlayerChampion} />
                <div className="FirstPlayerName" style={styleFirstPlayerName}>kangsh4</div>
            </div>
        </div>
    )
}

export default MBoxSixBlueTP