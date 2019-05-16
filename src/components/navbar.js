import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as LogoTermonitor } from "./../img/termonitorW.svg";
import { ReactComponent as LogoCoin } from "./../img/coin.svg";

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
  },
  grow: {
    flexGrow: 1
  },
  addr: {
    color: "grey",
    fontSize: "10px",
    paddingRight: 10
  },
  settingsIcon: {
    color: "white"
  },
  coinIcon: {
    width: 40,
    height: 40,
    paddingRight: 10
  },
  balance: {
    fontSize: "20px",
    color: "white",
    width: 140
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
            <Typography variant="h6" color="inherit" className={classes.grow}>
              TERMONITOR
            </Typography>
            {this.props.isReady ? (
              <React.Fragment>
                <LogoCoin className={classes.coinIcon} />
                <Typography className={classes.balance}>{this.props.balance}</Typography>
                <Typography className={classes.addr}>{this.props.ethAddr}</Typography>
                <IconButton className={classes.margin}>
                  <SettingsIcon fontSize="large" className={classes.settingsIcon} />
                </IconButton>
              </React.Fragment>
            ) : null}
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
