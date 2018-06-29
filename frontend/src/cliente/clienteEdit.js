import React, { Component } from 'react'
import PageHeader from '../templates/pageHeader'
import IconButton from '../templates/iconButton'
import ClienteForm from '../cliente/clienteForm'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const styleLabel = {
    color: '#FFFFFF'
}

export default class ClienteEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: 'kleo',
            id1: '125465',
            razaoSocial: 'kleo razão',
            telefone: '32541212',
            site: 'www.ww.w',
            selectTipo: 'Cortezia',
            selectPlano: 'Faixa2',
            disabledTipo: '',
            disabledPlano: '',
            newStyle:20
        }

        this.handleReturn = this.handleReturn.bind(this);
        this.handleSave = this.handleSave.bind(this)
        this.handleChangeNome = this.handleChangeNome.bind(this)
        this.handleChangeID1 = this.handleChangeID1.bind(this)
        this.handleChangeRazaoSocial = this.handleChangeRazaoSocial.bind(this)
        this.handleChangeTelefone = this.handleChangeTelefone.bind(this)
        this.handleChangeSite = this.handleChangeSite.bind(this)
        this.handleChangeTipo = this.handleChangeTipo.bind(this)
        this.handleChangePlano = this.handleChangePlano.bind(this)
    }



    handleReturn() {
        window.location.href = '#/cliente'
    }

    handleChangeNome(event) {
        this.setState({ ...this.state, nome: event.target.value }, this.imprimirEstado)
    }

    handleChangeID1(event) {
        this.setState({ ...this.state, id1: event.target.value }, this.imprimirEstado)
    }

    handleChangeRazaoSocial(event) {
        this.setState({ ...this.state, razaoSocial: event.target.value }, this.imprimirEstado)
    }

    handleChangeTelefone(event) {
        this.setState({ ...this.state, telefone: event.target.value }, this.imprimirEstado)
    }

    handleChangeSite(event) {
        this.setState({ ...this.state, site: event.target.value }, this.imprimirEstado)
    }

    handleChangeTipo(event) {
        this.setState({ ...this.state, tipo: event.target.value }, this.imprimirEstado)
    }

    handleChangePlano(event) {
        this.setState({ ...this.state, plano: event.target.value }, this.imprimirEstado)
    }

    imprimirEstado() {
        console.log(this.state)
    }
    handleSave() {
        /*
         this.setState({
             ...this.state,
             nome: this.state.nome,
             id1: this.state.id1,
             razaoSocial: this.state.razaoSocial,
             descriptionTelefone: this.state.descriptionTelefone,
             descriptionSite:this.state.descriptionSite,
             selectTipo:this.state.selectTipo,
             selectPlano: this.state.selectPlano,
         })
 
         this.state = { list: [{ ...item, id: 3 }] };
         debugger
         window.location.href = '#/cliente?list'
         */
    }

    render() {
        return (

            <div>
                 <div className='card'>
                    <Card>
                        <CardHeader>
                            <div className='titulo'>
                                <span className='titulo'>Criar Cliente</span>
                            </div>
                            
                            <div className='botaoADireita'>
                            <FlatButton
                                    className='botaoADireita'
                                    backgroundColor="#3D69A0"
                                    hoverColor="#8BA5C6"
                                    label={<font style={styleLabel}>Salvar Edição</font>}
                                    onClick={this.handleAdd} >
                                </FlatButton>
                                <FlatButton
                                    backgroundColor="#3D69A0"
                                    hoverColor="#8BA5C6"
                                    label={<font style={styleLabel}>Retornar</font>}
                                    onClick={this.handleReturn} >
                                </FlatButton>
                            </div>
                            <div className='subTitulo'>
                                <span className='subtitulo'>Cliente > Criar</span>
                            </div>
                        </CardHeader>
                    </Card>
                </div>

                <ClienteForm
                    nome={this.state.nome}
                    id1={this.state.id1}
                    razaoSocial={this.state.razaoSocial}
                    telefone={this.state.telefone}
                    site={this.state.site}
                    selectTipo={this.state.selectTipo}
                    selectPlano={this.state.selectPlano}
                    disabledTipo={this.state.disabledTipo}
                    disabledPlano={this.state.disabledPlano}

                    handleChangeNome={this.handleChangeNome}
                    handleChangeID1={this.handleChangeID1}
                    handleChangeRazaoSocial={this.handleChangeRazaoSocial}
                    handleChangeTelefone={this.handleChangeTelefone}
                    handleChangeSite={this.handleChangeSite}
                    handleChangeTipo={this.handleChangeTipo}
                    handleChangePlano={this.handleChangePlano}
                />
            </div>
        )
    }
}