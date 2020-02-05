import React from 'react';
import './App.css';

import AppNavbar from "./components/AppNavbar";
import InfiniteScrollBox from "./components/InfiniteScrollBox";

function App() {
  return (
    <div className="App">
      
      <AppNavbar />
      <div style={{marginTop: '100px'}}>
        <InfiniteScrollBox/>
      </div>
      
    </div>
  );
}

export default App;
