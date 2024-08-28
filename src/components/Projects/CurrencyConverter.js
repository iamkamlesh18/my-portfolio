import React, { useState } from 'react'; 

import 'bootstrap/dist/css/bootstrap.min.css'; 

  

const CurrencyConverter = () => { 

  // State variables for amount, source currency, target currency, and result 

  const [amount, setAmount] = useState(''); 

  const [sourceCurrency, setSourceCurrency] = useState('USD'); 

  const [targetCurrency, setTargetCurrency] = useState('EUR'); 

  const [convertedAmount, setConvertedAmount] = useState(null); 

  

  // Updated exchange rates 

  const exchangeRates = { 

    USD: 1,      // Base currency 

    EUR: 0.90,   // Updated rate for EUR 

    GBP: 0.76,   // Updated rate for GBP 

    INR: 83.95   // Updated rate for INR (1 USD = 83.95 INR) 

  }; 

  

  // Handle amount input change 

  const handleAmountChange = (event) => { 

    setAmount(event.target.value); 

  }; 

  

  // Handle source currency change 

  const handleSourceCurrencyChange = (event) => { 

    setSourceCurrency(event.target.value); 

  }; 

  

  // Handle target currency change 

  const handleTargetCurrencyChange = (event) => { 

    setTargetCurrency(event.target.value); 

  }; 

  

  // Perform the conversion 

  const convertCurrency = () => { 

    if (amount && !isNaN(amount)) { 

      const rate = exchangeRates[targetCurrency] / exchangeRates[sourceCurrency]; 

      setConvertedAmount((amount * rate).toFixed(2)); 

    } else { 

      setConvertedAmount(null); 

    } 

  }; 

  

  return ( 

    <div className="container mt-5"> 

      <h1 className="text-center mb-4">Currency Converter</h1> 

      <div className="row justify-content-center"> 

        <div className="col-md-6"> 

          <div className="mb-3"> 

            <label htmlFor="amountInput" className="form-label">Amount:</label> 

            <input 

              type="number" 

              className="form-control" 

              id="amountInput" 

              value={amount} 

              onChange={handleAmountChange} 

              placeholder="Enter amount" 

            /> 

          </div> 

          <div className="mb-3"> 

            <label htmlFor="sourceCurrency" className="form-label">From Currency:</label> 

            <select 

              className="form-select" 

              id="sourceCurrency" 

              value={sourceCurrency} 

              onChange={handleSourceCurrencyChange} 

            > 

              <option value="USD">USD</option> 

              <option value="EUR">EUR</option> 

              <option value="GBP">GBP</option> 

              <option value="INR">INR</option> 

            </select> 

          </div> 

          <div className="mb-3"> 

            <label htmlFor="targetCurrency" className="form-label">To Currency:</label> 

            <select 

              className="form-select" 

              id="targetCurrency" 

              value={targetCurrency} 

              onChange={handleTargetCurrencyChange} 

            > 

              <option value="USD">USD</option> 

              <option value="EUR">EUR</option> 

              <option value="GBP">GBP</option> 

              <option value="INR">INR</option> 

            </select> 

          </div> 

          <button className="btn btn-primary w-100" onClick={convertCurrency}> 

            Convert 

          </button> 

          {convertedAmount !== null && ( 

            <div className="mt-4 text-center"> 

              <h2> 

                Converted Amount: {convertedAmount} {targetCurrency} 

              </h2> 

            </div> 

          )} 

        </div> 

      </div> 

    </div> 

  ); 

}; 

  

export default CurrencyConverter; 