import './style.css'
import './src/components/styles/setings/base.css'
import './src/components/styles/generic/reset.css'

import Header from './src/components/header'
import Menu from './src/components/menu'
import TableClients from './src/components/table-client'
import Card from './src/components/cards-clients'
import TableProducts from './src/components/table-product'
import FormClient from './src/components/Forms/Forms-Client'
import FormsProducts from './src/components/Forms/Forms-Products'
import {
  saveClients,
  saveProduct,
  closeModal
} from './src/components/functions/functions'
import Modal from './src/components/modal'

const $header = Header()
const $menu = Menu()
const $cards = Card()
const $listClient = TableClients()
const $listProduct = TableProducts()
const $formClient = FormClient()
const $formProduct = FormsProducts()
const $modal = Modal()

const $root = document.querySelector('#root')

let urlAtual = location.href
let a = new URL('/', urlAtual)

console.log(a)

if (urlAtual == a.href) {
  $root.insertAdjacentHTML('afterbegin', $header + $menu + $cards)
} else if (urlAtual == a + 'clientes') {
  $root.insertAdjacentHTML('afterbegin', $header + $menu + $listClient)
} else if (urlAtual == a + 'produtos') {
  $root.insertAdjacentHTML('afterbegin', $header + $menu + $listProduct)
} else if (urlAtual == a + 'form-cadastrar-produto') {
  $root.insertAdjacentHTML(
    'afterbegin',
    $header + $menu + $formProduct + $modal
  )
} else if (urlAtual == a + 'form-cadastrar-cliente') {
  $root.insertAdjacentHTML('afterbegin', $header + $menu + $formClient + $modal)
}

saveClients()
saveProduct()
closeModal()
