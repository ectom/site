import React from 'react';
import { makeStyles } from "@material-ui/core";


export default function Spacer( props ) {
  const classes = makeStyles( {
    space: {
      height: props.space + 'em',
    },
  } )();
  return (
    <>
      <div className={classes.space}/>
    </>
  );
}