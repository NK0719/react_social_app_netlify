import About from './About';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import { Route, Routes} from 'react-router-dom';
import EditPost from './EditPost';
import { DataProvider } from './context/DataContext';

function App() {

/*  Server install
 //npx json-server -p 3500 -w data/db.json */
  
  return (
    <div className="App">

      <DataProvider>

        <Header title={"Insta Social Media"} />
        <Nav />
        <Routes>
          <Route path='/'element={<Home />} />
          <Route path='post'>
            <Route index element={<NewPost />} />
            <Route path=':id' element={<PostPage />}/>
          </Route>
          <Route path='/edit/:id' element={<EditPost />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Routes>
        <Footer />

      </DataProvider>
    </div>

  );
}

export default App;
