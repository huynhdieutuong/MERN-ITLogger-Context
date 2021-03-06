import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import SearchBar from './components/layout/SearchBar';
import AddBtn from './components/layout/AddBtn';

import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';

import TechListModal from './components/techs/TechListModal';
import AddTechModal from './components/techs/AddTechModal';
import EditTechModal from './components/techs/EditTechModal';

import TechState from './contexts/tech/TechState';
import LogState from './contexts/log/LogState';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <LogState>
      <TechState>
        <Fragment>
          <SearchBar />
          <div className='container'>
            <Logs />
            <AddBtn />
          </div>

          {/* Modals */}
          <AddLogModal />
          <EditLogModal />
          <TechListModal />
          <AddTechModal />
          <EditTechModal />
        </Fragment>
      </TechState>
    </LogState>
  );
};

export default App;
