import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
