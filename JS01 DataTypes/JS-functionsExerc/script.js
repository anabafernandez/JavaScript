  // Exercise 1: Convert Minutes into Seconds
  function convertMinutes() {
    const minutes = parseInt(document.getElementById('minutes').value);
    const seconds = minutes * 60;
    document.getElementById('result1').innerText = `Seconds: ${seconds}`;
  }

  // Exercise 2: Return the Next Number
  function getNextNumber() {
    const number = parseInt(document.getElementById('number').value);
    const nextNumber = number + 1;
    document.getElementById('result2').innerText = `Next number: ${nextNumber}`;
  }

  // Implement other exercises in a similar manner