// Home
import React from 'react';
// import styles from './style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { homeTOC } from 'data/menu-items'
import { restaurantAppTOC } from 'data/menu-items'
// import FirstReactApp from './ReactTOC/FirstReactApp'
// import FirstReactComponent from './ReactTOC/FirstReactComponent'
import Footer from './Footer'
// import GetReadyInstallConfig from './ReactTOC/GetReadyInstallConfig'
import MenuItems from 'elements/MenuItems'
// import ModifyProjectStructure from './ReactTOC/ModifyProjectStructure'
// import PropTypes from './ReactTOC/PropTypes'
import RA01Introduction from './ReactTOC/RestaurantAppTOC/RA01Introduction'
import RA011GettingStarted from './ReactTOC/RestaurantAppTOC/RA011GettingStarted'
import RA02Header from './ReactTOC/RestaurantAppTOC/RA02Header'
import RA03Nav from './ReactTOC/RestaurantAppTOC/RA03Nav'
import RA04Gallery from './ReactTOC/RestaurantAppTOC/RA04Gallery'
// import ReactTOC from './ReactTOC'
import RA05Menu from './ReactTOC/RestaurantAppTOC/RA05Menu'
import RA06InteractiveNavigation from './ReactTOC/RestaurantAppTOC/RA06InteractiveNavigation'
import RA07MenuEdit from './ReactTOC/RestaurantAppTOC/RA07MenuEdit'
import RestaurantAppTOC from './ReactTOC/RestaurantAppTOC'
// import Styling from './ReactTOC/Styling'
// import * as ku from '../../lib/ke-utils'
import TopBar from './TopBar'
import CodeOfConduct from './CodeOfConduct'

const Home = () => (

  <Router>
    <div>
      <TopBar />

      <Switch>
        {/* <Route exact path='/react-toc' component={ReactTOC} />
          <Route path='/react-toc/getting-ready-install-config' component={GetReadyInstallConfig} />
          <Route path='/react-toc/first-react-app' component={FirstReactApp} />
          <Route path='/react-toc/moidfy-project-structure' component={ModifyProjectStructure} />
          <Route path='/react-toc/first-react-component' component={FirstReactComponent} />
          <Route path='/react-toc/modify-project-structure' component={ModifyProjectStructure} />
        <Route path='/react-toc/styling' component={Styling} /> */}

        <Route path = '/code-of-conduct' component={CodeOfConduct} />
        <Route path = '/react-toc/restaurant-app-toc/introduction' component={RA01Introduction} />

        <Route path = '/react-toc/restaurant-app-toc/getting-started' component={RA011GettingStarted} />
        <Route path = '/react-toc/restaurant-app-toc/header' component={RA02Header} />
        <Route path = '/react-toc/restaurant-app-toc/nav' component={RA03Nav} />
        <Route path = '/react-toc/restaurant-app-toc/gallery' component={RA04Gallery} />
        <Route path = '/react-toc/restaurant-app-toc/menu' component={RA05Menu} />
        <Route path = '/react-toc/restaurant-app-toc/interactive-navigation' component={RA06InteractiveNavigation} />
        <Route path = '/react-toc/restaurant-app-toc/menu-edit' component={RA07MenuEdit} />
        <Route path='/react-toc' component={RestaurantAppTOC} />
        <Route
          exact
          path='/'
          render={() => (
            <MenuItems src={restaurantAppTOC} />
          )}
        />


      </Switch>
      <Footer />
    </div>
  </Router>
    )

export default Home

// import Footer from './Footer'
// import L01WhatIsHTML from './html-css-js/L01WhatIsHTML'
// import L02EssentialHTMLElements from './html-css-js/L02EssentialHTMLElements'
// import L03FirstHTMLPage from './html-css-js/L03FirstHTMLPage'
// import L04WhatIsCSS from './html-css-js/L04WhatIsCSS'
// import L05CSSChallenge01 from './html-css-js/L05CSSChallenge01'
// import L06JSWhatIsIt from './html-css-js/L06JSWhatIsIt'
// import L07JSVariables from './html-css-js/L07JSVariables'
// import L08JSArrays from './html-css-js/L08JSArrays'
// import L09MozillaThimble from './html-css-js/L09MozillaThimble'
// import L10JSOperators from './html-css-js/L10JSOperators'
// import L11Functions from './html-css-js/L11Functions'
// import L12ControlFlow from './html-css-js/L12ControlFlow'
// import L13MovingImageIntro from './html-css-js/L13MovingImageIntro'
// import L14FunctionsTry2 from './html-css-js/L14FunctionsTry2'
// import Tables from './html-css-js/Tables'


// <Route path='/html/01-what-is-html' component={L01WhatIsHTML} />
// <Route path='/html/02-essential-html-elements' component={L02EssentialHTMLElements} />
// <Route path='/html/03-first-html-page' component={L03FirstHTMLPage} />
// <Route path='/04-css-what-is-it' component={L04WhatIsCSS} />
// <Route path='/05-css-challenge-1' component={L05CSSChallenge01} />
// <Route path='/tables' component={Tables} />
// <Route path='/06-javascript-what-is-it' component={L06JSWhatIsIt} />
// <Route path='/07-javascript-variables' component={L07JSVariables} />
// <Route path='/08-javascript-arrays' component={L08JSArrays} />
// <Route path='/09-mozilla-thimble' component={L09MozillaThimble} />
// <Route path='/10-javascript-operators' component={L10JSOperators} />
// <Route path='/11-javascript-functions' component={L11Functions} />
// <Route path='/12-conditional-control-flow-if' component={L12ControlFlow} />
// <Route path='/13-moving-image-intro' component={L13MovingImageIntro} />
// <Route path='/11-javascript-functions-try-2' component={L14FunctionsTry2} />
