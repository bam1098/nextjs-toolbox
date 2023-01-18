import styles from './FeedbackForm.module.css'
import Script from 'next/script'

export default function FeedbackForm() {
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
          <input id="meat" className={styles['form-field']} type="text" name="meat" />
        </div>

        <div class="tab" Driving>
          <label htmlFor="mpg">Driving</label>
          <p>How many miles per gallon can your car drive?</p>
          <input id="mpg" className={styles['form-field']} type="text" name="mpg" />
          <p>How many miles do you drive in a year?</p>
          <input id="miles" className={styles['form-field']} type="text" name="miles" />
        </div>
            
        <div class="tab" Heating>
          <label htmlFor="email">Email</label>
          <input id="email" className={styles['form-field']} type="email" name="email" required />
        </div>

        <div class="tab" Heating>
          <label htmlFor="feedback">What is your feedback?</label>
          <textarea id="feedback" className={styles['form-field']} wrap="soft" name="feedback" required></textarea>
        </div>

        <button className={styles.button} type="submit">Submit</button>

        <Script id="test-script">{
          document.getElementById("a").innerHTML = "changed";
          console.log('test');
        }</Script>
      </form>


  )
}
