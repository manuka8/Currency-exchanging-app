const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/getAllCurrencies", async (req, res) => {
    const namesURl = `https://openexchangerates.org/api/currencies.json?app_id=ff2000bdbcd64aa0b466fa85ed4bef89`;
    try {
      const namesResponse = await axios.get(namesURl);
      const namesData = namesResponse.data;
  
      return res.json(namesData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred" });
    }
  });

app.get("/convert", async (req,res)=>{
  const{date,sourceCurrency,targetCurrency,amountInSourceCurrency} = req.query;

  try{
    const dataUrl = `https://openexchangerates.org/api/historical/${date}.json?app_id=ff2000bdbcd64aa0b466fa85ed4bef89`;

    const dataResponse = await axios.get(dataUrl);
    const rates = dataResponse.data.rates;

    //rates
    const sourceRate = rates[sourceCurrency];
    const targetRate = rates[targetCurrency];

    //final target currency
    const targetAmount  = (targetRate/sourceRate) * amountInSourceCurrency;

    return res.json(targetAmount.toFixed(2));
  }catch(err){
    console.error(err);
  }
})

app.listen(5000 ,()=>{
    console.log("Server started");
})