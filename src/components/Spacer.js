import React from 'react';
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
  space: {
    height: '20%',
  },
});

export default function Spacer() {
  const classes = useStyles()
  return (
  <>
    <div classeName={classes.space}></div>
  </>
  );
}