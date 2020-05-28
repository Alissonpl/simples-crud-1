import React, { useEffect, useState, Fragment } from "react";

import api from "../../services/api";
import Tablet from "./Lista";
import Adicionar from "./Adicionar/index";
import Editar from "./Editar";

export default function Produto() {
  const [estadoAtual, setEstadoAtual] = useState("");
  const [edicao, setEdicao] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get("product").then((response) => {
      setProduct(response.data);
    });
  }, [product]);

  async function deletarProduto(id) {
    try {
      await api.delete(`product/${id}`);
      alert("Excluido");
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente");
    }
  }

  function editandoProduto(user) {
    setEdicao(true);

    setEstadoAtual({
      id: user.id,
      nome: user.nome,
      descricao: user.descricao,
      modelo: user.modelo,
      marca: user.marca,
      tamanho: user.tamanho,
      valor: user.valor,
      quantidade: user.quantidade,
    });
  }

  return (
    <React.Fragment>
      <div className="container">
        <h1>Produto</h1>
        <div className="flex-row">
          <div className="flex-large">
            {edicao ? (
              <Fragment>
                <h2>Editar</h2>

                <Editar setEdicao={setEdicao} 
                estadoAtual={estadoAtual} 
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Adicionar</h2>
                <Adicionar />
              </Fragment>
            )}
          </div>

          <div className="flex-large">
            <h2>Lista</h2>
            <Tablet
              product={product}
              editandoProduto={editandoProduto}
              deletarProduto={deletarProduto}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
