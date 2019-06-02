import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Person from '@material-ui/icons/Person';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Help from '@material-ui/icons/Help';
import ExitToApp from '@material-ui/icons/ExitToApp';


import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import Dream from './Dream';
import TimeLine from './TimeLine';
import AvatarWrapper from './AvatarWrapper';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

HideOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
    window: PropTypes.func,
  };

function Wrapper(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
    <AvatarWrapper/>
      <List>
        <ListItem button key={() => Math.random()}>
            <ListItemIcon><Person /></ListItemIcon>
            <ListItemText primary={'Perfil'} />
        </ListItem>
        <ListItem disabled>
            <ListItemIcon><AttachMoney /></ListItemIcon>
            <ListItemText primary={'Consórcio especia'} />
        </ListItem>
        </List>
      <Divider />
      <List>
        {['Central de ajuda', 'Sair'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <Help /> : <ExitToApp disabled/>}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <div>
        
        <div className="align-components_navbar">
            <HideOnScroll {...props}>
                <Button onClick={toggleDrawer('left', true)}
                style={{
                    height: '56px',
                    width: '100%',
                    color: 'white',
                    backgroundColor: '#3e51b5',
                    'z-index': '1101',
                    borderRadius: 0,
                    display: 'flex',
                    justifyContent:'flex-start',
                    fontSize: '27px'
                }}> &#9776; </Button>
            </HideOnScroll>
        </div>
        <Container maxWidth="sm">
            <Dream/>
            <TimeLine/>
        </Container>
        <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
        >
        {sideList('left')}
        </SwipeableDrawer>
    </div>
  );
}

export default Wrapper;