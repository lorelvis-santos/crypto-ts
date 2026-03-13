import { useCryptoStore } from "../store";
import { currencies } from "../data";

export default function CryptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);

  return (
    <form className="form">
      <div className="field">
        <label className="field__label" htmlFor="cryptoCurrency">
          Criptomoneda
        </label>
        <select
          className="field__select"
          name="cryptoCurrency"
          id="cryptoCurrency"
          defaultValue=""
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
          defaultValue=""
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
