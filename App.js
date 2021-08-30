
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import signup from './Signup';
import Signup from './Signup';
import About from './About';
import Footer from './footer';
import Sentiment from 'sentiment';
import getTheScore from './Sentiment';



function App() {

  return (
      
       <Router>
    <div className="App">
    <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/create">
                <Create/>
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails/>
              </Route>
              <Route path="/signup">
                <Signup></Signup>
              </Route>

              <Route path="/about">
                <About/>
              </Route>

              <Route path='/sentiment'>
                <getTheScore/>
              </Route>

            </Switch>
            
            
             </div>
            
             </div>
       </Router>
       
        
          
  );


}

export default App;








