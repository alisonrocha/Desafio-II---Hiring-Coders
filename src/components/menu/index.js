import './style.css'

function Menu() {
  let urlAtual = location.href
  let a = new URL('/', urlAtual)

  return `
  <div id="menu-open">  
    <div class="list-menu">
      <ul>        
        <li class="link">
          <a href="${a}">
            <div class="toggle icon-home"></div>  
            <div class="text">Home</div>
          </a>
        </li>
        <li class="link">
          <a href="${a + 'produtos'}">
            <div class="toggle icon-shopping-cart"></div>  
            <div class="text">Produtos Cadastrados</div>
          </a>
        </li>
        <li class="link">
          <a href="${a + 'clientes'}">
            <div class="toggle icon-people_alt"></div>  
            <div class="text">Clientes Cadastrados</div>
          </a>
        </li>
        <li class="link">
          <a href="${a + 'form-cadastrar-produto'}">
            <div class="toggle icon-cart-plus"></div>  
            <div class="text">Adicionar novo Produto</div>
          </a>
        </li>
        <li class="link">
          <a href="${a + 'form-cadastrar-cliente'}">
            <div class="toggle icon-person_add"></div>  
            <div class="text">Adicionar novo Cliente</div>
          </a>
        </li>
      </ul>
    </div> 
    <div id="closeMenu" >
      <div class="toggle icon-menu"></div>
    </div> 
  </div> 
  `
}

export default Menu
