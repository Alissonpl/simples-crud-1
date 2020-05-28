import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function table(props){
   
return(

    <Table striped bordered hover>
<thead>
  <tr>
    <th>ID</th>
    <th>NOME</th>
    <th>DESCRIÇÃO</th>
    <th>MODELO</th>
    <th>MARCA</th>
    <th>DIMENSÃO</th>
    <th>VALOR</th>
    <th>QUANTIDADE</th>
    <th>AÇÃO: I </th>
    <th>AÇÃO: II</th>
  </tr>
</thead>
{props.product.map(pro => (
<tbody>



  <tr>
<td>{pro.id}</td>
<td>{pro.nome}</td>
<td>{pro.descricao}</td>
<td>{pro.modelo}</td>
<td>{pro.marca}</td>
<td>{pro.tamanho} cm.</td>
<td>R$ {pro.valor}</td>
<td>{pro.quantidade} un.</td>
<td><Button  onClick={() => props.editandoProduto(pro)} variant="warning">EDITAR</Button>{' '}</td>
<td><Button onClick={()=> props.deletarProduto(pro.id)} variant="danger">EXCLUIR</Button>{' '}</td>

  </tr>
 
   
  


</tbody>
))}
</Table>
)


}