import React from 'react'

function MultiMatchThing() {

    const styleMMTBox = {
        position: 'relative',
        marginTop: '0px',
        marginLeft: '0px',
        width: '100%',
        height: '25px',
        backgroundColor: '#ffffff',
        paddingTop: '1px',
        textAlign: 'center',
        fontSize: '13px',
    }

    const styleChampion = {
        position: 'absolute',
        marginTop: '-1.5px',
        marginLeft: '25px',
        display: 'block',
        height: '22px',
        width: '22px',
        backgroundColor: '#eeeeee',
        border: '1px solid #424242',
    }

    const styleKda = {
        position: 'absolute',
        marginTop: '1px',
        marginLeft: '55px',
        fontSize: '12px',
        width: '70px',
        textAlign: 'center',
        backgroundColor: '#d4e7ff',
        color: '#0051ba',
        fontWeight: '700'
    }

    const styleDate = {
        position: 'absolute',
        marginTop: '1.5px',
        marginLeft: '180px',
        fontSize: '12px',
        fontWeight: '500',
        width: '60px',
        textAlign: 'center',
        color: '#666666',
    }

    return (
        <div className='MMTBox' style={styleMMTBox}>
            <img className='Champion' style={styleChampion} />
            <div className='Kda' style={styleKda}>
                1 / 1 / 1
            </div>
            <div className='Date' style={styleDate}>
                6일 전
            </div>
        </div>
    )
}

export default MultiMatchThing
