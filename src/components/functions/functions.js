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

const urlAtual = location.href
const newUrl = new URL('/', urlAtual)

//Salvar no localStorage
function saveListProducts(e) {
  // converte os dados em string e salva no local storage
  //alert('aaa')

  localStorage.setItem('tbProducts', JSON.stringify(tbProducts))
}

function saveListClient() {
  // converte os dados em string e salva no local storage

  localStorage.setItem('tbClients', JSON.stringify(tbClients))
}

//Produto
function saveProduct() {
  var listProduct = {}

  const form = document.getElementById('submitProduct')

  if (form != null) {
    form.addEventListener('click', function (e) {
      const category = document.getElementById('categoria').value
      const name = document.getElementById('nome').value
      const quantity = document.getElementById('quantidade').value

      if (category != '' && name != '' && quantity != '') {
        listProduct.id = tbProducts.length + 1
        listProduct.categoria = category
        listProduct.name = name
        listProduct.quantidade = quantity

        tbProducts.push(listProduct)
        saveListProducts()
        openConfirm()
        e.preventDefault()
      }
    })
  }
}

//Clientes
function saveClients() {
  var listClient = {}

  const formClient = document.getElementById('submitClient')

  if (formClient != null) {
    formClient.addEventListener('click', function (e) {
      listClient.id = tbClients.length + 1
      listClient.name = document.getElementById('name').value
      listClient.cpf = document.getElementById('cpf').value
      listClient.address = document.getElementById('address').value
      listClient.email = document.getElementById('email').value
      listClient.phone = document.getElementById('phone').value

      tbClients.push(listClient)
      e.preventDefault()
      saveListClient()
      openConfirm()
    })
  }
}

//Abrir Modal
function openConfirm() {
  document.getElementById('modal-confirm').style.display = 'block'
}

function closeModal() {
  let close = document.getElementById('close')

  close.addEventListener('click', function () {
    document.getElementById('modal-confirm').style.display = 'none'

    window.location.href = location.href
  })
}

export { saveProduct, saveClients, openConfirm, closeModal }
