import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import api from "../../../services/api";

export default  function Edicao (props){
  const [id, setId] = useState(props.estadoAtual.id);
  const [nome, setNome] = useState(props.estadoAtual.nome);
  const [descricao, setDescricao] = useState(props.estadoAtual.descricao);
  const [modelo, setModelo] = useState(props.estadoAtual.modelo);
  const [marca, setMarca] = useState(props.estadoAtual.marca);
  const [tamanho, setTamanho] = useState(props.estadoAtual.tamanho);
  const [valor, setValor] = useState(props.estadoAtual.valor);
  const [quantidade, setQuantidade] = useState(props.estadoAtual.quantidade);
  async function enviarUpdate(e) {
    e.preventDefault();
    props.setEdicao(false);
    const data = {
      nome,
      descricao,
      modelo,
      marca,
      tamanho,
      valor,
      quantidade,
    };

    try {
      await api.put(`product/${id}`, data);
      alert("Editado");
      
    } catch (err) {
      alert("Erro ao Editar o Produto, tente novamente.");
    }
  }

  
  return (
    <Form onSubmit={enviarUpdate}>
      
      <Form.Row>
        <Col>
        <Form.Control
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
          required
        />
      </Col>

      <Col>
     
        <Form.Control
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          type="text"
          placeholder="Descrição"
          required
        />
      
      </Col>
      <Col>
      
        <Form.Control
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          type="text"
          placeholder="Modelo"
          required
        />
     </Col>

     <Col>
        <Form.Control
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          type="text"
          placeholder="Marca"
          required
        />
      </Col>

      <Col>
        <Form.Control
          value={tamanho}
          onChange={(e) => setTamanho(e.target.value)}
          type="number"
          placeholder="Dimensão"
          required
        />
      </Col>

      <Col>
        <Form.Control
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          type="number"
          placeholder="Valor"
          required
        />
      </Col>

      <Col>
        <Form.Control
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          type="number"
          placeholder="Quantidade"
          required
        />
      </Col>
      <Col>
      <Button variant="primary" type="submit">
        ENVIAR
      </Button>
      </Col>
      <Col>
      <Button onClick={() => props.setEdicao(false)} className="waves-effect waves-light btn">CANCELAR</Button>
      </Col>
      </Form.Row>
    </Form>




  );
};


