import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';


export default props => {

    const actions = [
        <FlatButton
            label="Retornar"
            primary={true}
            onClick={props.handleClose}
        />
    ];

    return (
        <IconButton onClick={props.handleOpen} >
            <ActionVisibility />
            <Dialog
                title="Detalhe do Cliente"
                actions={actions}
                modal={false}
                open={props.open}
                onRequestClose={props.handleClose}>
                <div>
                    <div><b>ID:</b> {props.item.id}</div>
                    <div><b>Nome:</b>{props.item.nome}</div>
                    <div><b>Identificador: </b>{props.item.identificador}</div>
                    <div><b>Razão Social: </b>{props.item.razaoSocial}</div>
                    <div><b>Tipo: </b> {props.item.tipo}</div>
                    <div><b>Plano: </b>{props.item.plano}</div>
                </div>
            </Dialog>
        </IconButton>
    );
}
