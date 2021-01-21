import './index.scss'
import React, { useState, useEffect } from 'react'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import ConfirmWave from './components/Cart/ConfirmWave'
import PaymentMethodActivityPage from '../src/pages/cart/PaymentMethodActivityPage'
import PaymentMethodClassPage from '../src/pages/cart/PaymentMethodClassPage'
import QuerenPage from '../src/pages/cart/QuerenPage'
import QuerenClassPage from '../src/pages/cart/QuerenClassPage'
import NextTimePage from '../src/pages/cart/NextTimePage'
import LastConfirmationPage1 from '../src/pages/cart/LastConfirmationPage1'
import FukuanClassPage from '../src/pages/cart/FukuanClassPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import MainContent from './components/MainContent'
import Cart2 from './pages/Cart2'

function App() {
  return (
    <Router>
      <MyNavbar />

      <>
        <MainContent>
          <Switch>
            <Route path="/" exact>
              <Cart2 />
            </Route>
            <Route path="/PaymentMethodActivityPage">
              <PaymentMethodActivityPage />
            </Route>
            <Route path="/PaymentMethodClassPage">
              <PaymentMethodClassPage />
            </Route>
            <Route path="/QuerenPage">
              <QuerenPage />
            </Route>
            <Route path="/QuerenClassPage">
              <QuerenClassPage />
            </Route>
            <Route path="/LastConfirmationPage1">
              <LastConfirmationPage1 />
            </Route>
            <Route path="/FukuanClassPage">
              <FukuanClassPage />
            </Route>
            <Route path="/NextTimePage">
              <NextTimePage />
            </Route>
          </Switch>
        </MainContent>
      </>
      <ConfirmWave />
      <Footer />
    </Router>
  )
}

export default App
