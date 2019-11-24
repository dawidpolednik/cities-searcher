const style = theme => ({
  dialog: {
    textAlign: "center"
  },
  dialogTitle: {
    textAlign: "center",
    fontFamily: "roboto",
    fontSize: "50px",
    letterSpacing: "1px",
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px"
    }
  },
  dialogContent: {
    padding: "0px 70px 0px 70px",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 50px 0px 50px",

      fontSize: "13px"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 20px",
      fontSize: "11px"
    }
  },
  dialogActions: {
    [theme.breakpoints.down("sm")]: {}
  }
});
export default style;
