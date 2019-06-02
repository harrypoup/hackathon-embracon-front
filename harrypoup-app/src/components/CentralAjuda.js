import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ButtonSearch from './ButtonSearch';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  border:{
      border: '1px solid #ccc'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <React.Fragment>
        <Container maxWidth="md">
        <Grid xs={12} md={12}>
            <Typography variant="h5" style={{paddingTop: 25, textAlign: 'center'}}>
                Central de ajuda
            </Typography>
        </Grid>
            <ButtonSearch/>
            <Divider/>
            <List
            component="nav"
            className={classes.root}
            >
            <ListItem button className={classes.border}>
                <ListItemText primary="Não consigo sair do app" />
            </ListItem>
            <ListItem className={classes.border} button>
                <ListItemText primary="Erro ao acessar vídeo aula" />
            </ListItem>
            <ListItem className={classes.border} button>
                <ListItemText primary="Quero adquirir mais consórcios" />
            </ListItem>
            <ListItem className={classes.border} button>
                <ListItemText primary="O que é o HarryPoup?" />
            </ListItem>
            <ListItem className={classes.border} button>
                <ListItemText primary="Como resgatar minha premiação" />
            </ListItem>
            </List>
        </Container>
    </React.Fragment>
  );
}

export default NestedList;