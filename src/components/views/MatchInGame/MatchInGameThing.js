import React from 'react'
import {Paper} from '@material-ui/core'

function MatchInGameThing() {

    const styleBlueThing = {
        position: 'relative',
        backgroundColor: '#c9ccff',
        border: '1px solid #b1b4e6',
        height: '40px',
    }

    const styleBlueThingFrist = {
        position: 'absolute',
        border: '1px solid #e6b1b1',                //여기(b1b4e6)
        backgroundColor: '#ffffff',
        boxShadow: '0px 0px',
        height: '38px',
        width: '200px',
        border: '0px',
        borderRadius: '2px',
        display: 'block',

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
                </Paper>
            </div>
        </div>
    )
}

export default MatchInGameThing
