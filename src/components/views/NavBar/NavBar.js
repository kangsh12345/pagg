import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    minHeight: "52px",
  },
  toolbar: {},
  toolbarTitle: {
    margin: "auto 20px auto 0",
  },
  link: {
    margin: "auto 1px auto 0",
  },
  search: {
    flexDirection: "row-reverse",
    position: "relative",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: "0",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "auto",
      width: "auto",
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
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Link
          justifyContent="flex-start"
          href="/"
          variant="h5"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          PA.GG
        </Link>
        <Link
          variant="button"
          color="textPrimary"
          href="/multisearch"
          className={classes.toolbarTitle}
        >
          멀티서치
        </Link>
        <Link
          variant="button"
          color="textPrimary"
          href="/livetroll"
          className={classes.toolbarTitle}
        >
          실시간 트롤
        </Link>

        <Link
          variant="button"
          color="textPrimary"
          href="/userreport"
          className={classes.toolbarTitle}
        >
          유저 신고
        </Link>

        <Link
          variant="button"
          color="textPrimary"
          href="/game"
          className={classes.link}
        >
          팀운강화기
        </Link>
        <nav></nav>
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
        <Button
          href="/login"
          color="black"
          variant="outlined"
          className={classes.link}
        >
          로그인
        </Button>
      </Toolbar>
    </AppBar>
  );
}
