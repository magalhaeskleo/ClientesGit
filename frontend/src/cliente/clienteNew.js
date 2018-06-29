import React, { Component } from 'react'
import PageHeader from '../templates/pageHeader'
import IconButton from '../templates/iconButton'
import ClienteForm from '../cliente/clienteForm'


export default class Cliente extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            id1: '',
            razaoSocial: '',
            telefone: '',
            site: '',
            selectTipo: 'Cliente',
            selectPlano: 'Faixa1',
            disabledTipo: 'desabled',
            disabledPlano: 'desabled',
        }

        this.handleReturn = this.handleReturn.bind(this);
        this.handleSave = this.handleSave.bind(this)
        this.handleChangeNome = this.handleChangeNome.bind(this)
        this.handleChangeID1 = this.handleChangeID1.bind(this)
        this.handleChangeRazaoSocial = this.handleChangeRazaoSocial.bind(this)
        this.handleChangeTelefone = this.handleChangeTelefone.bind(this)
        this.handleChangeSite = this.handleChangeSite.bind(this)
    }


    handleReturn() {
        window.location.href = '#/cliente'
    }

    handleChangeNome(event) {
        console.log("Passou")
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
                <PageHeader name='Criar Cliente' />

                <ClienteForm
                    nome={this.state.nome}
                    id1={this.state.id1}
                    razaoSocial={this.state.razaoSocial}
                    telefone={this.state.telefone}
                    site={this.state.site}
                    disabledTipo={this.state.disabledTipo}
                    disabledPlano={this.state.disabledPlano}

                    handleChangeNome={this.handleChangeNome}
                    handleChangeID1={this.handleChangeID1}
                    handleChangeRazaoSocial={this.handleChangeRazaoSocial}
                    handleChangeTelefone={this.handleChangeTelefone}
                    handleChangeSite={this.handleChangeSite}
                />

                <div className='col-md-2 pull-right'>
                    <IconButton icon='undo' onClick={this.handleReturn}></IconButton>
                    <IconButton icon='save'  onClick={this.hanlhandleSavedeSave}></IconButton>
                </div>
            </div>
        )
    }
}