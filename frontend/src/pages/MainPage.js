import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MainPage() {
  const [date, setDate] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);
  const [currencyNames, setCurrencyNames] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5000/convert", {
        params: {
          date,
          sourceCurrency,
          targetCurrency,
          amountInSourceCurrency,
        },
      });
      setAmountInTargetCurrency(response.data);
    } catch (err) {
      console.error("Error fetching conversion data:", err);
    }
  };

  useEffect(() => {
    const getCurrencyNames = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getAllCurrencies");
        setCurrencyNames(response.data);
      } catch (err) {
        console.error("Error fetching currency names:", err);
      }
    };
    getCurrencyNames();
  }, []);

  return (
    <div>
      <div class="flex items-center justify-center">
      <h1 class="lg:mx-32 text-5xl font-bold text-green-500">CurrXchange</h1>
      </div>
      <p className='lg:mx-32 opacity-60 py-6 justify-center text-gray-100 align'>Welcome to CurrXchange, the premier app for all your currency conversion needs. Whether you're traveling, trading, or just keeping an eye on the markets, CurrXchange offers seamless and real-time currency conversion at your fingertips.</p>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5 flex flex-col items-center justify-center">
            <div className='w-2/3 lg:w-1/2 py-4'>
              <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                onChange={(e) => setDate(e.target.value)}
                className="bg-gray-700 border border-green-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className='w-2/3 lg:w-1/2 py-4'>
              <label htmlFor="sourceCurrency" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Source currency</label>
              <select
                onChange={(e) => setSourceCurrency(e.target.value)}
                className="bg-gray-700 border border-green-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="sourceCurrency"
                id="sourceCurrency"
                value={sourceCurrency}
              >
                <option value="">Select source currency</option>
                {Object.keys(currencyNames).map((currency) => (
                  <option className=" p-1" key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              </select>
            </div>

            <div className='w-2/3 lg:w-1/2 py-4'>
              <label htmlFor="targetCurrency" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Target currency</label>
              <select
                onChange={(e) => setTargetCurrency(e.target.value)}
                className="bg-gray-700 border border-green-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="targetCurrency"
                id="targetCurrency"
                value={targetCurrency}
              >
                <option value="">Select target currency</option>
                {Object.keys(currencyNames).map((currency) => (
                  <option className=" p-1" key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              </select>
            </div>

            <div className='w-2/3 lg:w-1/2 py-4'>
              <label htmlFor="amountInSourceCurrency" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Amount in source currency</label>
              <input
                type="number"
                id="amountInSourceCurrency"
                name="amountInSourceCurrency"
                onChange={(e) => setAmountInSourceCurrency(Number(e.target.value))}
                className="bg-gray-700 border border-green-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Amount in source currency"
                required
              />
            </div>
            <button
              type="submit"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-green-800 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get the target currency
              </span>
            </button>
          </div>
        </form>
      </div>
      <div className="justify-center items-center">
        {amountInSourceCurrency} {currencyNames[sourceCurrency]} is equal to {""}
        {amountInTargetCurrency} in {currencyNames[targetCurrency]}
      </div>
    </div>
  );
}
