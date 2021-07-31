import './style.css'

function TableClients() {
  var tbClients = localStorage.getItem('tbClients')

  tbClients = JSON.parse(tbClients)

  if (tbClients == null) {
    tbClients = []
  }

  return `
  <div id="list-client" class="container">
    <div class="title-list" >
      <div class="title">
        Clientes Cadastrados
      </div>
      <div class="title end">
        Total Cadastrado: ${tbClients.length}
      </div>
    </div>
    <div class="table">
      <table>
        <tr class="title">
          <th>Nº</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Endereço</th>
          <th>Email</th>
        </tr>       
        ${tbClients
          .map(
            client =>
              '<tr class="text">' +
              '<td>' +
              client.id +
              '</td>' +
              '<td>' +
              client.name +
              '</td>' +
              '<td>' +
              client.cpf +
              '</td>' +
              '<td>' +
              client.address +
              '</td>' +
              '<td>' +
              client.email +
              '</td>' +
              '</tr>'
          )
          .join('')}        
      </table>  
    </div>  
  </div>
  `
}

export default TableClients
