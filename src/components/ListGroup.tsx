import React from "react";
import {Fragment} from "react";
function ListGroup()
{
    const items = [
        'New York',
        'San Fransisco',
        'Tokyo',
        'London',
        'Paris',
    ];

    return ( 
        <>
        <ul className="list-group">
            {items.map((item) => (
                <li key={item}>{item}</li>
                ))}
        </ul>
        </>
    );
}

export default ListGroup;