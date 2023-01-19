import styles from './FeedbackForm.module.css'
import Script from 'next/script'
import React, { useState } from 'react';



export default function FeedbackForm() {
  function handleChange(){
    document.getElementById("val1").innerHTML = document.getElementById("meat").value;
    document.getElementById("val2").innerHTML = document.getElementById("mpg").value;
    document.getElementById("val3").innerHTML = document.getElementById("miles").value;
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
          <p id="a">How many times do you eat meat per week?</p>
          <input id="meat" className={styles['slider']} type="range" min="0" max="25" name="meat" onChange={() => handleChange()}/>
          <p className={styles['form-field']}>Servings: <span id="val1"></span></p>
        </div>

        <div class="tab" Driving>
          <label htmlFor="mpg">Driving</label>
          <p>How many miles per gallon can your car drive?</p>
          <input id="mpg" className={styles['slider']} type="range" min="5" max="50" name="mpg" onChange={() => handleChange()}/>
          <p className={styles['form-field']}>Mileage: <span id="val2"></span> MPG</p>
          <p>How many miles do you drive in a year?</p>
          <input id="miles" className={styles['slider']} type="range" min="0" max="25000" name="miles" onChange={() => handleChange()}/>
          <p className={styles['form-field']}>Miles: <span id="val3"></span></p>
        </div>

        <button className={styles.button} type="submit">Submit</button>
      </form>


  )
}
