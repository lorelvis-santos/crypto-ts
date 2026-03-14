import { useMemo } from "react";
import { useCryptoStore } from "../store";

export default function CryptoPriceDisplay() {
  const result = useCryptoStore((state) => state.result);
  const hasResult = useMemo(() => {
    const resultValues = Object.values(result);
    return resultValues.length > 0 && !resultValues.includes("");
  }, [result]);

  return hasResult ? (
    <div className="display">
      <h2 className="display__title">Cotización</h2>
      <div className="display__result">
        <img
          className="display__image"
          src={`https://cryptocompare.com/${result.imageUrl}`}
          alt={`Current crypto currency being displayed`}
        />
        <div>
          <p className="display__detail">
            El precio es de:{" "}
            <span className="display__highlight">{result.price}</span>
          </p>
          <p className="display__detail">
            Precio más alto del día:{" "}
            <span className="display__highlight">{result.highDay}</span>
          </p>
          <p className="display__detail">
            Precio más bajo del día:{" "}
            <span className="display__highlight">{result.lowDay}</span>
          </p>
          <p className="display__detail">
            Variación últimas 24 horas:{" "}
            <span className="display__highlight">
              {result.changePct24Hour}%
            </span>
          </p>
          <p className="display__detail">
            Última actualización:{" "}
            <span className="display__highlight">{result.lastUpdate}</span>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
