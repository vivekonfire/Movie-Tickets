import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Movies from "./Components/Pages/Movies";
import Movie from "./Components/Pages/Movie";
import Book from "./Components/Pages/Book";

const App = () => {
    return (
        <div className="bg-blue-200">
            <Router>
                <Switch>
                    <Route exact path="/" component={Movies} />
                    <Route exact path="/:id" component={Movie} />
                    <Route exact path="/book/:id" component={Book} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
