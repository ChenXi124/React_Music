
import React from "react";
import {useRoutes} from 'react-router-dom';
import router from "./router";
import 'antd/dist/reset.css';
import './App.scss';

function App() {
  return (
      <>
          {
              useRoutes(router)
          }
      </>
  );
}

export default App;
