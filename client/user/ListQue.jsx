/* COMP229 Group 5 
Abdoullahi Isse
Anne Mistry
Nathaniel Needham
Noah Mauro
Praveen Tripathi*/


import { useState } from 'react'
import { useEffect } from 'react';
import './main.css'
import ListQ from './listq.js'
// import answ from '../../client/user/Answers.jsx'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

let activeSurveys = ListQ();

function ListQue() {

  return (
    <div className='ActiveSurveys'>
        {
        activeSurveys.map((survey, index) => { 
        
//          if (survey.status == "active"){
          if (survey.name){
            console.log(survey)
            let link =  "/client/user/Answers.jsx?surveyId=" + survey._id;
            return ( //iterates over the json array and returns the form elements
            <div key={index} className=''>
            <h1>{survey.name}</h1>
            <a className='btn btn-primary btn-lg' href={link}>Answer this survey.</a>
            {/* */}
            <hr />
            </div>)
          }
        })
        }
    </div>
  );
}


export default ListQue
