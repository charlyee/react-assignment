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
            liked: true
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
            console.log(userName);
        
        if ( userPassword === null )
            userPasswordString = '';
        else
            userPasswordString = userPassword.value;
            console.log(userPassword);

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
                    <h2>My Webform</h2>
                    <label htmlFor="username">User Name: </label>
                    <input type="text" name="user-name" defaultValue={this.state.userName} />
                    <label htmlFor="password"> Password: </label>
                    <input type="password" name="user-password" defaultValue={this.state.userPassword}  />
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
                    <h2>My Webform</h2>
                    <label htmlFor="username">User Name: </label>
                    <input type="text" name="user-name" defaultValue={this.state.userName}  />
                    <label htmlFor="username"> Password: </label>
                    <input type="password" name="user-password" defaultValue={this.state.userPassword}  />
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