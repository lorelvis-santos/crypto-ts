import { useEffect } from "react";
import CryptoSearchForm from "./components/CryptoSearchForm";
import { useCryptoStore } from "./store";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";
import Spinner from "./components/Spinner";

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);
  const loading = useCryptoStore((state) => state.loading);

  useEffect(() => {
    fetchCryptos();
  });

  return (
    <>
      <div className="app container">
        <h1 className="app__title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="app__content">
          <CryptoSearchForm />
          {loading ? <Spinner /> : <CryptoPriceDisplay />}
        </div>
      </div>
    </>
  );
}

export default App;
