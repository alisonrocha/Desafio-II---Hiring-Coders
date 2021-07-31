import './style.css'

function TableProducts() {
  //Recupera os dados armazenados
  var tbProducts = localStorage.getItem('tbProducts')

  // Converte string para objeto
  tbProducts = JSON.parse(tbProducts)

  if (tbProducts == null) {
    tbProducts = []
  }

  return `
  <div id="list-product" class="container">
  <div class="title-list">
    <div class="title">
      Produtos Cadastrados
    </div>
    <div class="title end">
      Total Cadastrado: ${tbProducts.length}
    </div>
  </div>
    <div class="table">
      <table>
        <tr class="title">
          <th>Nº</th>
          <th>Categoria</th>
          <th>Nome</th>
          <th>Quantidade</th>
        </tr>       
        ${tbProducts
          .map(
            product =>
              '<tr class="text">' +
              '<td>' +
              product.id +
              '</td>' +
              '<td>' +
              product.categoria +
              '</td>' +
              '<td>' +
              product.name +
              '</td>' +
              '<td>' +
              product.quantidade +
              '</td>' +
              '</tr>'
          )
          .join('')}        
      </table>  
    </div>
  </div>
  `
}

export default TableProducts
