import './style.css'

function FormsClient() {
  return `
  <div id="modal-forms" class="modal-forms-client">    
      <div class="container-form">  
        <div id="closeModa" class="close title">
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
              <input type="text" id="name" placeholder="Nome*:" required />
            </div>
            <div>
              <input type="text" id="cpf" placeholder="CPF*:" required/>
            </div>
            <div>
              <input type="text" id="endereco" placeholder="Endereço*:" required/>
            </div>
            <div>
              <input type="email" id="email" placeholder="E-mail*:" required/>
            </div>
            <div>
              <input type="phone" id="telefone" placeholder="Telefone*:" required/>
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

export default FormsClient
