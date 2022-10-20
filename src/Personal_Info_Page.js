import React from 'react';
import Header from './Components/Header';
import Common_Table from './Components/Common_Table';
import Details from './Components/Details';
import Footer from './Components/Footer';

function Personal_Info_Page()
{
    return(
        <>
            <Header/>
            {/* Navbar will also be here */}
            
            <Common_Table/>
            
            <Footer/>
        </>
    )
}
export default Personal_Info_Page;