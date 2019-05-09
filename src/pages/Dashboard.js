import React, { Component } from "react";

import {
    withStyles,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Grid,
    TextField,
    Button,
    FormControl
  } from "@material-ui/core";

import { connect } from "react-redux";
import ACTIONS from "../modules/action";


const styles = theme => ({

});

class Dashboard extends Component {
    state = {};
    render() {
        return (
            <div>
                dashd
            </div>
        );
      }
}

const mapStateToProps = state => ({
});
  
const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Dashboard));;