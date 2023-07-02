import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;

// RUTA PARA VOLVER
// In <Project> @ /home/project/123	Resolved <a href>
// <Link to="abc">	/home/project/123/abc
// <Link to=".">	/home/project/123
// <Link to="..">	/home
// <Link to=".." relative="path">	/home/project
