import React from 'react';
import Card from './Card'


const CardList = (props) => {
    // if(true) {
    //     throw new Error('NOOOOOOOO!');
    // }

    const cardsList = props.robots.map( (user, i) => {
        return <Card key = {i} id={user.id} name={user.name} email={user.email}/>
    });

    return (
        <div>
            {cardsList}            
        </div>        
    );
}

export default CardList;