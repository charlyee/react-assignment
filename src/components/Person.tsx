import React from 'react';

interface IPersonProps {
}

interface IPersonState {
    userName: string,
    userPassword: string,
    liked: boolean
}

export default class Person extends React.Component<IPersonProps, IPersonState> {
    constructor ( props: string ) {
        super( props );
        this.state = {
            userName: "",
            userPassword: "",
            liked: false
        }
    }
    updatePerson = ( event: any ) => {
        event.preventDefault();

        let userNameString: string,
            userPasswordString: string;

        const userName: HTMLInputElement | null = document.querySelector( '[name="user-name"]' );
        const userPassword: HTMLInputElement | null = document.querySelector( '[name="user-password"]' );

        if ( userName === null )
            userNameString = '';
        else
            userNameString = userName.value;

        if ( userPassword === null )
            userPasswordString = '';
        else
            userPasswordString = userPassword.value;

        this.setState( {
            userName: userNameString,
            userPassword: userPasswordString,
            liked: this.state.liked
        } );
    }
    toggleLike = () => {
        this.setState( {
            userName: this.state.userName,
            userPassword: this.state.userPassword,
            liked: !this.state.liked // Switch boolean to the opposite (!)
        } );
    }
    liked = () => {
        return (
            <div>
                <h2>{this.state.userName} {this.state.userPassword}</h2>
                {/* <p>Welcome...</p> */}
                <form onSubmit={this.updatePerson}>
                    <h3>My Webform</h3>
                    <label htmlFor="first-name">User Name: </label>
                    <input type="text" name="user-name" placeholder={this.state.userName} />
                    <label htmlFor="last-name"> Password: </label>
                    <input type="text" name="user-password" placeholder={this.state.userPassword} />
                    {/* <input type="submit" value="Apply Updates" /> */}
                </form>
                <button onClick={this.toggleLike}>
                    Login
                </button>
            </div>
        );
    }
    unLiked = () => {
        return (
            <div>
                <h2>{this.state.userName} {this.state.userPassword}</h2>
                {/* <p>They are {this.state.age} years old.</p> */}
                <form onSubmit={this.updatePerson}>
                    <h3>My Webform</h3>
                    <label htmlFor="first-name">User Name: </label>
                    <input type="text" name="user-name" placeholder={this.state.userName} />
                    <label htmlFor="last-name"> Password: </label>
                    <input type="text" name="user-password" placeholder={this.state.userPassword} />
                    {/* <input type="submit" value="Apply Updates" /> */}
                </form>
                <button onClick={this.toggleLike}>
                    Log out
                </button>
            </div>
        );
    }
    render () {
        if ( this.state.liked )
            return this.liked();
        else
            return this.unLiked();
    }
}