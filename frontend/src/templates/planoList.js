import React from 'react'

export default props => {

    return (
            <select className="form-control h-50"
                id='selectPlano'
                disabled={props.disabled}
                value={props.selectPlano}
                onChange={props.handleChangePlano}>
                <option id='1' value='Faixa1' > Faixa1 </option>
                <option id='2' value='Faixa2' > Faixa2  </option>
                <option id='3' value='Faixa3' > Faixa3  </option>
                <option id='4' value='Faixa4' > Faixa4  </option>
            </select>
    )
}