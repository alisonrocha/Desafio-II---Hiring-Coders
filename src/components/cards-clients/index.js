import './style.css'

function Card() {
  //Recupera os dados armazenados
  var tbProducts = localStorage.getItem('tbProducts')
  var tbClients = localStorage.getItem('tbClients')

  // Converte string para objeto
  tbProducts = JSON.parse(tbProducts)
  tbClients = JSON.parse(tbClients)

  // Caso não haja conteúdo, iniciamos um vetor vazio
  if (tbProducts == null) {
    tbProducts = []
  }

  if (tbClients == null) {
    tbClients = []
  }

  return `
  <div class="container">  
    <div class="container-card">
      <div class="card">
        <div class="body">
          <div class="number title">
            ${tbProducts.length}
          </div>
          <div class="descrition title">
            Quantidade de Produtos Cadastrados
          </div>
        </div>
      </div>
      <div class="card">
        <div class="body">
          <div class="number title">
          ${tbClients.length}
          </div>
          <div class="descrition title">
            Quantidade de Produtos Cadastrados
          </div>
        </div>
      </div>     
    </div>   
  <div>    
  `
}

export default Card
