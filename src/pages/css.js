const style = theme => ({
  login: {
    padding: theme.spacing.unit * 2,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  },
  avatar: {
    margin: "0 auto",
    marginBottom: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  dashboard: {
    borderRadius: "10px",
    padding: theme.spacing.unit,
    backgroundColor: ""
  },
  dashboardItem: {
    backgroundColor: "#27293d",
    padding: "7%"
  },
  dashboardItemTitle: {
    display: "flex",
    alignItems: "center",
    color: "white",
    fontWeight: "200"
  },
  dashboardItemLogo: {
    width: "6vh",
    height: "6vh"
  },
  dashboardItemHeader: {
    marginBottom: "5%"
  },
  divider: {
    height: "0.1em"
  }
});

export default style;
