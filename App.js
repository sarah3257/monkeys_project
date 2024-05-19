import './App.css';
import Events from './components/events';
import Message from './components/message';
import Test from './components/test';
import Counter from './components/counter';
import AppInput from './components/appInput';
import ParentsComp from './components/parentsComp';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import AppExchange from './components/appExchange';
import AppParents from './components/less13/appParents';
import AppWeather from './components/weather/appWeather';
import IconsTest from './components/less18/iconsTest';
import LessJsx from './components/less19/lessJsx';
import AppRouts from './components/less20/appRouts';
import ScrollPage from './components/less21/scrollPage';
import ObjTest from './components/less22/objTest';
import Form from './components/less23/form';
import AppRoutes2 from './components/less24/appRoutes2';
import Less25 from './components/less25/less25';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Gallery from './components/less33/gallery'
function App() {
  return (
    <div className="container">
     <h1>sarah Rom</h1> 
     {/* less33 */}
     
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
     {/* leess30 */}    
  {/* <BrowserRouter>
  <AppWeather/>
  </BrowserRouter>    */}
     {/* less25
   <Less25></Less25> */}

     {/* less24 */}
     {/* <AppRoutes2/> */}

     {/* less23 */}
     {/* <Form></Form> */}

     {/* less22 */}
     {/* <ObjTest></ObjTest> */}

     {/* less21 */}
     {/* <ScrollPage></ScrollPage> */}


     {/* less20 */}

     {/* <AppRouts></AppRouts> */}

     {/* less19 */}
     {/* <LessJsx></LessJsx> */}

     {/* less18 */}
     {/* <IconsTest></IconsTest> */}


     {/* weather */}  
     {/* <AppWeather></AppWeather> */}



     {/* less13 */}
     {/* <AppParents>   
     </AppParents> */}
     {/* lees12 */}
     {/* <AppExchange></AppExchange> */}

     {/* less11
     <ParentsComp>
      <Comp1/>
     </ParentsComp>
     <ParentsComp>
      <Comp2/>
     </ParentsComp> */}



     {/* <AppInput/> */}
     {/* <Counter/> */}
     {/* <Message txt="sarah rom"/ >
      <Events/>
     <Test/> */}
    </div>
  );
}

export default App;
