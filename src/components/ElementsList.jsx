import React, { useState } from 'react';
import styles from './ElementsList.module.css'
import { useEffect } from 'react';
import Element from './Element';
import PopUp from './PopUp';
function ElementsList() {

const [elementData,setElementData]=useState([]);
const [popupTrigger,setPopupTrigger]=useState(false);
const [popupData,setPopupData]=useState({});

const handleButtonClick=(element,color)=>{
   setPopupTrigger(true);
   setPopupData({
    popupData:element,
    color:color
   });
}
const handlePopUpClose=()=>{
  setPopupTrigger(false);
}

 useEffect(()=>{
    fetch('http://localhost:3000/elements')
    .then(response=>response.json())
    .then(res=>setElementData(res))
    .catch(err=>console.log(err));
 },[]);
  return (
    <>
    <div className={styles.ElementsListContainer}>
        {
          elementData.map(element=>{
            return <Element key={element.number} element={element}

            handleButtonClick={handleButtonClick}
          />
          })
        }
    </div>
    {
      popupTrigger&&<PopUp popupDataObj ={popupData} handlePopUpClose={handlePopUpClose} />
    }
   
    </>
  )
}

export default ElementsList;