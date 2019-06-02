import React, {Component, useReducer} from 'react';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/app';
import { connect } from 'react-redux';
import {api} from '../services/api';
import logo from '../assets/img/logo.jpeg';

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
        if(!usuario || !senha){
            this.setState({error: "Preencha os campos com seu login e senha para logar"});
        }else{
            try{
                let formData = new FormData();
                formData.append('usuario', usuario);
                formData.append('senha', senha);
                // const response = await api.post("/login", formData);
                // console.log(response);
                let term = localStorage.getItem('contrato');
                setTimeout(()=>{
                    if(term){
                        this.props.history.push("/app");
                    }else{
                        this.props.history.push("/termo");
                    }
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
                <div className="container" style={{marginTop: 50}}>
                    <div className="row justify-content-md-center">
                        <div className="col col-md-4 col-sm-12 col-xs-12">
                            <form className="form-signin">
                                <div className="text-center mb-4">
                                    <img className="mb-4" src={logo} alt="logo" width="72" height="72"/>
                                    <h1 className="h3 mb-3 font-weight-normal">Harry Poup</h1>
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
                                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>Acessar</button>
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