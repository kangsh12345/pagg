import React from 'react'

function MultiMatchKda() {

    const styleMMKBox = {
        position: 'relative',
        marginTop: '0px',
        marginLeft: '0px',
        width: '100%',
        height: '25px',
        // backgroundColor: '#eeeeee',
        paddingTop: '1px',
    }

    const styleChampion = {
        position: 'absolute',
        marginTop: '0.5px',
        marginLeft: '25px',
        display: 'block',
        height: '22px',
        width: '22px',
        backgroundColor: '#ffffff',
        borderRadius: '11px',
    }

    const styleKda = {
        position: 'absolute',
        marginTop: '3.2px',
        marginLeft: '58px',
        fontSize: '12px',
        color: '#525252',
    }

    const styleGame = {
        position: 'absolute',
        marginTop: '3.2px',
        marginLeft: '135px',
        width: '50px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#525252',
    }

    const stylePercent = {
        position: 'absolute',
        marginTop: '3.2px',
        marginLeft: '190px',
        width: '50px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#525252',
    }

    return (
        <div className='MMKBox' style={styleMMKBox}>
            <img className='Champion' style={styleChampion} />
            <div className='Kda' style={styleKda}>
                3.86 평점
            </div>
            <div className='Game' style={styleGame}>
                22
            </div>
            <div className='Percent' style={stylePercent}>
                50%
            </div>
        </div>
    )
}

export default MultiMatchKda
