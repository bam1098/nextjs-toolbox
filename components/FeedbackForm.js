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

        <div style="overflow:auto;">
          <div style="float:right;">
            <button type="button" id="prevBtn" onclick="btnStep(-1)">Previous</button>
            <button type="button" id="nextBtn" onclick="btnStep(1)">Next</button>
          </div>
        </div>

        <!-- Circles which indicates the steps of the form: -->
        <div style="text-align:center;margin-top:40px;">
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
        </div>
        <button className={styles.button} type="submit">Submit</button>
      </form>
      
      <script>
      var currentTab = 0; // Current tab is set to be the first tab (0)
      showTab(currentTab); // Display the current tab

      function showTab(n) {
        // This function will display the specified tab of the form...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        //... and fix the Previous/Next buttons:
        if (n == 0) {
          document.getElementById("prevBtn").style.display = "none";
        } else {
          document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
          document.getElementById("nextBtn").innerHTML = "Submit";
        } else {
          document.getElementById("nextBtn").innerHTML = "Next";
        }
        //... and run a function that will display the correct step indicator:
        fixStepIndicator(n)
      }

      function btnStep(n) {
        // This function will figure out which tab to display
        var x = document.getElementsByClassName("tab");
        // Exit the function if any field in the current tab is invalid:
        if (n == 1 && !validateForm()) return false;
        // Hide the current tab:
        x[currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        currentTab = currentTab + n;
        // if you have reached the end of the form...
        if (currentTab >= x.length) {
          // ... the form gets submitted:
          document.getElementById("regForm").submit();
          return false;
        }
        // Otherwise, display the correct tab:
        showTab(currentTab);
      }
  )
}
