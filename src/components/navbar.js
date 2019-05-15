import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ReactComponent as LogoTermonitor } from "./../img/termonitorW.svg";

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  },
  appBar: {
    backgroundColor: "#1e1e2f",
    boxShadow: "none"
  },
  logo: {
    width: 52,
    height: 52,
    marginRight: 10
  }
};

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar variant="regular">
          <LogoTermonitor className={classes.logo} />
          <Typography variant="h6" color="inherit">
            TERMONITOR
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DenseAppBar);
