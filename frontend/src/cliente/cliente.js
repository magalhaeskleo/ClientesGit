import React, { Component } from 'react'
import PageHeader from '../templates/pageHeader'
import ClienteList from '../cliente/clienteList'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const item1 = {
    id: 1,
    nome: 'Exact Sales Teste',
    identificador: 15493988000145,
    razaoSocial: 'Razao Exact Sales',
    tipo: 'Cliente',
    plano: 'Faixa4',
    dataCriacao: '19/12/2014 13:34:54',
    dataAtualizacao: '22/01/2018 16:09:18'
}


const item2 = {
    id: 2,
    nome: 'Exact teste 2',
    identificador: 15493988000145,
    razaoSocial: 'Razao teste 2',
    tipo: 'Morph',
    plano: 'Faixa6',
    dataCriacao: '19/12/2014 13:34:54',
    dataAtualizacao: '22/01/2018 16:09:18'
}

const styleLabel = {
    color: '#FFFFFF'
}

export default class Cliente extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [{ ...item1, id: 1 }, { ...item2, id: 2 }], open: false };

        this.handleEdit = this.handleEdit.bind(this)
    }

    handleAdd() {
        window.location.href = '#/clienteNew'
    }

    handleEdit() {
        this.setState(...this.state)
        window.location.href = '#/clienteEdit'
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <div>
                    <Card>
                        <div>
                            <span>Criar Cliente</span>
                        </div>
                        <div>
                            <span>Cliente > Criar</span>
                        </div>
                        <div >
                            <FlatButton
                                backgroundColor="#3D69A0"
                                hoverColor="#8BA5C6"
                                label={<font style={styleLabel}>Criar Cliente</font>}
                                onClick={this.handleAdd} >
                            </FlatButton>
                        </div>

                    </Card>
                </div>

                <ClienteList
                    open={this.state.open}
                    handleClose={this.handleClose}
                    handleOpen={this.handleOpen}
                    list={this.state.list}
                    handleEdit={this.handleEdit}
                />
            </div>
        )
    }
}