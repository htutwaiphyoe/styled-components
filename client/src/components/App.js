import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StreamShow from "./streams/StreamShow/StreamShow";
import StreamList from "./streams/StreamList/StreamList";
import StreamEdit from "./streams/StreamEdit/StreamEdit";
import StreamCreate from "./streams/StreamCreate/StreamCreate";
import StreamDelete from "./streams/StreamDelete/StreamDelete";
import Header from "./Header/Header";

const App = (props) => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;

// 530685762383-ksfnd1u0oaeb4mdjlpapq9k6lrr68dos.apps.googleusercontent.com
