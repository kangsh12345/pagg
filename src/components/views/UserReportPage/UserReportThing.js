import { Paper } from '@material-ui/core'
import React from 'react'
import HashTagText from './HashTagText'
import MatchThing from './MatchThing'

function UserReportThing() {

    const BigBox = {
        // position: 'relative',
        width: '100%',
        // height: ''
        marginTop: '30px',
        borderRadius: '2px',
        borderTop: '1px solid #d4d4d4',
        borderLeft: '1px solid #d4d4d4',
        borderRight: '1px solid #d4d4d4',
    }

    const styleHeader = {
        position: 'relative',
        marginTop: '0px',
        marginLeft: '0px',
        height: '40px',
        borderRadius: '0px',
        backgroundColor: '#f2f2f2',
        // border: '1px solid #5e5e5e'
    }

    const styleCategory ={
        position: 'absolute',
        marginTop: '2.5px',
        marginLeft: '5px',
        height: '35px',
        width: '35px',
        display: 'block',
    }

    const styleup = {
        positon: 'relative',
        float: 'left',
        paddingTop: '5.5px',
    }

    const styleComment = {
        postion: 'relative',
        marginTop: '0px',
        marginLeft: '0px',
        minHeight: '250px',
        borderRadius: '0px',
        backgroundColor: '#ffffff',
        padding: '50px 10px 50px 40px',
        fontSize: '18px',
        // whiteSpace : 'pre',
    }
    
    const stylefile = {
        positon: 'relative',
        float: 'right',
        marginRight: '20px',

        display: 'block',
        height: '150px',
        width: '150px',
    }

    const stylewrite = {
        position: 'relative',
        
        height: '150px',
        // marginTop: '61px',
        width: '760px',

        display: 'table-cell',
        verticalAlign: 'middle',
        // backgroundColor: '#eeeeee'
        // padding: '5px 0 0 10px',
    }

    const styleHashTag = {
        // postiion: 'relative',
        marginTop: '0px',
        marginLeft: '25px',
        borderRadius: '0px',
        minHeight: '37px',
        width: '950px',
        display: 'flex',
        flexWrap: 'wrap',
        borderTop: '1px solid #b0b0b0',
        borderBottom: '1px solid #b0b0b0',
        padding: '2px 0 2px 0',
        background: '#f8f8f8'
    }

    const styleGame = {
        position: 'relative',
        marginTop: '20px',
        marginLeft: '-1px',
        borderRadius: '5px',
        width: '998px',
    }



    return (
        <form>
            <Paper style={BigBox}>
                <div style={styleHeader}>
                    <img style={styleCategory} />
                    <div style={styleup}>
                        <span style={{position: 'relative', float: 'left', fontSize: '22px', fontWeight: '600', marginLeft: '50px',color: '#333333', marginTop:'-0.5px'}}>????????????</span>
                        <span style={{position: 'relative', float: 'left',width:'1.5px',borderRadius:'5px',marginTop: '2.5px', height: '24px',marginLeft: '15px',backgroundColor:'#b0b0b0'}}/>
                        <img style={{position: 'relative', float: 'left', display:'block', height: '35px', width:'35px',marginTop: '-3px', marginLeft: '20px',}} />
                        <span style={{position: 'relative', float: 'left', fontSize: '22px', fontWeight: '500', marginLeft: '10px',marginTop: '-1px',fontWeight: '600'}}>Gold 4</span>
                        <span style={{position: 'relative', float:'left', fontSize: '22px',}}/>
                        <span style={{position: 'relative', float: 'left',width:'1.5px',borderRadius:'5px',marginTop: '2.5px', height: '24px',marginLeft: '15px',backgroundColor:'#b0b0b0'}}/>
                        <span style={{position: 'relative', float:'left', fontSize: '22px',marginLeft: '20px',fontWeight: '500',marginTop: '-1px',fontWeight: '600'}}>kangsh1</span>
                    </div>
                </div>
                <div style={styleComment}>
                    {/* ???????????? ????????? ?????????????????? ?????? ??????????????? ??????????????? 
                        ?????? 3?????? ???????????? ???????????? ?????? ????????? +3????????? ???????????????
                        ???????????? ???????????? ????????????
                    */}
                    <img style={stylefile} />
                    <div style={stylewrite}>
                        ????????? ??????
                    </div>
                    
                </div>
                {/* <img style={}/> */}
                <div style={styleHashTag}>
                    {/*???????????? ?????? 5?????? ???????????? */}
                    <HashTagText /><HashTagText /><HashTagText /><HashTagText /><HashTagText />
                    <HashTagText /><HashTagText /><HashTagText /><HashTagText /><HashTagText />
                    <HashTagText /><HashTagText /><HashTagText /><HashTagText /><HashTagText />
                    <HashTagText /><HashTagText /><HashTagText /><HashTagText /><HashTagText />
                </div>
                <div style={styleGame}>
                    <MatchThing/>
                </div>
            </Paper>
        </form>
    )
}

export default UserReportThing