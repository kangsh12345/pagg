import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    paper: {
        borderRadius: '100px',
        padding: 1,
        textAlign: 'center',
        color: '#424242',
        background: '#ffffff',
        fontSize: '13px',
        marginTop: '5px',
        marginLeft: '8px',
    },
});

const useStyles = makeStyles(styles);

function HashTagText(props) {
    const classes = useStyles();
    const style = {
        fontWeight: "bold",
    }

    return (
        <Grid item>
            {/* 나중에 text가져오기 */}
            <Paper className={classes.paper}># 우물잠수</Paper>
        </Grid>
    )
}

export default HashTagText