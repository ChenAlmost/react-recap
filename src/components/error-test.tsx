import React, { useState } from 'react';

import ErrorBoundary from './error-boundary';

function ErrorTest() {
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
        <ErrorBoundary>
            <h1>I am error test component</h1>
            {items.map((item) => (
                <div key={item.id}>
                    <h2>
                        {item.name}: {item.age}: { new Error('hahah')}
                    </h2>
                </div>
            ))}
        </ErrorBoundary>
    );
}
export default ErrorTest;
