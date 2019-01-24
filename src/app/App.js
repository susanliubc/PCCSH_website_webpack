import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import newlogo from '../components/images/newlogo.png';
import Home from '../components/Home';
import About from '../components/About';
import Program from '../components/Program';
import Event from '../components/Event';
import Volunteer from '../components/Volunteer';
import News from '../components/News';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './app.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <header>
                        <div className="title">
                            <img className="funded responsive-img center-block" src={newlogo} alt=""/>
                        </div>
                        <Navbar />
                    </header>
                    <div>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/program' component={Program} />
                            <Route path='/event' component={Event} />
                            <Route path='/volunteer' component={Volunteer} />
                            <Route path='/news' component={News} />
                            <Route path='/contact' component={Contact} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
