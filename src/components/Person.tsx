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
                    <input type="text" name="user-name" value={this.state.userName} />
                    <h3> </h3>
                    <label htmlFor="user-password">Password</label>
                    <input type="text" name="user-password" value={this.state.userPassword} />
                </form>
            </div>
        )
    }
}