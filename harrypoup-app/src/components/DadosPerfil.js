import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

function DadosPerfil() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Júlio César de Oliveira Vaz',
    email: 'julio.oliveiravaz0@gmail.com',
    telefone: '11958138581',
    rendamensal: 'R$ 2.500,00',
    consorciodesc: 'Estou em busca de uma casa própria, é o meu sonho',
    tipoconsorcio: 'IMÓVEL',
    qtdparcela: '100'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container maxWidth="sm" style={{paddingTop: 50}}>
        <Typography variant="h5" gutterBottom>
            Dados Cadastrais
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
        <TextField
            id="standard-name"
            label="Nome Completo"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
            disabled
        />
        <TextField
            id="standard-email"
            label="E-mail"
            className={classes.textField}
            value={values.email}
            onChange={handleChange('email')}
            margin="normal"
            disabled
        />
        <TextField
            id="standard-telefone"
            label="Contato"
            className={classes.textField}
            value={values.telefone}
            onChange={handleChange('contato')}
            margin="normal"
            disabled
        />
        <Divider variant="middle"/>
        <Typography variant="h5" gutterBottom style={{paddingTop: 50, paddingBottom: 30}}>
            Informações Econômicas
        </Typography>
        <TextField
            id="standard-name"
            label="Renda Mensal"
            className={classes.textField}
            value={values.rendamensal}
            onChange={handleChange('rendamensal')}
            margin="normal"
            disabled
        />
        <Typography variant="h6" gutterBottom style={{paddingTop: 30, paddingBottom: 5}}>
            Gastos Mensais
        </Typography>
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Ensaios Fotográficos" secondary="R$250,00" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <WorkIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Trabalho" secondary="R$90,00" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <BeachAccessIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Viagens" secondary="R$150,00" />
            </ListItem>
        </List>
        <Typography variant="h6" gutterBottom style={{paddingTop: 30, paddingBottom: 5}}>
            Renda Mensal - Gastos = <strong>R$ 2.010,00</strong>
        </Typography>
        <Typography variant="h5" gutterBottom style={{paddingTop: 50, paddingBottom: 30}}>
            Consórcio
        </Typography>
        <TextField
            id="standard-consorciodesc"
            label="Descricao do consórcio"
            className={classes.textField}
            value={values.consorciodesc}
            onChange={handleChange('consorciodesc')}
            margin="normal"
            multiline
            rowsMax="8"
            disabled
        />
        <TextField
            id="standard-tipoconsorcio"
            label="Tipo de Consórcio"
            className={classes.textField}
            value={values.tipoconsorcio}
            onChange={handleChange('tipoconsorcio')}
            margin="normal"
            disabled
        />
        <TextField
            id="standard-qtdparcela"
            label="Quantidade de parcelas"
            className={classes.textField}
            value={values.qtdparcela}
            onChange={handleChange('qtdparcela')}
            margin="normal"
            disabled
            style={{paddingBottom: 100}}
        />
        </form>
    </Container>
  );
}

export default DadosPerfil;