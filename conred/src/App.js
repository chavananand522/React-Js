import React from 'react';
import './App.css';
import ComponentC from './Components/ComponentC';

export const UserContext = React.createContext();
export const trainingContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Abc"}>
        <trainingContext.Provider value={"FSDJ"}>
          <ComponentC />
        </trainingContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;
