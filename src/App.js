import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Search from './components/Search';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {

    if (window.scrollY > 100) {
      console.log("should lock");
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 100) {
      console.log("not locked" );
      this.setState({
        scrollingLock: false
      });
    }

  }
  render() {
    return (
      <BrowserRouter>
            <div className="App">
              <div style={{ width: "100%", zIndex:"2", position: this.state.scrollingLock ? "fixed" : "relative"}}>
                <Search />
                {/* <Navbar/> */}
              </div>
              {/* <div> */}
                {/* <Navbar/> */}
              {/* </div> */}
              <Switch>
                <Route exact path="/" component={Home}/>
              </Switch>
            </div>
       </BrowserRouter>
    ); 
  }
}

export default App;
