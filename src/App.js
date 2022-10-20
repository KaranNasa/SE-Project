import './App.css';
import { Route } from 'react-router-dom';
import person_img from './Photos/person_image.jpg';
import User_details from './Components/User_details';
import Table1 from './Components/Table1';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Personal from './Components/Personal_Info_Page';

const user_name = "Karan Nasa";

function App() {
  return (
    <>
       <div className="flex1">
        <Header/>
      </div>
      <Navbar/>

      <Route path = "/home">

        <div className="flex2">
          <img className='img_prop' src={person_img} alt="Image" />
          <div className="details">
            <User_details />
          </div>
          <div className='table-1'>
            <Table1 />
          </div>

        </div>

        <div className="flex3">
          <div className="hostel_detail">
            <h5>Hostel Allocation Details</h5>
            <p>Hostel Allocated is : { }</p>
          </div>
          <div className="fee_details">
            <h5>Fee Details</h5>
            <p>Fee Status: </p>
          </div>
        </div>
      </Route>
       
    
    <Route path = "/personal">
      <Personal/>
    </Route>
    <Footer />

    </>
  );
}

export default App;