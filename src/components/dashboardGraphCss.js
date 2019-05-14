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
    xaxis: {
      type: "datetime",
      // Insert date here
      categories: [
        "2019-05-14T18:00:00.000Z",
        "2019-05-14T18:10:00.000Z",
        "2019-05-14T18:20:00.000Z",
        "2019-05-14T18:30:00.000Z",
        "2019-05-14T18:40:00.000Z",
        "2019-05-14T18:50:00.000Z",
        "2019-05-14T19:00:00.000Z"
      ]
    },
    // Insert Max & Min here
    yaxis: {
      max: 500,
      min: 0
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    }
  },
  series: [
    {
      name: "series1",
      data: [300.5, 300, 300, 300, 300, 300, 300]
    },
    {
      name: "series2",
      data: [280, 320, 280, 320, 280, 320, 280]
    }
  ]
};

export { style, chartStyle };
