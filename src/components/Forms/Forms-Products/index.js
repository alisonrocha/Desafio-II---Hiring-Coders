import './style.css'

function FormsProducts() {
  return `
  <div id="modal-forms" class="modal-forms-client">    
      <div class="container-form">  
        <div id="closeModal" class="close title">
          x
        </div>    
        <div class="title">
          <p>
            Preencha os dados
          </p>        
        </div>
        <div>
          <form id="form">
            <div>
              <input type="text" id="categoria" placeholder="categoria*:" required />
            </div>
            <div>
              <input type="text" id="nome" placeholder="nome do produto*:" required/>
            </div>
            <div>
              <input type="number" id="quantidade" placeholder="Quantidade em Estoque*:" required/>
            </div>            
            <div class="button">
              <button id="submit" type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>  
  `
}

export default FormsProducts
