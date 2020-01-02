import React from 'react';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
  space: {
    height: '15em',
  },
});

export default function Spacer() {
  const classes = useStyles()
  return (
  <>
    <div className={classes.space}/>
  </>
  );
}