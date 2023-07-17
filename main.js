import './style.css'
import { generador } from './generator'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Adivina qué!?</h1>
    <h2 class="generado" >Hello Vite!</h2>
    <div class="card">
    <button id="generado" type="button">Qué pasó?</button>
    </div>
  </div>
`

generador(document.querySelector('.generado'))
document.querySelector('#generado').addEventListener('click', () => {
  generador(document.querySelector('.generado'));
});
