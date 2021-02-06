import React, { useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    paper: {
        padding: 2,
        textAlign: 'center',
        color: '#696969',
        background: '#f2f2f2',
        fontSize: '11px'
        
    },
});



const useStyles = makeStyles(styles);

function PastRankList(props) {
    const classes = useStyles();
    const style ={
        fontWeight: "bold",
    }

    return (

            <Grid item>
                {/* 나중에 span 부분이랑 티어 표시하는 부분은 입력값 받아서 오기 */}
                <Paper className={classes.paper}><span style={style}>S10</span> Gold 3</Paper>
            </Grid>
        
    )
}

export default PastRankList;