import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Start } from './pages/Start';
import { PdfList } from 'pages/PdfList';

export const App = () => {
  return (
    <Main>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Start />
          </Route>
          <Route path='/pdf'>
            <PdfList />
          </Route>
        </Switch>
      </BrowserRouter>
    </Main>
  );
};

const Main = styled.div`
  padding: 5% 10%;
  max-width: 1500px;
`;
