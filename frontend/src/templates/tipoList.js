import React from 'react'

export default props => {

    return (
            <select className="form-control h-50"
                id='selectTipo'             
                disabled={props.disabled}
                value={props.selectTipo}
                onChange={props.handleChangeTipo}>
                <option id='1' value='Cliente' > Cliente </option>
                <option id='2' value='Interno' > Interno </option>
                <option id='3' value='Cortesia' > Cortesia </option>
                <option id='4' value='Permuta' > Permuta </option>
            </select>
    )
}