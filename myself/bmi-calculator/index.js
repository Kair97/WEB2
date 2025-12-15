const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/calculate-bmi", (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    
    if (weight <= 0 || height <= 0){
        res.send("Invalid input");
        return;
    }

    const bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    res.send(`
        <h2>Your BMI: ${bmi.toFixed(2)}</h2>
        <h3>Category: ${category}</h3>
        <a href="/">Go Back</a>  
        `);
    
});

app.listen(PORT, ()=>{
    console.log("Server is running on port" + PORT);
});