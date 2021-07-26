import './style.css'

function Header() {
  return `
    <header id="header">
      <nav class="container">
        <div id="open" class="toggle icon-menu"></div>        
        <div id="menu" class="menu">          
          <ul class="grid">
            <li><a class="title" href="#home">email@administrador</a></li>
            <li><img src="./assets/images/perfil.jpg"/></li>                    
          </ul>
        </div>     
        
        
      </nav>
    </header>
  `
}

export default Header
