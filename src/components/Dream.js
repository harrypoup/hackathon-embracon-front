import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AvatarDream from './Avatar';
import Status from './Status';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    flexGrow: 1
  },
}));

function Dream() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.root}>
        <AvatarDream/>
        <Status/>
      </Paper>
    </div>
  );
}

export default Dream;