import './style.css'

function CardProducts() {
  return `
  <div class="card container">  
    <div class="title">         
      Últimos Produtos Cadastrados
    </div>  
    <div id="card">
      <div  class="body">      
        <div class="category text">
          <span>Long Neck</span>
        </div>
        <div class="img-card">
          <img src="./../assets/images/cerveja.png">
        </div>
        <div class="description text">
          <span class="title">Cerveja Heineken</span>
          </br>
          Valor 
          </br>
          Qtd. 5      
        </div>
      </div>
    </div>
  </div>
  `
}

export default CardProducts
