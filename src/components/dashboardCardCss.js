const style = theme => ({
  card: {
    backgroundColor: "#27293d",
    padding: theme.spacing.unit
  },
  cardHeaderContainer: {
    marginBottom: theme.spacing.unit
  },
  cardHeaderTitle: {
    display: "flex",
    alignItems: "center",
    color: "white",
    fontWeight: "200"
  },
  cardHeaderLogo: {
    width: "15%",
    height: "15%",
    minWidth: "35px",
    minheight: "35px"
  },
  cardContentContainer: {
    marginTop: theme.spacing.unit * 2
  },
  cardContentTitle: {
    textAlign: "center",
    fontWeight: "400",
    color: "white"
  },
  divider: {
    height: "0.15em"
  },
  progress: {
    color: "#43476A",
    transition: "opacity 0.5s"
  }
});

export default style;
