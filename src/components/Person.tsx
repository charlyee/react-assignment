import React from 'react';

interface IPersonProps {
}

interface IPersonState {
    userName: string,
    userPassword: string,
    // age: number,
    // liked: boolean
}

export default class Person extends React.Component<IPersonProps, IPersonState> {
    constructor ( props: string ) {
        super( props );
        this.state = {
            userName: "John",
            userPassword: "Smith",
            // age: 45
            // liked: false
        }
    }
    render () {
        return (
            <div>
                {/* <h2>{this.state.userName} {this.state.userPassword}</h2> */}
                <form>
                    <h2>Log-in Form</h2>
                    <label htmlFor="user-name">User Name</label>
                    <h3> </h3>
                    <label htmlFor="user-password">Password</label>
                </form>
            </div>
        )
    }
}