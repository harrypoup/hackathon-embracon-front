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
                <DialogTitle id="scroll-dialog-title">Termo de Responsabilidade</DialogTitle>
                <DialogContent dividers={this.state.scroll}>
                <DialogContentText style={{fontSize: '15px'}}>
                    {`Leo sem litora erat leo curae sagittis pellentesque donec duis, inceptos dictum platea non suspendisse ac orci convallis, rhoncus ligula gravida faucibus lobortis varius quisque nisi. enim pharetra mauris adipiscing cras id maecenas metus fermentum, cras orci felis cursus netus dapibus. elementum diam fusce turpis eleifend orci sodales, ornare nam sociosqu habitasse at condimentum, consectetur duis tincidunt ac nec. sit vel dui condimentum metus diam sed nullam curae dui ad, quisque aliquam mauris fames convallis pretium lectus dapibus conubia curabitur, leo platea felis aptent porttitor fringilla varius quisque vivamus. auctor luctus habitant amet donec amet mauris litora volutpat, feugiat ut vitae per conubia aliquet nam placerat, sit eget ornare aliquam velit non senectus. 

Tempus dapibus viverra fames etiam volutpat ut aliquam nisi, habitant taciti etiam scelerisque ultrices massa varius metus porta, litora molestie id et consequat vulputate tellus mi, pretium tellus porta ipsum laoreet fringilla nibh. non feugiat interdum potenti libero donec habitasse fames quam lacus, himenaeos urna cursus luctus posuere metus egestas. tempus mattis proin inceptos libero felis morbi velit, nisl nisi elementum duis pulvinar torquent faucibus ipsum, augue purus nullam purus lacus sodales. a placerat nulla sagittis nam libero donec ut eget rhoncus neque enim, arcu suspendisse a curabitur volutpat nisi diam sollicitudin eu volutpat, donec vestibulum magna eros curae sagittis nisi primis etiam quisque. 

Fusce cubilia sapien ipsum pharetra erat potenti, aenean nulla tortor libero consectetur iaculis bibendum, conubia faucibus neque blandit cras. auctor turpis vulputate fames vestibulum curabitur vel cursus ac pretium conubia habitant, varius non egestas neque dolor fusce diam vulputate ultrices habitasse. adipiscing aenean lobortis nostra quam diam sem habitant diam, felis tempus vehicula convallis ut accumsan ultricies, sollicitudin laoreet a sit fringilla nec porta. lacus ipsum at senectus dictumst enim sapien platea pulvinar, quam scelerisque duis hendrerit nostra lorem donec ultricies, fermentum senectus curae inceptos habitant proin tincidunt. etiam ipsum vestibulum integer proin ac pharetra vulputate habitasse tincidunt, faucibus a tincidunt primis a sagittis pellentesque donec, hac lacus orci conubia congue dolor tempor facilisis. 

Ligula habitant ipsum aliquam varius ad felis hac sociosqu pulvinar aenean laoreet lorem et, erat laoreet neque phasellus senectus dictumst orci odio quisque sollicitudin aliquam. etiam consequat mollis vehicula aliquet at cursus velit, convallis rutrum commodo eget urna senectus, ultricies et leo maecenas venenatis facilisis. quis lorem turpis mi risus nisi cursus sem, praesent vestibulum laoreet cras quisque placerat imperdiet, venenatis imperdiet nostra elementum odio mollis. porta leo class nisi ipsum est placerat faucibus, congue mattis lacinia est mauris tincidunt auctor, himenaeos metus fames curabitur egestas magna. netus congue ad nullam eu mollis aenean senectus massa blandit inceptos sed, imperdiet nunc dictumst vivamus id scelerisque aliquet interdum aenean orci, enim porta eros netus posuere ultrices consequat curabitur risus mi. 

Conubia adipiscing rutrum tortor erat pharetra netus ante sodales euismod, aptent conubia ultricies bibendum libero torquent id metus class, per rutrum porttitor conubia posuere per libero ultricies. adipiscing class ac semper habitasse felis tempor tellus eu donec commodo varius, torquent blandit at himenaeos velit quisque condimentum turpis cras iaculis. sagittis arcu neque tempus sem nec pretium scelerisque cras arcu mollis suspendisse, blandit volutpat sapien fusce ante primis curabitur pellentesque nam. est viverra eleifend imperdiet taciti vivamus aenean elementum platea scelerisque rhoncus ipsum feugiat, ornare pharetra ligula gravida interdum tellus porta nostra varius primis aliquam. 

Curae aliquet massa pretium sociosqu hac condimentum pretium mauris enim volutpat, neque etiam ligula lectus eget cras at habitant aptent, luctus porta etiam pharetra ante nisi taciti venenatis posuere. litora senectus velit accumsan aenean porta sem malesuada, vitae elit aptent feugiat eget viverra per tempus, in convallis mattis conubia tellus vivamus. maecenas rhoncus arcu odio laoreet torquent viverra integer orci, fusce eget ullamcorper malesuada potenti faucibus. massa senectus quam potenti class etiam scelerisque et malesuada porttitor tempus, donec a est pharetra eleifend tristique vitae leo magna, senectus sollicitudin platea consequat amet viverra tempus massa fames. 

Nisi habitant nam dolor odio molestie tempus interdum lorem, feugiat est ultricies ut aliquet morbi risus odio nullam, eget habitasse velit netus iaculis fringilla leo. suspendisse eget nostra cras sodales scelerisque cubilia class malesuada, rutrum ultricies semper fames euismod curabitur nostra, varius justo hac cras vestibulum aliquet aptent. magna eget felis cursus non praesent integer maecenas porta hac metus pretium, donec taciti commodo gravida adipiscing himenaeos vivamus etiam ante sociosqu, pellentesque sociosqu adipiscing nisl lectus aptent auctor arcu mattis porttitor. quis nec rhoncus taciti diam aliquam vitae gravida id, pulvinar gravida eros mauris amet duis hendrerit et, platea interdum orci eu dui mattis lacinia. 

Torquent aliquam pulvinar integer potenti vulputate volutpat egestas volutpat, curabitur sodales ultrices porttitor praesent massa eget, mi arcu urna orci condimentum tempor viverra. ullamcorper est cras aenean per, quisque nisi nulla at, nunc conubia neque. praesent quis conubia tempor pretium ad quis tristique ipsum, dictumst senectus iaculis malesuada netus class netus, eros ante rhoncus auctor nulla justo neque. et arcu curabitur quam congue interdum lacinia curabitur ad consectetur convallis, quis nisi semper sociosqu integer ad curabitur mi. semper potenti suscipit erat dolor fringilla mattis torquent cras sociosqu aliquam, praesent litora orci curabitur molestie aliquam luctus massa nunc vitae semper, dolor rhoncus lobortis tellus dapibus augue tempor rutrum dapibus. 

Luctus condimentum eleifend convallis platea felis congue venenatis suspendisse nam, posuere senectus blandit diam vivamus cursus ut molestie viverra, malesuada senectus pellentesque conubia vestibulum faucibus nulla egestas. imperdiet sagittis vivamus vitae curabitur ac, lectus posuere donec purus morbi, mauris libero sed scelerisque. vehicula libero senectus interdum bibendum odio curabitur, orci litora nec tempor blandit, ligula malesuada fames praesent lacus. lacinia auctor ad viverra bibendum eget cursus morbi, platea egestas vestibulum consectetur pharetra magna velit, elit enim elit commodo gravida orci. curabitur mi ante conubia fringilla ullamcorper, justo curabitur arcu vulputate aptent, pulvinar vivamus pulvinar lorem. 

Aenean tempor lectus sed porta pretium faucibus curabitur sociosqu porttitor, vel suspendisse sem praesent sodales pellentesque velit accumsan, maecenas et pharetra faucibus cursus gravida at fames. senectus nisl ullamcorper integer in facilisis donec ut tempus, fringilla aenean in nulla morbi eu duis, massa odio in potenti conubia vestibulum elit. at commodo lectus mi, leo.`}
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