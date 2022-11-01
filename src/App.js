import { useState } from "react";
import "./index.css";
import { FiSearch } from "react-icons/fi";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [apiCalled, setApiCalled] = useState(false);

  async function handleSearch() {
    if (input === "") {
      alert("Preencha com algum cep");
      return;
    }

    try {
      await api.get(`${input}/json`).then((response) => {
        setData(response.data);
        setApiCalled(true);
      });
      console.log(data);
    } catch {
      alert();
    }
  }

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <a href="c"> Busca Cep </a>
      </header>

      <div className="Container">
        <div className="containerInput">
          <input
            type="text"
            placeholder="Digite seu cep"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} />
          </button>
        </div>
        {apiCalled && (
          <main className="main">
            <h2>cep: {data.cep}</h2>
            <span>Rua: {data.logradouro}</span>
            <span>Bairro: {data.bairro}</span>
            <span> Cidade: {data.localidade}</span>
          </main>
        )}
      </div>
    </>
  );
}

export default App;
