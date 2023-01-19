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
    totEmissions += cheese/8*13.5;
    totEmissions += milk/1.85*1.9;
    totEmissions += eggs/8*4.8;
    totEmissions += pubMiles*.14
    totEmissions += flyMiles*.4
    
    document.getElementById("emissions").innerHTML = totEmissions;
  }
  
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>

        <div class="tab" Name>
          <label htmlFor="name">Name</label>
          <p>Name (Optional)?</p>
          <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div class="tab" Meat>
          <label htmlFor="meat">Meat</label>
          <p>How many times do you eat meat per week?</p>
          <input id="meat" className={styles['slider']} type="range" min="0" max="25" name="meat" onChange={() => handleChange()} defaultValue="0"/>
          <p className={styles['form-field']}>Servings: <span id="meatVal"></span></p>
        </div>

         <div class="tab" Animal Products>
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
        </div>

        <div class="tab" Driving>
          <label htmlFor="driving">Driving</label>
          <p>How many miles per gallon can your car drive?</p>
          <input id="mpg" className={styles['slider']} type="range" min="5" max="50" name="mpg" onChange={() => handleChange()} defaultValue="0"/>
          <p className={styles['form-field']}>Mileage: <span id="mpgVal"></span> MPG</p>
          <p>How many miles have you driven in the last year?</p>
          <input id="carMiles" className={styles['slider']} type="range" min="0" max="20000" name="carMiles" onChange={() => handleChange()} step="1000" defaultValue="0"/>
          <p className={styles['form-field']}>Miles: <span id="milesVal"></span></p>
        </div>

        <div class="tab" Transport>
          <label htmlFor="transport">Transport</label>
          <p>How many miles have you flown in the last year?</p>
          <input id="flyMiles" className={styles['slider']} type="range" min="0" max="20000" name="flyMiles" onChange={() => handleChange()} step="100" defaultValue="0"/>
          <p className={styles['form-field']}>Miles: <span id="flyMilesVal"></span> MPG</p>
          <p>How many miles have you ridden on public transport (bus, train, trolley) in the last year??</p>
          <input id="pubMiles" className={styles['slider']} type="range" min="0" max="20000" name="pubMiles" onChange={() => handleChange()} step="100" defaultValue="0"/>
          <p className={styles['form-field']}>Miles: <span id="pubMilesVal"></span></p>
        </div>

        <p className={styles['form-field']}>Total emissions: <span id="emissions"></span></p>
        <button className={styles.button} type="submit">Submit</button>
      </form>


  )
}
