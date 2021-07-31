import './style.css'

function FormClient() {
  return `
  <div id="form-client" class="modal-forms-client">    
      <div class="container-form">         
        <div class="title">
          <p>
            Preencha os dados
          </p>        
        </div>
        <div>
          <form id="formClient" action="">        
            <div>
              <input type="text" id="name" placeholder="Nome*:"  autocomplete="off" required />
            </div>
            <div>
              <input type="text" id="cpf" placeholder="CPF*:"  autocomplete="off" required/>
            </div>
            <div>
              <input type="text" id="address" placeholder="Endereço*:"  autocomplete="off" required/>
            </div>
            <div>
              <input type="email" id="email" placeholder="E-mail*:"  autocomplete="off"  required/>
            </div>
            <div>
              <input type="phone" id="phone" placeholder="Telefone*:"  autocomplete="off"  required/>
            </div>
            <div class="button">
              <button id="submitClient" type="submit">Cadastrar</button>
            </div>
          </form>
         </div>
      </div>
    </div>
  </div>  
  `
}

export default FormClient
