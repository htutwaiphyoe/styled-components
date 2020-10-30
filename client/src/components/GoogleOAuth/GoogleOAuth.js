import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../actions";
class GoogleOAuth extends React.Component {
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
                    this.setAuthState(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(() =>
                        this.setAuthState(this.auth.isSignedIn.get())
                    );
                });
        });
    }
    setAuthState = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };
    onSignInClick = () => {
        this.auth.signIn();
    };
    onSignOutClick = () => {
        this.auth.signOut();
    };
    showAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <div className="ui google blue button">
                    <i className="google icon" />
                </div>
            );
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui google blue button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui google blue button" onClick={this.onSignInClick}>
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
const mapStateToProps = (state) => {
    console.log(state);
    return {
        isSignedIn: state.auth.isSignedIn,
    };
};
const mapDispatchToProps = {
    signIn: actionCreators.signIn,
    signOut: actionCreators.signOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(GoogleOAuth);
