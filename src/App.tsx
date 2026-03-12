import CryptoSearchForm from "./components/CryptoSearchForm";

function App() {
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
