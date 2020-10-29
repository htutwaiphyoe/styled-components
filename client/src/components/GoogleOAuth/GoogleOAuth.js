import React from "react";

class GoogleOAuth extends React.Component {
    state = {
        isSignedIn: null,
    };
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId:
                        "530685762383-ksfnd1u0oaeb4mdjlpapq9k6lrr68dos.apps.googleusercontent.com",
                    scope: "email",
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setAuthState();
                    this.auth.isSignedIn.listen(this.setAuthState);
                });
        });
    }
    setAuthState = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
        });
    };

    signInHandler = () => {
        const auth = this.auth.signIn();
        console.log(auth);
    };

    signOutHandler = () => {
        const auth = this.auth.signOut();
        console.log(auth);
    };
    showAuthButton() {
        if (this.state.isSignedIn === null) {
            return <i className="google icon" />;
        } else if (this.state.isSignedIn) {
            return (
                <button className="ui button blue google" onClick={this.signOutHandler}>
                    <i className="google icon white" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui blue google button" onClick={this.signInHandler}>
                    <i className="google icon white" />
                    Sign In with Google
                </button>
            );
        }
    }
    render() {
        return <div>{this.showAuthButton()}</div>;
    }
}

export default GoogleOAuth;
