import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'


function App() {
    return (
        <>
            <Router>
                <Header/>
                <main className='content content'>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/about' component={About}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        </>
    )
}

export default App
