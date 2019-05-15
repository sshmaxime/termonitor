import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as LogoTermonitor } from "./../img/termonitorW.svg";

const style = theme => ({
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
    backgroundColor: "#1e1e2f",
    width: 40,
    height: 40
  },
  margin: {
    "&:hover": {
      backgroundColor: "#1e1e2f"
    }
  }
});

class NavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar variant="regular">
            <IconButton
              aria-label="Delete"
              className={classes.margin}
              onClick={() => {
                this.props.handleButton();
              }}
            >
              <LogoTermonitor className={classes.logo} />
            </IconButton>
            <Typography variant="h6" color="inherit">
              TERMONITOR
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(NavBar);
