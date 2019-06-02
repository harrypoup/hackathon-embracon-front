import React, {Component, useReducer} from 'react';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/app';
import { connect } from 'react-redux';
import {api} from '../services/api';

class Login extends Component{
    state = {
        usuario: '',
        senha: '',
        error: ''
    }

    // responseProfile = usuario => {
    //     this.props.usuarioApp(usuario);
    // }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {usuario,senha} = this.state;
        console.log(usuario,senha);
        if(!usuario || !senha){
            this.setState({error: "Preencha os campos com seu login e senha para logar"});
        }else{
            try{
                var formData = new FormData();
                formData.append('usuario', usuario);
                formData.append('senha', senha);
                // const response = await api.post("/login", formData);
                // console.log(response);
                setTimeout(()=>{
                    this.props.history.push("/app");
                }, 150);
                // if(!response){
                //     // this.responseProfile(response.data.data);
                //     setTimeout(()=>{
                //         this.props.history.push("/app");
                //     }, 150);
                // }else{
                //     this.setState({error: "Login e senha não localizados"});
                // }
            }catch(err){
                this.setState({error: "Houve um problema com o login, verifique suas credenciais"});
            }
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-4 col-sm-12 col-xs-12">
                            <form className="form-signin">
                                <div className="text-center mb-4">
                                    <img className="mb-4" src="assets/img/circle.png" alt="logo" width="72" height="72"/>
                                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="usuario">Usuário</label>
                                    <input type="text"
                                    onChange={e => this.setState({ usuario: e.target.value })}
                                    className="form-control"
                                    id="usuario"
                                    placeholder="CFP ou E-mail"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="senha">Senha</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    id="senha"
                                    placeholder="Senha"
                                    onChange={e => this.setState({ senha: e.target.value })}
                                    />
                                </div>
                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me"/> Remember me
                                    </label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>Sign in</button>
                                <p className="mt-5 mb-3 text-muted text-center"><a href="#">Registre-se</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch);


export default Login;