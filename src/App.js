import React from 'react';
import { Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';


function App() {
  return (
    <div className="App">
       <Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href = "/">Restorante Con Fusion</NavbarBrand>
          </div>
       </Navbar>
       <Menu />
    </div>
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>

  );
}

export default App;
