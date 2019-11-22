import React from "react";
import {
  withStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import style from "./DialogAlert.styles.js";

const DialogAlert = ({ classes, isOpenAlert, handleAlert, countriesList }) => {
  const dialogTitle = (
    <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
      Something goes wrong
    </DialogTitle>
  );

  const dialogContent = (
    <DialogContentText
      className={classes.dialogContent}
      id="alert-dialog-description"
    >
      The value entered is not valid. This value must include one of the
      following countries: {countriesList.join(", ")}
    </DialogContentText>
  );

  const dialogActions = (
    <DialogActions>
      <Button onClick={handleAlert} color="primary">
        Back
      </Button>
    </DialogActions>
  );

  return (
    <Dialog
      open={isOpenAlert}
      onClose={handleAlert}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {dialogTitle}
      {dialogContent}
      {dialogActions}
    </Dialog>
  );
};
export default withStyles(style)(DialogAlert);
