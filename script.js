
      const userInput = document.querySelector(".input");
      const btn = document.querySelector(".btn");
      const output = document.querySelector(".output");

      userInput.max = new Date().toISOString().split("T")[0];

      const dateOfBirth = () => {
        const dobValue = userInput.value;
        var dobDate = new Date(dobValue);
        if(dobValue==="") alert("Please enter a date");
        else{
// Extract year, month, and date
var y1 = dobDate.getFullYear();
        var m1 = dobDate.getMonth() + 1; // January is 0, so we add 1
        var d1 = dobDate.getDate();

        const currentDate = new Date();

        var y2 = currentDate.getFullYear();
        var m2 = currentDate.getMonth() + 1; // January is 0, so we add 1
        var d2 = currentDate.getDate();

        let y3, d3, m3;

        y3 = y2 - y1;
        if (m2 >= m1) {
          m3 = m2 - m1;
        } else {
          y3--;
          m3 = 12 + m2 - m1;
        }

        if (d2 >= d1) {
          d3 = d2 - d1;
        } else {
          m3--;
          d3 = getDaysInMonth(y1, m1) + d2 - d1;
        }
        if (m3 < 0) {
          m3 = 11;
          y3--;
        }

        if (y3 == 0 && m3 == 0 && d3 == 0) {
          output.innerHTML = `You were born today`;
        } else if (y3 == 0 && m3 == 0) {
          output.innerHTML = `You are ${d3} days old`;
        } else if (y3 == 0 && d3 == 0) {
          output.innerHTML = `You are ${m3} month old`;
        } else if (d3 == 0 && m3 == 0) {
          output.innerHTML = `You are ${y3} years old`;
        } else if (m3 == 0) {
          output.innerHTML = `You are ${y3} year and ${d3} days old`;
        } else if (d3 == 0) {
          output.innerHTML = `You are ${y3} year and ${m3} month old`;
        } else if (y3 == 0) {
          output.innerHTML = `You are ${m3} month and ${d3} days old`;
        } else {
          output.innerHTML = `You are ${y3} year ${m3} month and ${d3} days old`;
        }
        }

        
      };

      function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      }

      btn.addEventListener("click", dateOfBirth);
    