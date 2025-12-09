const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send(`
    <form action="/calculate-bmi" method="POST">
      <label>Weight (kg):</label>
      <input type="number" name="weight" required><br><br>

      <label>Height (m):</label>
      <input type="number" name="height" required step="0.01"><br><br>

      <button type="submit">Calculate BMI</button>
    </form>
  `);
});

app.post('/calculate-bmi', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  if (weight <= 0 || height <= 0) {
    return res.send("Invalid input. Weight and height must be positive numbers.");
  }

  const bmi = weight / (height * height);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  res.send(`
    <h1>Your BMI: ${bmi.toFixed(2)}</h1>
    <h2>Category: ${category}</h2>
    <a href="/">Go Back</a>
  `);
});
