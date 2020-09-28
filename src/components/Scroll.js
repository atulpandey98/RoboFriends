import React from 'react';

const scroll = (props) => {
    const style = {
        overflowY: 'scroll',
        border: '1px solid black',
        height: '800px',
        padding: '10px'
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    );
};

export default scroll;