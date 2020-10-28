import { BrowserRouter, Route, Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            HOME <Link to="/contact">GO TO CONTACT</Link>
        </div>
    );
};
const Contact = () => {
    return (
        <div>
            Contact
            <Link to="/">GO TO HOME</Link>
        </div>
    );
};
const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/contact" exact component={Contact} />
            </div>
        </BrowserRouter>
    );
};

export default App;
