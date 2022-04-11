import React from 'react';
import { useParams } from 'react-router-dom';

type userParams = {
    name: string;
}


export function User() {
    const {name} = useParams<userParams>();

    return (
        <div>
            <h3>{name}</h3>
        </div>
    )
}