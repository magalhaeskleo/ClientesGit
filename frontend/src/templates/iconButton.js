import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

/*
export default props => (
    <button
        className={'btn btn-' + props.style + ' pull-right'}
        onClick={props.onClick} >
        <v>{props.value}</v>
        <i className={'fa fa-' + props.icon}></i>
    </button>
    */

const FloatingActionButtonIcon = (props) => {
    const style = {
        marginRight: 5,
    };

    return (
        <div className='pull-right'>
            <v>{props.value}</v>
            <FloatingActionButton style={style} mini={props.mini} onClick={props.onClick} >
                <i className={'fa fa-' + props.icon}></i>
            </FloatingActionButton>
        </div>
    )
}

export default FloatingActionButtonIcon;