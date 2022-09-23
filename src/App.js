import './App.css';
import Form from './components/Form';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';
// import Register from './components/Register';
// import Login from './components/Login';
import Applicationpdf from './components/Applicationpdf';
import Layout from './layouts/index';
import Candidate from './components/Candidate/Candidate';
import Admin from './components/Admin/Admin';
import Error from './components/Error';
import ForgetPassword from './components/ForgetPassword';
import AdminLogin  from './components/Admin/Login';
import Contactquery from './components/Contactquery';
import { useCookies } from 'react-cookie'
import ViewCandidatesDetails from './components/ViewCandidatesDetails';
import Gallery from './components/Gallery';
import { useSelector } from 'react-redux';
import Careeratairport from './components/pages/Careeratairport'
import Careerjob from './components/pages/Careerjobs'
import Insidetheaviation from './components/pages/Insidetheaviation'
import Selectionprocess from './components/pages/Selectionprocess'
import Visionandvalue from './components/pages/Visionandvalue'
import Whyaviation from './components/pages/Whyaviation'

//other pages
import About from './components/pages/About';
import AirportDetails from './components/pages/AirportDetails';
import AptitudeSkill from './components/pages/AptitudeSkill'; 
import AviationAftertwelfth from './components/pages/AviationAftertwelfth';
import BecameCabinCrew from './components/pages/BecameCabinCrew';
import BecameGroundStaff from './components/pages/BecomeGroundStaff';
import Cafeteria from './components/pages/Cafeteria';
import EligibilityExamForAviation from './components/pages/EligibilityExamForAviation';
import GroundStaff from './components/pages/GroundStaff';
import Help from './components/pages/Help';
import HouseKeeping from './components/pages/HouseKeeping';
import Portal from './components/pages/Portal';
import PrivacyRefund from './components/pages/PrivacyRefund';
import ProfessionalTraining from './components/pages/ProfessionalTraining';
import TrainingOverview from './components/pages/TrainingOverview';
import WheelChairStaff from './components/pages/WheelChairStaff';

 


 function App() {
 
   let user;

  // const [user, setUser] = useState(false);

  const extusr = useSelector((state)=> state.user.user)
  const [cookies] = useCookies();

  //const userLoggedin =  localStorage.getItem('userinfo')
  //const userLoggedin =  JSON.parse(localStorage.getItem("userinfo"))

  if(extusr){
   // console.log(userLoggedin)
    // setUser(true)
    user = true
  }else if(cookies.email && cookies.password){
      user = true
  }else{
    // setUser(false)
    user = false
  }


  //console.log('appjs file user data: ',userLoggedin );
  console.log('appjs file store data: ',extusr );

  return (

    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/applynow' element={user ?  <Form/> :  <Home/> } />
      <Route path='/applicationpdf/:id' element={ <Applicationpdf/> }/>
      <Route path='/candidatedashboard' element={ <Candidate/> } />
      <Route path='/admin' element={ <Admin/>} />
      <Route path='/gallery' element={ <Gallery/>} />
      <Route path='/admin/login' element={ <AdminLogin/>} />
      {/* <Route path='/register' element={user ? "Already Registered" : <Register/>} />
      <Route path='/login' element={ user ? "Already Logged In" :<Login/>} /> */}
      <Route path='/forget' element = { user ? "Already Logged In" : <ForgetPassword/>}  />
      <Route path='/contactus' element = {<Contactquery/>}  />
      <Route path='/viewcandidatesdetails/:id' element = {<ViewCandidatesDetails/>}  />
 
      <Route path='/careeratairport' element={<Careeratairport/>}/>
      <Route path='/careerjob' element={<Careerjob/>} />
      <Route path='/insidetheaviation' element={<Insidetheaviation/>} />
      <Route path='/selectionprocess' element={<Selectionprocess/>} />
      <Route path='/visionandvalue' element={<Visionandvalue/>}/>
      <Route path='/whyaviation' element={<Whyaviation/>} />

      <Route path='/about' element={<About/>}/>
      <Route path='/airportdetails' element={<AirportDetails/>}/>
      <Route path='/aptitudeskills' element={<AptitudeSkill/>}/>
      <Route path='/aviationaftertwelfth' element={<AviationAftertwelfth/>}/>
      <Route path='/becamecabincrew' element={<BecameCabinCrew/>}/>
      <Route path='/becamegroundstaff' element={<BecameGroundStaff/>}/>
      <Route path='/cafeteria' element={<Cafeteria/>}/>
      <Route path='/eligibilityexamforaviation' element={<EligibilityExamForAviation/>}/>
      <Route path='/groundstaff' element={<GroundStaff/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/housekeeping' element={<HouseKeeping/>}/>
      <Route path='/portal' element={<Portal/>}/>
      <Route path='/privacyrefund' element={<PrivacyRefund/>}/>
      <Route path='/professionaltraining' element={<ProfessionalTraining/>}/>
      <Route path='/trainingoverview' element={<TrainingOverview/>}/>
      <Route path='/wheelchairstaff' element={<WheelChairStaff/>}/>

      <Route path='*' element={ <Error/>} />
    </Routes>
    </Layout>
    </BrowserRouter>

  )
}

export default App;
