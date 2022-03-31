/**
 * @description imulate error boundary internal error
 */

import React, { useState } from 'react';

import ErrorBoundary from './error-boundary';

function ErrorTest2() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Chen',
            age: '19',
        },
        {
            id: 2,
            name: 'Michael',
            age: '33',
        },
    ]);
    return (
        <ErrorBoundary init= {() => {throw new Error('hahahha')}} >
            <h1>I am error test component</h1>
            {items.map((item) => (
                <div key={item.id}>
                    <h2>
                        {item.name}: {item.age}
                    </h2>
                </div>
            ))}
        </ErrorBoundary>
    );
}
export default ErrorTest2;
