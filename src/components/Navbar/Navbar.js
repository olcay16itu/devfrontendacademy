import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign : "right",
      textDecoration : "none",
      boxShadow : "none",
      color : "white",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      },
    link:{
        textDecoration : "none",
        boxShadow : "none",
        color : "white",
        flexGrow: 1
    },
    }
  ));

function Navbar() {
    const classes = useStyles();
    return(
        <div>
        <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
    <Link className={classes.link} to="/">Home</Link>
    </Typography>
    <Link className={classes.link} to="/account">Accounts</Link>
    <Link className={classes.link} to={'/character'}>Characters</Link>
    <Link className={classes.link} to={'/config'}>Config</Link>
    <Typography variant="h6">
    <Link className={classes.root} to="/">Login</Link>
    </Typography>
  </Toolbar>
</AppBar>
    </div>
    )
}
export default Navbar;