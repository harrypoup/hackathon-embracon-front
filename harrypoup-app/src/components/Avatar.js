import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import casa from '../assets/img/casa.png';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

function AvatarDream() {
  const classes = useStyles();

  return (
    <Grid container>
        <Grid item xs={4} xl={2} md={2}>
            <Avatar alt="Remy Sharp" src={casa} className={classes.bigAvatar} />
        </Grid>
        <Grid item xs={8} xl={8} md={8}>
            <Typography variant="h5" component="h3">
            Sonho: Casa própria
            </Typography>
        </Grid>
    </Grid>
  );
}

export default AvatarDream;