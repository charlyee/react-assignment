import React from 'react';

interface IPersonProps {
}

interface IPersonState {
    userName: string,
    password: string,
    // age: number,
    // liked: boolean
}

export default class Person extends React.Component<IPersonProps, IPersonState> {
    constructor ( props: string | number ) {
        super( props );
        this.state = {
            userName: "John",
            password: "Smith",
            // age: 45
            // liked: false
        }
    }
}