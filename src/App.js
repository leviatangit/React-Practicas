import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './CheckList/List.css';
import List from './CheckList/List';

class App extends React.Component {
  render(){
    return (<List />)
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <Hello 
//         title='Hola mundo desde props' />

//         <Text
//         edad="1"
//         nombre={'Gabriel'}
//         apellido={'Crespo'}
//         />

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
