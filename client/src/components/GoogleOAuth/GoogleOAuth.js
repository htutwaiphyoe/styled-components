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
        this.auth.signIn();
    };
    signOutHandler = () => {
        this.auth.signOut();
    };
    showAuthButton() {
        if (this.state.isSignedIn === null) {
            return (
                <div className="ui google blue button">
                    <i className="google icon" />
                </div>
            );
        } else if (this.state.isSignedIn) {
            return (
                <button className="ui google blue button" onClick={this.signOutHandler}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui google blue button" onClick={this.signInHandler}>
                    <i className="google icon" />
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
