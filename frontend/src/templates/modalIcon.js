import React from 'react'

export default props => (

  <div className="modal" id={props.id}>
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Detalhes do Cliente: {props.razaoSocial} </h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <table className='table'>
          <tbody>
            <tr>
              <th>Id</th><td>{props.id}</td>
            </tr>
            <tr>
              <th>Nome</th><td>{props.nome}</td>
            </tr>
            <tr>
              <th>Identificador</th><td>{props.identificador}</td>
            </tr>
            <tr>
              <th>Razão Social</th><td>{props.razaoSocial}</td>
            </tr>
            <tr>
              <th>Tipo</th><td>{props.tipo}</td>
            </tr>
            <tr>
              <th>Plano</th><td>{props.plano}</td>
            </tr>
            <tr>
              <th>Data Criação</th><td>{props.dataCriacao}</td>
            </tr>
            <tr>
              <th>Data Atualização</th><td>{props.dataAtualizacao}</td>
            </tr>
          </tbody>
        </table>

        <div className="modal-footer">
          <button className="btn btn-close" data-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
)