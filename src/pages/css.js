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
    backgroundColor: "red",
    borderRadius: "10px",
    padding: theme.spacing.unit
  },
  dashboardItem: {},
  dashboardItemElem: {}
});

export default style;
