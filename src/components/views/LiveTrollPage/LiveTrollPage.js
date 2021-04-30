import React from 'react'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { makeStyles } from '@material-ui/core/styles';

import LiveTrollThing from './LiveTrollThing';

import Count from './Count';

const useStyles = makeStyles((theme) => ({
    refresh: {
        position: 'absolute',
        marginTop: '40px',
        marginLeft: '750px',
        fontSize: '40px',
      },
      spin: {
        position: 'absolute',
        marginTop: '40px',
        marginLeft: '750px',
        fontSize: '40px',
        animation: "$spin 1s 1",
      },
      // 0%일때 0도에서 100%일때 360도 위치로 가는 애니메이션
      "@keyframes spin": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      }
}))

function LiveTrollPage() {
    const styleHeader ={
        position: 'relative',
        width: '1000px',
        margin: '40px auto',
        padding: '20px 0 0 0',
        height: '200px',
        backgroundColor: '#f7f7f7',
        border : '1px solid #a1a1a1',
    }

    const styletext1 = {
        position : 'absolute',
        marginTop: '40px',
        width: '100%',
        textAlign: 'center',
        color: '#424242',
        fontSize: '30px',
        fontWeight: 'bold',
    }

    const styleCount = {
        position : 'absolute',
        marginTop: '40px',
        marginLeft: '390px',
        width: '400px',
        textAlign: 'center',
        color: '#424242',
        fontSize: '30px',
        fontWeight: 'bold',
    }

    const styletext2 = {
        position : 'absolute',
        marginTop: '90px',
        width: '100%',
        textAlign: 'center',
        color: '#8a8a8a',
        fontSize: '20px',
        // fontWeight: '600',
        
    }

    
    const [spin, setSpin] = React.useState(0);
    const classes= useStyles();

    const refreshCanvas = () => {
        setSpin(true);
        setTimeout(() => {
            setSpin(false);
            window.location.reload();
        }, 1000);
    };
    


    const bigBox = {
        position: 'relative',
        // backgroundColor: '#eeeeee',
        marginTop: '0px',
        paddingBottom: '50px',
        width: '1000px',
        margin: '0px auto',
    }

        


    return (
        <form>
            <div style={styleHeader}>
                <div style={styletext1}>
                    <span> 총 탐지된 트롤 :</span>
                    <span style={{marginLeft: '150px',}}>건</span>
                </div>
                <div style={styleCount}>
                    <Count />
                </div>
                <div style={styletext2}>
                    ( 오늘 탐지된 트롤 : 20 건 )
                </div>
                
                <AutorenewIcon 
                    className={spin ? classes.spin : classes.refresh}
                    onClick={refreshCanvas}
                />
                
            </div>
            <div style={bigBox}>
                <LiveTrollThing />
                <LiveTrollThing />
                
            </div>
        </form>
    )
}

export default LiveTrollPage

