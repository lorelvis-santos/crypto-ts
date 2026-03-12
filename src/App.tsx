import { useEffect } from "react";
import CryptoSearchForm from "./components/CryptoSearchForm";
import { useCryptoStore } from "./store";

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);

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
        </div>
      </div>
    </>
  );
}

export default App;
