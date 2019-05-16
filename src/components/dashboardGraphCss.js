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
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 0.1
  },
  cardContentTitle: {
    textAlign: "center",
    fontWeight: "400",
    color: "white"
  },
  divider: {
    height: "0.1em"
  },
  progress: {
    color: "#43476A",
    margin: 0,
    position: "absolute",
    top: "50%"
  },
  progressDiv: {
    height: 300, // match with chart's height
    textAlign: "center"
  }
});

// https://apexcharts.com
const chartStyle = {
  options: {
    chart: {
      toolbar: {
        show: false
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.9,
        opacityTo: 0.1,
        shade: "dark"
      },
      colors: ["#1e1e2f"]
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#FF00FF", "#00FFFF"],
    stroke: {
      curve: "smooth"
    },
    // Insert Max & Min here
    yaxis: {
      max: 0,
      min: 0,
      labels: {
        style: {
          color: "#ffffff",
          fontSize: "13"
        }
      }
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: "#ffffff",
          fontSize: "12"
        }
      },
      // Insert date here
      categories: ["0000-00-00T00:00:00.000Z"]
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    }
  },
  // Insert data here
  series: [
    {
      name: "exemple",
      data: [100]
    }
  ]
};

export { style, chartStyle };
