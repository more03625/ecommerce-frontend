import React from 'react'
import Stats from '../Dashboard/Stats';
import Sidebar from '../../layouts/Sidebar';
const Content = () => {
   return (
      <>
         <div className="container mb-5 pb-3">
            <div className="bg-light shadow-lg rounded-3 overflow-hidden">
               <div className="row">
                  <Sidebar />
                  <Stats />
               </div>
            </div>
         </div>
      </>
   )
}
export default Content