import React from 'react'
import MultiThing from './MultiThing'

function MultiSearchPage() {

    const styleBigBox = {
        position: 'relative',
        width: '1300px',
        height: '1050px',
        margin: '0 auto',
        // padding: '20px 0 0 0',
        backgroundColor: '#eeeeee',

    }

    return (
        <div className='MultiLayout' style={{marginTop: '35px',}}>
            <div className='BigBox' style={styleBigBox}>
                <MultiThing />
                <MultiThing />
                <MultiThing />
                <MultiThing />
                <MultiThing />
            </div>
        </div>
    )
}

export default MultiSearchPage
