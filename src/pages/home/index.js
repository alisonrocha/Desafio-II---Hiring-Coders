import './style.css'
import Header from './../../components/header'
import CardProducts from '../../components/cards-products'
import Button from '../../components/button'
import FormsClient from '../../components/Forms/Forms-Client'
import FormsProducts from '../../components/Forms/Forms-Products'

const $header = Header()
const $cards = CardProducts()
const $button = Button()
const $formClient = FormsClient()
const $formProduct = FormsProducts()

const $root = document.querySelector('#root')

$root.insertAdjacentHTML('afterbegin', $header + $cards + $formProduct)

const $sectionCard = document.querySelector('#card')

const $forms = document.querySelector('#closeModal')

console.log($forms)

$sectionCard.insertAdjacentHTML('beforeend', $button)

export default Home
