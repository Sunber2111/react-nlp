import React from "react";
import { RootState } from "app/store";
import { useSelector } from "react-redux";
import { Button, makeStyles, Paper } from "@material-ui/core";
import "./styles.scss";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  comment: {
    padding: "20px",
    fontWeight: "bold",
  },
  b: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "white",
    height: 48,
    padding: "0 20px",
    marginRight: "20px",
    background: "white",
  },
  b1: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 20px",
    marginRight: "20px",
    background: "#ed213a",
  },
  b2: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 20px",
    marginRight: "20px",
    background: "#38ef7d",
  },
  b3: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 20px",
    marginRight: "20px",
    background: "#FFE000",
  },
  b4: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 20px",
    marginRight: "20px",
    background: "#F00000",
  },
  b5: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 20px",
    marginRight: "20px",
    background: "#38ef7d",
  },
  b6: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 20px",
    marginRight: "20px",
    background: "#6dd5ed",
  },
});

function Alert(props: AlertProps) {
  return <MuiAlert elevation={3} variant="filled" {...props} />;
}

const SelectionMode = () => {
  const currentCmt = useSelector((s: RootState) => s.content.currentComment);
  const labelSelect = useSelector((s: RootState) => s.content.labelSelect);
  const lengthLabel = useSelector(
    (s: RootState) => s.content.commentsLabel.length
  );
  const classes = useStyles();

  return (
    <div className="select-mode">
      <Alert severity="info" className="alert">
        Tổng số câu label được là : {lengthLabel}
      </Alert>
      <Paper className={classes.comment}>{currentCmt.content}</Paper>
      <div className="btn-chose">
        <Button className={labelSelect === 0 ? classes.b1 : classes.b}>
          Sản Phẩm Tệ
        </Button>
        <Button className={labelSelect === 1 ? classes.b2 : classes.b}>
          Sản Phẩm Tốt
        </Button>
        <Button className={labelSelect === 2 ? classes.b3 : classes.b}>
          Sản Phẩm Vừa
        </Button>
        <Button className={labelSelect === 3 ? classes.b4 : classes.b}>
          Nghiệp vụ tệ
        </Button>
        <Button className={labelSelect === 4 ? classes.b5 : classes.b}>
          Nghiệp vụ tốt
        </Button>
        <Button className={labelSelect === 5 ? classes.b6 : classes.b}>
          Nghiệp vụ vừa
        </Button>
      </div>
    </div>
  );
};

export default SelectionMode;
