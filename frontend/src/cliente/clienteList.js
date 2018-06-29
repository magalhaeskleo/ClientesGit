import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Table from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableCell from 'material-ui/Table/TableHeaderColumn';
import TableHead from 'material-ui/Table/TableHeader';
import TableRow from 'material-ui/Table/TableRow';
import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/image/edit';
import AvNotinterested from 'material-ui/svg-icons/av/not-interested';
import IconModal from '../templates/iconModal'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';




export default (props) => {

    const renderRows = () => {
        const list = props.list || []

        return list.map(itemL => (

            <TableRow key={itemL.id}>
                <TableCell>{itemL.id}</TableCell>
                <TableCell>{itemL.nome}</TableCell>
                <TableCell>{itemL.identificador}</TableCell>
                <TableCell>{itemL.razaoSocial}</TableCell>
                <TableCell>{itemL.tipo}</TableCell>
                <TableCell>{itemL.plano}</TableCell>

                <TableCell>
                    <IconButton onClick={() => props.handleEdit(itemL)}>
                        <ContentCreate />
                    </IconButton>

                    <IconModal
                        open={props.open}
                        handleClose={props.handleClose}
                        handleOpen={props.handleOpen}
                        item={itemL}/>
                    <IconButton >
                        <AvNotinterested />
                    </IconButton>

                </TableCell>
            </TableRow>
        )
        )
    }

    return (
        <div id='listClientes'>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Identificador</TableCell>
                            <TableCell>Razão Social</TableCell>
                            <TableCell>Tipo</TableCell>
                            <TableCell>Plano</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderRows()}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}
