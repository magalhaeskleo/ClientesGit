import React from 'react'

export default props => (
    <div className='col-md-10'>
        <input id={props.id} className='form-control'
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}></input>
    </div>
)
