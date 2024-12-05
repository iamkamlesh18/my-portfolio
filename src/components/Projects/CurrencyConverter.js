import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CurrencyConverter.css"; // Import the specific CSS file

const CurrencyConverter = () => {
  // State variables for amount, source currency, target currency, and result
  const [amount, setAmount] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({
    USD: 1,
    EUR: 0.90,
    GBP: 0.76,
    INR: 83.95,
  });
  const [customRates, setCustomRates] = useState({
    USD: "",
    EUR: "",
    GBP: "",
    INR: "",
  });

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

  // Handle exchange rate change
  const handleRateChange = (currency, event) => {
    setCustomRates({
      ...customRates,
      [currency]: event.target.value,
    });
  };

  // Update exchange rates with custom values
  const updateRates = () => {
    const newRates = { ...exchangeRates };
    Object.keys(customRates).forEach((currency) => {
      if (customRates[currency]) {
        newRates[currency] = parseFloat(customRates[currency]);
      }
    });
    setExchangeRates(newRates);
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
    <div className="currency-converter-container mt-5">
      <h1 className="currency-converter-title text-center mb-4">
        Currency Converter
      </h1>
      <div className="row justify-content-center">
        <div className="col-md-6 currency-converter-card">
          {/* Amount Input */}
          <div className="mb-3">
            <label htmlFor="amountInput" className="form-label">
              Amount:
            </label>
            <input
              type="number"
              className="form-control currency-converter-input"
              id="amountInput"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
            />
          </div>

          {/* Source Currency Selector */}
          <div className="mb-3">
            <label htmlFor="sourceCurrency" className="form-label">
              From Currency:
            </label>
            <select
              className="form-select currency-converter-select"
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

          {/* Target Currency Selector */}
          <div className="mb-3">
            <label htmlFor="targetCurrency" className="form-label">
              To Currency:
            </label>
            <select
              className="form-select currency-converter-select"
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

          {/* Custom Exchange Rates Input */}
          <div className="mb-3">
            <label htmlFor="exchangeRates" className="form-label">
              Custom Exchange Rates (optional):
            </label>
            <div className="d-flex justify-content-between">
              {["USD", "EUR", "GBP", "INR"].map((currency) => (
                <div key={currency} className="d-flex flex-column">
                  <label htmlFor={`rate-${currency}`} className="form-label">
                    {currency} rate:
                  </label>
                  <input
                    type="number"
                    className="form-control currency-converter-input"
                    id={`rate-${currency}`}
                    value={customRates[currency]}
                    onChange={(e) => handleRateChange(currency, e)}
                    placeholder={`Enter ${currency} rate`}
                  />
                </div>
              ))}
            </div>
            <button
              className="btn btn-info currency-converter-update-btn w-100 mt-3"
              onClick={updateRates}
            >
              Update Rates
            </button>
          </div>

          {/* Convert Button */}
          <button
            className="btn btn-primary currency-converter-convert-btn w-100"
            onClick={convertCurrency}
          >
            Convert
          </button>

          {/* Converted Amount Display */}
          {convertedAmount !== null && (
            <div className="mt-4 text-center">
              <h2 className="currency-converter-result">
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
