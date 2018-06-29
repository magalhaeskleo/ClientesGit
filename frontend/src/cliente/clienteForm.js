import React from 'react'
import LabelIcon from '../templates/labelIcon'
import PlanoList from '../templates/planoList'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';


export default props => {


    return (
        <div id='formCliente'>
            <div>
                <TextField
                    id="nome"
                    floatingLabelText="Nome do cliente"
                    className="form"
                    value={props.nome}
                    onChange={props.handleChangeNome} />
            </div>

            <div>
                <TextField
                    id="ID1"
                    floatingLabelText="ID1"
                    className="form"
                    value={props.id1}
                    onChange={props.handleChangeID1} />
            </div>

            <div>
                <TextField
                    id="razaoSocial"
                    floatingLabelText="Razão Social"
                    className="form"
                    value={props.id1}
                    onChange={props.handleChangeRazaoSocial} />
            </div>

            <div>
                <TextField
                    id="telefone"
                    floatingLabelText="Telefone"
                    className="form"
                    value={props.telefone}
                    onChange={props.handleChangeTelefone} />
            </div>

            <div>
                <TextField
                    id="site"
                    floatingLabelText="Site"
                    className="form"
                    value={props.site}
                    onChange={props.handleChangeSite} />
            </div>
            <div id='selects' display='hidden'>
                <div>
                    <div>
                        <div>
                            <SelectField
                                floatingLabelText="Tipo">
                                <MenuItem value={1} primaryText="Cliente" />
                                <MenuItem value={2} primaryText="Interno" />
                                <MenuItem value={3} primaryText="Cortezia" />
                                <MenuItem value={4} primaryText="Permuta" />
                            </SelectField>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <SelectField
                            floatingLabelText="Plano">
                            <MenuItem value={1} primaryText="Faix1" />
                            <MenuItem value={2} primaryText="Faix2" />
                            <MenuItem value={3} primaryText="Faix3" />
                            <MenuItem value={4} primaryText="Faix4" />
                        </SelectField>

                        {/*<PlanoList
                            selectPlano={props.plano}
                            disabled={props.disabledPlano}
                            handleChangePlano={props.handleChangePlano} />
                        */}
                    </div>
                </div>
            </div>

        </div>
    )
}