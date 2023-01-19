import styles from './FeedbackForm.module.css'
import Script from 'next/script'
import React, { useState } from 'react';



export default function FeedbackForm() {
  function handleChange(){
    var meat = document.getElementById("meat").value;
    var mpg = document.getElementById("mpg").value;
    var miles = document.getElementById("miles").value;
    var cheese = document.getElementById("cheese").value;
    var milk = document.getElementById("milk").value;
    
    document.getElementById("meatVal").innerHTML = meat;
    document.getElementById("mpgVal").innerHTML = mpg;
    document.getElementById("milesVal").innerHTML = miles;
    document.getElementById("cheeseVal").innerHTML = cheese;
    document.getElementById("milkVal").innerHTML = milk;
    
    var totEmissions = meat/4*15*52;
    totEmissions += 20*miles/mpg
    totEmissions += cheese/8*13.5
    totEmissions += milk/1.85*1.9
    
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
          <input id="meat" className={styles['slider']} type="range" min="0" max="25" name="meat" onChange={() => handleChange()}/>
          <p className={styles['form-field']}>Servings: <span id="meatVal"></span></p>
        </div>

         <div class="tab" Animal Products>
          <label htmlFor="cheese">Cheese</label>
          <p>How many times do you eat cheese per week?</p>
          <input id="cheese" className={styles['slider']} type="range" min="0" max="25" name="cheese" onChange={() => handleChange()}/>
          <p className={styles['form-field']}>Servings: <span id="cheeseVal"></span></p>
          <p>How many times do you drink milk or use it in another dish per week?</p>
          <input id="milk" className={styles['slider']} type="range" min="0" max="25" name="milk" onChange={() => handleChange()}/>
          <p className={styles['form-field']}>Cups: <span id="milkVal"></span></p>
        </div>

        <div class="tab" Driving>
          <label htmlFor="mpg">Driving</label>
          <p>How many miles per gallon can your car drive?</p>
          <input id="mpg" className={styles['slider']} type="range" min="5" max="50" name="mpg" onChange={() => handleChange()}/>
          <p className={styles['form-field']}>Mileage: <span id="mpgVal"></span> MPG</p>
          <p>How many miles do you drive in a year?</p>
          <input id="miles" className={styles['slider']} type="range" min="0" max="20000" name="miles" onChange={() => handleChange()} step="1000"/>
          <p className={styles['form-field']}>Miles: <span id="milesVal"></span></p>
        </div>

        <p className={styles['form-field']}>Total emissions: <span id="emissions"></span></p>
        <button className={styles.button} type="submit">Submit</button>
      </form>


  )
}
