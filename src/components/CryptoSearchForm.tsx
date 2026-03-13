import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { useCryptoStore } from "../store";
import { currencies } from "../data";
import type { Pair } from "../types";
import Error from "./Error";

export default function CryptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);
  const [pair, setPair] = useState<Pair>({
    currency: "",
    cryptocurrency: "",
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
  ) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(pair).includes("")) {
      setError("Ambos campos son obligatorios");
      return;
    }

    setError("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <Error>{error}</Error>}

      <div className="field">
        <label className="field__label" htmlFor="cryptocurrency">
          Criptomoneda
        </label>
        <select
          className="field__select"
          name="cryptocurrency"
          id="cryptocurrency"
          value={pair.cryptocurrency}
          onChange={handleChange}
        >
          <option value="" disabled>
            -- Seleccione una opción --
          </option>

          {cryptocurrencies.map((crypto) => (
            <option key={crypto.symbol} value={crypto.symbol}>
              {crypto.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="field__label" htmlFor="currency">
          Moneda
        </label>
        <select
          className="field__select"
          name="currency"
          id="currency"
          value={pair.currency}
          onChange={handleChange}
        >
          <option value="" disabled>
            -- Seleccione una opción --
          </option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <input className="form__submit" type="submit" value="Cotizar" />
    </form>
  );
}
