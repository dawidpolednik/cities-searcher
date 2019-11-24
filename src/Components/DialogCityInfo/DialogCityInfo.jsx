import React from "react";
import {
  withStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import style from "./DialogCityInfo.styles";

const DialogCityInfo = ({
  classes,
  isOpenDialog,
  handleDialog,
  cityProperties
}) => {
  const dialogTitle = (
    <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
      {cityProperties[0]}
    </DialogTitle>
  );

  const dialogContent = (
    <DialogContentText
      className={classes.dialogContent}
      id="alert-dialog-description"
    >
      {cityProperties[1]}
    </DialogContentText>
  );

  const dialogActions = (
    <DialogActions className={classes.dialogActions}>
      <Button onClick={handleDialog} color="primary">
        Back
      </Button>
    </DialogActions>
  );

  return (
    <Dialog
      scroll="body"
      className={classes.dialog}
      open={isOpenDialog}
      onClose={handleDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={false}
      PaperProps={{
        style: {
          margin: "auto",
          width: "70%",
          minHeight: "20vh",
          maxHeight: "90vh"
        }
      }}
    >
      {dialogTitle}
      {dialogContent}
      {dialogActions}
    </Dialog>
  );
};
export default withStyles(style)(DialogCityInfo);
