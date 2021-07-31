import './style.css'

function Modal() {
  let urlAtual = location.href
  let a = new URL('/', urlAtual)

  return `
  <div id="modal-confirm">  
   <div class="modal-body">
      <div id="close" class="title">X</div>
      <div class="icon"> 
      <span class="icon-checkmark"></span>     
      </div>
      <div class="title">
      <p>Cadastrado com sucesso!</p>
      </div>
   </div>
  </div> 
  `
}

export default Modal
