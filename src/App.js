import './styles/App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Repos from './components/Repos';
import axios from 'axios';
import Home from './components/Home';
import About from './components/about';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import SharedLayout from './components/sharedLayout';
import { Route,Routes } from 'react-router-dom';
import { ErrorPage } from './components/Error';
import ErrorBoundary from './components/ErrorBoundary';
import SingleRepo from './components/SingleRepo';
// import { Signup } from './components/SignUp';
// import { AuthContextProvider } from './context/context';
// import { ErrorPage } from './components/Error';

 
function App() {
  const [results, setResults] = useState([]);
  const [loading,setloading]=useState (false)
  const [user]=useState("kelly729")
  

  useEffect(() => {
    const fetchData = () => {
      setloading(true)
        axios.get(`https://api.github.com/users/${user}/repos`).then((response) => {
          const resp = response.data;
          setResults(resp);
          console.log(results.length);
        });
      
      }
    setTimeout(()=>{
      setloading(false)
    },1000)
    
    fetchData();
  
  }, []);
  
  return (
     <>
     <ErrorBoundary>
      {loading?<Loading/>:<SharedLayout>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/repos' element={<Repos results={results}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/error" element={<ErrorPage/>}></Route>

      
      <Route path='*' element={<h4>page not found</h4>}/>
      <Route path='/srepo/:id' element={<SingleRepo results={results}/>}></Route>

       </Routes>
     </SharedLayout>
     
       }
       </ErrorBoundary>
     </>
   
  );
      }

      export default App