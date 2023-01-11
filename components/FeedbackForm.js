import styles from './FeedbackForm.module.css'

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
        <div class="tab" Meat>
          <label htmlFor="meat">Meat</label>
          <p>How often do you eat animal-based products?</p>
          <input id="meat" className={styles['form-field']} type="text" name="name" />
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
      </form>


  )
}
