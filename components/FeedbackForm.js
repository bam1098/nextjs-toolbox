import styles from './FeedbackForm.module.css'
import Script from 'next/script'
import React, { useState } from 'react';



export default function FeedbackForm() {
  function handleChange(){
    var meat = document.getElementById("meat").value;
    var mpg = document.getElementById("mpg").value;
    var carMiles = document.getElementById("carMiles").value;
    var cheese = document.getElementById("cheese").value;
    var milk = document.getElementById("milk").value;
    var eggs = document.getElementById("eggs").value;
    var pubMiles = document.getElementById("pubMiles").value;
    var flyMiles = document.getElementById("flyMiles").value;
    
    document.getElementById("meatVal").innerHTML = meat;
    document.getElementById("mpgVal").innerHTML = mpg;
    document.getElementById("milesVal").innerHTML = carMiles;
    document.getElementById("cheeseVal").innerHTML = cheese;
    document.getElementById("milkVal").innerHTML = milk;
    document.getElementById("eggVal").innerHTML = eggs;
    document.getElementById("pubMilesVal").innerHTML = pubMiles;
    document.getElementById("flyMilesVal").innerHTML = flyMiles;
    
    var totEmissions = meat/4*15*52;
    totEmissions += 20*carMiles/mpg;
    totEmissions += cheese/8*13.5*52;
    totEmissions += milk/1.85*1.9*52;
    totEmissions += eggs/8*4.8*52;
    totEmissions += pubMiles*.14;
    totEmissions += flyMiles*.4;
    
    var earths = totEmissions/10000;
    document.getElementById("emissions").innerHTML = earths;
  }
  
  const [nameStyle, setNameStyle] = useState('tab');
  const [meatStyle, setMeatStyle] = useState('tabHide');
  const [animalStyle, setAnimalStyle] = useState('tabHide');
  const [drivingStyle, setDrivingStyle] = useState('tabHide');
  const [transportStyle, setTransportStyle] = useState('tabHide');
  
  const nameNext = () => {
    setMeatStyle('tab');
    setNameStyle('tabHide');
  }
  
  const meatPrev = () => {
    setNameStyle('tab');
    setMeatStyle('tabHide');
  }
  
  const meatNext = () => {
    setAnimalStyle('tab');
    setMeatStyle('tabHide');
  }
  
  const animalPrev = () => {
    setMeatStyle('tab');
    setAnimalStyle('tabHide');
  }
  
  const animalNext = () => {
    setDrivingStyle('tab');
    setAnimalStyle('tabHide');
  }
  
  const drivingPrev = () => {
    setAnimalStyle('tab');
    setDrivingStyle('tabHide');
  }
  
  const drivingNext = () => {
    setTransportStyle('tab');
    setDrivingStyle('tabHide');
  }
  
  const transPrev = () => {
    setDrivingStyle('tab');
    setTransportStyle('tabHide');
  }
 
  
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
        style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" }}
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>

        <div class="tab" className={styles[nameStyle]}>
          <label htmlFor="name">Name</label>
          <p>Name (Optional)?</p>
          <input id="name" className={styles['form-field']} type="text" name="name" />
          <button type="button" className={styles.button} onClick={nameNext}>Next</button>
        </div>

        <div className={styles[meatStyle]}>
          <label htmlFor="meat">Meat</label>
          <p>How many times do you eat meat per week?</p>
          <input id="meat" className={styles['slider']} type="range" min="0" max="25" name="meat" onChange={() => handleChange()} defaultValue="0"/>
          <p className={styles['form-field']}>Servings: <span id="meatVal"></span></p>
          <button type="button" className={styles.button} onClick={meatPrev}>Previous</button>
          <button type="button" className={styles.button} onClick={meatNext}>Next</button>
        </div>

         <div className={styles[animalStyle]}>
          <label htmlFor="Non-meat Animal products">Non-meat Animal Products</label>
          <p>How many times do you eat cheese per week?</p>
          <input id="cheese" className={styles['slider']} type="range" min="0" max="25" name="cheese" onChange={() => handleChange()} defaultValue="0"/>
          <p className={styles['form-field']}>Servings: <span id="cheeseVal"></span></p>
          <p>How many times do you drink milk or use it in another dish per week?</p>
          <input id="milk" className={styles['slider']} type="range" min="0" max="25" name="milk" onChange={() => handleChange()} defaultValue="0"/>
          <p className={styles['form-field']}>Cups: <span id="milkVal"></span></p>
          <p>How many eggs do you eat per week?</p>
          <input id="eggs" className={styles['slider']} type="range" min="0" max="25" name="eggs" onChange={() => handleChange()} defaultValue="0"/>
          <p className={styles['form-field']}>Eggs: <span id="eggVal"></span></p>
          <button type="button" className={styles.button} onClick={animalPrev}>Previous</button>
          <button type="button" className={styles.button} onClick={animalNext}>Next</button>
        </div>

        <div className={styles[drivingStyle]}>
          <label htmlFor="driving">Driving</label>
          <p>How many miles per gallon can your car drive?</p>
          <input id="mpg" className={styles['slider']} type="range" min="5" max="50" name="mpg" onChange={() => handleChange()} defaultValue="0"/>
          <p className={styles['form-field']}>Mileage: <span id="mpgVal"></span> MPG</p>
          <p>How many miles have you driven in the last year?</p>
          <input id="carMiles" className={styles['slider']} type="range" min="0" max="20000" name="carMiles" onChange={() => handleChange()} step="1000" defaultValue="0"/>
          <p className={styles['form-field']}>Miles: <span id="milesVal"></span></p>
          <button type="button" className={styles.button} onClick={drivingPrev}>Previous</button>
          <button type="button" className={styles.button} onClick={drivingNext}>Next</button>
        </div>

        <div className={styles[transportStyle]}>
          <label htmlFor="transport">Transport</label>
          <p>How many miles have you flown in the last year?</p>
          <input id="flyMiles" className={styles['slider']} type="range" min="0" max="20000" name="flyMiles" onChange={() => handleChange()} step="100" defaultValue="0"/>
          <p className={styles['form-field']}>Miles: <span id="flyMilesVal"></span></p>
          <p>How many miles have you ridden on public transport (bus, train, trolley) in the last year??</p>
          <input id="pubMiles" className={styles['slider']} type="range" min="0" max="20000" name="pubMiles" onChange={() => handleChange()} step="100" defaultValue="0"/>
          <p className={styles['form-field']}>Miles: <span id="pubMilesVal"></span></p>
          <button type="button" className={styles.button} onClick={transPrev}>Previous</button>
        </div>





        <p className={styles['form-field']}>If everyone lived like you we would need: <span id="emissions"></span> earths</p>
        <button className={styles.button} type="submit">Submit</button>
      </form>


  )
}
