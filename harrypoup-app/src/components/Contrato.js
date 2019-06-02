import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ScrollDialog extends Component{

    state = {
        open: true,
        scroll: 'body'
    }

   handleClose = () =>  {
    this.setState({open:!this.state.open});
    setTimeout(() => {
        this.props.history.push("/");
    }, 300);
  }

  setItem = () =>  {
    localStorage.setItem('contrato', true);
    setTimeout(() => {
            this.props.history.push("/app");
        }, 300);
    }

    render(){
        return (
            <div>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="scroll-dialog-title"
            >
                <DialogTitle id="scroll-dialog-title">Termo de uso</DialogTitle>
                <DialogContent dividers={this.state.scroll}>
                <DialogContentText style={{fontSize: '15px'}}>
                    {[...new Array(50)]
                    .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Rejeitar
                </Button>
                <Button onClick={this.setItem} color="secondary">
                    Aceitar
                </Button>
                </DialogActions>
            </Dialog>
            </div>
        );
    }
}

export default ScrollDialog;