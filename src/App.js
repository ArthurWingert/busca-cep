import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [cep, setCep] = useState({});
  const [inputCep, setInputCep] = useState("");

  const getCep = async () => {
    try {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${inputCep}/json/`
      );
      setCep(data);
    } catch (error) {
      console.log(error);
      setCep({});
    }
  };

  useEffect(() => {
    if (inputCep.length === 8) {
      getCep();
    } else {
      setCep({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputCep]);

  return (
    <div className="container_cep">
      <div className="subcontainer_cep">
        <h1 className="search_cep">Busque seu CEP</h1>
      </div>
      <div className="subcontainer">
        <div className="cep">
          <span>CEP</span>
          <input
            type="text"
            placeholder="Digite o CEP"
            value={inputCep}
            onChange={(e) => setInputCep(e.target.value)}
            maxLength="8"
          />
        </div>
        <div className="cep">
          <span>LOGRADOURO</span>
          <input
            type="text"
            placeholder="Logradouro"
            value={cep.logradouro || ""}
            readOnly
          />
        </div>
        <div className="cep">
          <span>BAIRRO</span>
          <input
            className="input"
            type="text"
            placeholder="Bairro"
            value={cep.bairro || ""}
            readOnly
          />
        </div>
        <div className="cep">
          <span>CIDADE</span>
          <input
            type="text"
            placeholder="Cidade"
            value={cep.localidade || ""}
            readOnly
          />
        </div>
        <div className="cep">
          <span>UF</span>
          <input type="text" placeholder="UF" value={cep.uf || ""} readOnly />
        </div>
      </div>
    </div>
  );
}

export default App;
