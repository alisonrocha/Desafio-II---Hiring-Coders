import './style.css'

function FormsProducts() {
  return `
  <div id="form-product" class="modal-forms-client">    
      <div class="container-form">   
        <div class="title">
          <p>
            Preencha os dados
          </p>        
        </div>
        <div>
          <form id="formProduct">
            <div>
              <input type="text" id="categoria" placeholder="categoria*:"  autocomplete="off" required />
            </div>
            <div>
              <input type="text" id="nome" placeholder="nome do produto*:"  autocomplete="off" required/>
            </div>
            <div>
              <input type="number" id="quantidade" placeholder="Quantidade em Estoque*:"  autocomplete="off" required/>
            </div>            
            <div class="button">
              <button id="submitProduct" type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>  
  `
}

export default FormsProducts
