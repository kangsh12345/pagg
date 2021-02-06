import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styleChampionImg = {
  position: 'absolute',
  marginTop: '-13px',
  marginLeft: '-11px',
  display: 'block',
  width: '45px',
  height: '45px',
  borderRadius: "6px !important",
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


function createData(champion, game, win, kda, kill, death, ass, cs, mincs, throwing) {
  return { champion, game, win, kda, kill, death, ass, cs, mincs, throwing };
}

const rows = [
    //이미지 사진 끼워넣어야함
    //좋은 평점이면 글자 색깔 다르게 구현하기
    createData('트위스티드 페이트', 3, '50%', 4.0, 4, 3, 12, 128, 3.4, '0회 (0% 낮음)'),
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function RankTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>챔피언</StyledTableCell>
            <StyledTableCell align="center">게임수</StyledTableCell>
            <StyledTableCell align="center">승률</StyledTableCell>
            <StyledTableCell align="center">KDA</StyledTableCell>
            <StyledTableCell align="center">킬</StyledTableCell>
            <StyledTableCell align="center">데스</StyledTableCell>
            <StyledTableCell align="center">어시</StyledTableCell>
            <StyledTableCell align="center">CS</StyledTableCell>
            <StyledTableCell align="center">분당 CS</StyledTableCell>
            <StyledTableCell align="center">던진 횟수</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" width="200px"><img className='ChampionImg' style={styleChampionImg}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.champion}</StyledTableCell>
              <StyledTableCell align="center">{row.game}</StyledTableCell>
              <StyledTableCell align="center">{row.win}</StyledTableCell>
              <StyledTableCell align="center">{row.kda}</StyledTableCell>
              <StyledTableCell align="center">{row.kill}</StyledTableCell>
              <StyledTableCell align="center">{row.death}</StyledTableCell>
              <StyledTableCell align="center">{row.ass}</StyledTableCell>
              <StyledTableCell align="center">{row.cs}</StyledTableCell>
              <StyledTableCell align="center">{row.mincs}</StyledTableCell>
              <StyledTableCell align="center">{row.throwing}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default RankTable