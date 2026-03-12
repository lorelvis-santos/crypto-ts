export default function CryptoSearchForm() {
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
        >
          <option value="" disabled selected>
            -- Seleccione una opción --
          </option>
        </select>
      </div>

      <div className="field">
        <label className="field__label" htmlFor="currency">
          Moneda
        </label>
        <select className="field__select" name="currency" id="currency">
          <option value="" disabled selected>
            -- Seleccione una opción --
          </option>
        </select>
      </div>

      <input className="form__submit" type="submit" value="Cotizar" />
    </form>
  );
}
