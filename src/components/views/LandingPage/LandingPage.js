import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "90px",
    textAlign: "center",
    margin: "100px auto 0px auto",
    padding: theme.spacing(0, 0), // 앞이 위아래의 간격, 뒤가 좌우의 간격, 숫자가 커질수록 위 아래의 간격이 넓어짐
  },
  search: {
    position: "relative",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: "0px auto auto auto",
    height: "120%",
    width: "100%", // 이건 왜 있는건지 의문임 아직 해결하지 못함
    [theme.breakpoints.up("sm")]: {
      width: "50%", // 검색바 길이
      height: "50px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    width: "95vh",
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(2, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography className={classes.logo}>PA.GG</Typography>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="소환사명..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </Fragment>
  );
}
