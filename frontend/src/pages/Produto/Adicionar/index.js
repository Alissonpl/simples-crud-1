import React, {useState} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import api from "../../../services/api";


export default function Adicionar(props) {

  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [descricao, setDescricao] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [valor, setValor] = useState("");
  const [quantidade, setQuantidade] = useState("");

 function estadoInicial(e){
  if(e == true){
  setNome('');
  setId('');
  setDescricao('');
  setModelo('');
  setMarca('');
  setTamanho('');
  setValor('');
  setQuantidade('');
}
 }
  

  async function enviarAdd(e) {
    e.preventDefault();
    estadoInicial(true);
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
      await api.post("product", data);
      alert("Adicionado");
    } catch (err) {
      alert("Erro ao cadastrar Produtos, tente novamente.");
    }
  }



  return (
    <Form onSubmit={enviarAdd}>
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
        <Button variant="primary" type="submit">
        ADICIONAR
      </Button>

      </Form.Row>
      
     

    </Form>
  );
}
