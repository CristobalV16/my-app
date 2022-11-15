import Explorador from "./Header";
import React from "react";



import { Paginas } from "./Paginas";


import { BrowserRouter as Router} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Explorador/>
        <Paginas/>
      </Router>
    </div>
  );
}

export default App;
