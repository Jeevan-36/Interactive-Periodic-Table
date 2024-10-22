import React from 'react'
import styles from './PopUp.module.css'
import ElementProperty from './ElementProperty';
function PopUp({popupDataObj,handlePopUpClose}) {
  const{popupData,color}=popupDataObj;
   return(
   
    <div className={styles.modalContainer}>

      
        <button className={styles.closeButton} onClick={()=>{
            handlePopUpClose();
        }}>X</button>
        <div className={styles.ElementInfo}>
        <div className={styles.ElementBlock } style={{backgroundColor:color}} >
            <span style={{backgroundColor:color}}>{popupData.number}</span>
            <span className='fs-2' style={{backgroundColor:color}}> <b style={{backgroundColor:color}}>{popupData.symbol}</b></span>
            <span style={{backgroundColor:color}}>{popupData.name}</span>
            <span style={{backgroundColor:color}}>{popupData.atomic_mass}</span>
        </div>
           <ElementProperty label={"Category"} data={popupData.category}></ElementProperty>
           <ElementProperty label={"Symbol"} data={popupData.symbol}></ElementProperty>
           <ElementProperty label={"Atomic No"} data={popupData.number}></ElementProperty>
           <ElementProperty label={"Atomic Mass"} data={popupData.atomic_mass}></ElementProperty>
           <ElementProperty label={"Group"} data={popupData.group}></ElementProperty>
           <ElementProperty label={"Period"} data={popupData.period}></ElementProperty>
           <ElementProperty label={"Block"} data={`${popupData.block} block`}></ElementProperty>
           <ElementProperty label={"Electronic Configuration"} data={popupData.electron_configuration_semantic}></ElementProperty>
           <ElementProperty label={"Phase"} data={popupData.phase}></ElementProperty>
           <ElementProperty label={"Discovered by"} data={popupData.discovered_by}></ElementProperty>
           <ElementProperty label={"Density (Kg/m3)"} data={popupData.density}></ElementProperty>
           <ElementProperty label={"Melting Point"} data={`${popupData.melt} K`}></ElementProperty>
           <ElementProperty label={"Boiling Point"} data={`${popupData.boil} K`}></ElementProperty>
           <ElementProperty label={"Electron Affinity (KJ/mol)"} data={popupData.electron_affinity}></ElementProperty>
           <ElementProperty label={"Electro Negativity"} data={popupData.electronegativity_pauling}></ElementProperty>
           <a href={popupData.source} className={styles.LearnMore} target='_blank' style={{backgroundColor:color}}>Learn More About {popupData.name}</a>
           
           
        </div>
        
       
   </div>
   );
}

export default PopUp