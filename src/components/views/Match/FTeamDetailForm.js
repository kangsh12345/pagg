import { LinearProgress, Paper } from '@material-ui/core'
import React from 'react'

function FTeamDetailForm() {

    const styleForm ={
        position: 'relative',
        marginTop: '-1px',
        marginLeft: '-1px',
        borderRadius: '0px',
        // backgroundColor: '#cc6a6a',
        backgroundColor: '#e8e9ff',
        borderRadius: '0px',
        width: '436px',
        height: '74.6px',
        boxShadow: '0px 0px',
        border: '1px solid #c9c9c9',
    }

    const styleFirstS = {
        position: 'absolute',
        marginTop: '-1px',
        marginLeft: '-1px',
        borderRadius: '0px',
        // backgroundColor: '#cc6a6a',
        backgroundColor: '#e8e9ff',
        borderRadius: '0px',
        width: '200px',
        height: '74.6px',
        boxShadow: '0px 0px',
        border: '1px solid #c9c9c9',
    }

    const styleFirstSChampionImg = {
        position: 'absolute',
        marginTop: '17.3px',
        marginLeft: '15px',
        borderRadius: "6px !important",
        height: '40px',
        width: '40px',
        boxShadow: '0px 0px',
        display: 'block'
    }

    const styleFirstSChampionLevel = {
        position: 'absolute',
        top: '100%',
        left: '100%',
        marginTop: '-30px',
        marginLeft: '-185px',
        width: '18px',
        height: '18px',
        paddingLeft: '0px',
        boxSizing: 'borderBox',
        backgroundSize: '100%',
        lineHeight: '17px',
        fontSize: '14px',
        textAlign: 'center',
        // backgroundColor: '#b0b0b0',
        borderRadius: '8px',
        color: '#ffffff',
        background: 'rgba(176,176,176, 0.5)',
    }

    const styleSpellF = {
        position: 'absolute',
        marginTop: '19px',
        marginLeft: '56px',
        borderRadius: "1px",
        height: '18px',
        width: '18px',
        boxShadow: '0px 0px',
        display: 'block',
    }

    const styleSpellS = {
        position: 'absolute',
        marginTop: '38px',
        marginLeft: '56px',
        borderRadius: "1px",
        height: '18px',
        width: '18px',
        boxShadow: '0px 0px',
        display: 'block',
    }

    const styleRunesF = {
        position: 'absolute',
        marginTop: '19px',
        marginLeft: '75px',
        borderRadius: "1px",
        height: '18px',
        width: '18px',
        boxShadow: '0px 0px',
        display: 'block',
        borderRadius: '10px',
    }

    const styleRunesS = {
        position: 'absolute',
        marginTop: '38px',
        marginLeft: '75px',
        borderRadius: "1px",
        height: '18px',
        width: '18px',
        boxShadow: '0px 0px',
        display: 'block',
        borderRadius: '10px',
    }

    const styleTier = {
        position: 'absolute',
        marginTop: '19px',
        marginLeft: '96px',
        borderRadius: "1px",
        height: '18px',
        width: '18px',
        boxShadow: '0px 0px',
        display: 'block',
        borderRadius: '10px',
        // border: '0.1px solid #707070',
    }
    
    const styleUserName = {
        position: 'absolute',
        marginTop: '20px',
        marginLeft: '116px',
        fontSize: '10px',
        color: '#5e5e5e',
        width: '74px',
        height: '15px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    }

    const ItemTable = {
        position: 'absolute',
        marginTop: '40px',
        marginLeft: '96px',
        borderRadius: '2px',
        boxShadow: '0px 0px',
        height: '18px',
        width: '98px',
        backgroundColor: '#e8e9ff',
    }

    const Item1 = {
        position: 'absolute',
        marginTop: '2px',
        marginLeft: '0px',
        display: 'block',
        border: '0px',
        borderRadius: '2px',
        height: '14px',
        width: '14px',
    }

    const Item2 = {
        position: 'absolute',
        marginTop: '2px',
        marginLeft: '14px',
        display: 'block',
        border: '0px',
        borderRadius: '2px',
        height: '14px',
        width: '14px',
    }

    const Item3 = {
        position: 'absolute',
        marginTop: '2px',
        marginLeft: '28px',
        display: 'block',
        border: '0px',
        borderRadius: '2px',
        height: '14px',
        width: '14px',
    }

    const Item4 = {
        position: 'absolute',
        marginTop: '2px',
        marginLeft: '42px',
        display: 'block',
        border: '0px',
        borderRadius: '2px',
        height: '14px',
        width: '14px',
    }

    const Item5 = {
        position: 'absolute',
        marginTop: '2px',
        marginLeft: '56px',
        display: 'block',
        border: '0px',
        borderRadius: '2px',
        height: '14px',
        width: '14px',
    }

    const Item6 = {
        position: 'absolute',
        marginTop: '2px',
        marginLeft: '70px',
        display: 'block',
        border: '0px',
        borderRadius: '2px',
        height: '14px',
        width: '14px',
    }

    const Item7 = {
        position: 'absolute',
        marginTop: '2px',
        marginLeft: '84px',
        display: 'block',
        border: '0px',
        borderRadius: '2px',
        height: '14px',
        width: '14px',
    }

    ///


    const styleSecondS = {
        position: 'absolute',
        marginTop: '-1px',
        marginLeft: '198px',
        borderRadius: '0px',
        // backgroundColor: '#cc6a6a',
        backgroundColor: '#ffffff',
        borderRadius: '0px',
        width: '238px',
        height: '74.6px',
        boxShadow: '0px 0px',
        border: '1px solid #c9c9c9',
    }

    const styleKda ={
        position: 'absolute',
        marginTop: '5px',
        marginLeft: '10px',
        fontSize: '12px',
        color: '#6b6b6b',
        // wordSpacing: '-2px',
        // backgroundColor: '#eeeeee',

        // width: '110px',
        // textAlign: 'center',
    }

    const styleKda2 ={
        position: 'absolute',
        marginTop: '5px',
        marginLeft: '170px',
        fontSize: '12px',
        color: '#6b6b6b',
        // wordSpacing: '-2px',
    }

    const styleCs = {
        position: 'absolute',
        marginTop: '25px',
        marginLeft: '10px',
        fontSize: '12px',
        color: '#6b6b6b',

        // width: '110px',
        // textAlign: 'center',
    }

    const styleDamage = {
        position: 'absolute',
        marginTop: '45px',
        marginLeft: '10px',
        fontSize: '12px',
        color: '#6b6b6b',
    }

    const styleDamageGraph = {
        position: 'absolute',
        marginTop: '49px',
        marginLeft: '50px',
        width: '100px',
        height: '10px',
    }
    
    const styleDamageCount = {
        position: 'absolute',
        marginTop: '44px',
        marginLeft: '172px',
        fontSize: '12px',
        color: '#6b6b6b',
    }

    return (
        <div>
            <div className="Form" style={styleForm}>
                <div className="FirstS" style={styleFirstS}>
                    <img className="FirstSChampionImg" style={styleFirstSChampionImg} />
                    <span className="FirstSChampionLevel" style={styleFirstSChampionLevel}>16</span>
                    <img className="SpellF" style={styleSpellF} />
                    <img className="SpellS" style={styleSpellS} />
                    <img className="RunesF" style={styleRunesF} />
                    <img className="RunesS" style={styleRunesS} />
                    <img className="Tier" style={styleTier} />
                    <span className="UserName" style={styleUserName}>일이삼사오육칠팔</span>
                    <Paper className="ItemTable" style={ItemTable}>
                        <img className="Item1" style={Item1} />
                        <img className="Item2" style={Item2} />
                        <img className="Item3" style={Item3} />
                        <img className="Item4" style={Item4} />
                        <img className="Item5" style={Item5} />
                        <img className="Item6" style={Item6} />
                        <img className="Item7" style={Item7} />
                    </Paper>
                </div>
                <div className="SecondS" style={styleSecondS}>
                    <div className="Kda" style={styleKda}>21/3/12 (60%)</div>
                    <div className="Kda2" style={styleKda2}>10.00:1</div>
                    <div className="Cs" style={styleCs}>CS: 23 (1.3cs/min)</div>
                    <div className="Damage" style={styleDamage}>피해량</div>
                    <LinearProgress 
                        style = {styleDamageGraph}
                        color = 'secondary'
                        value={75.5}
                        variant="determinate"
                    />
                    <div className="DamageCount" style={styleDamageCount}>67,620</div>
                </div>
            </div>

        </div>
    )
}

export default FTeamDetailForm