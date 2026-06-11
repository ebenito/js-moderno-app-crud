import './style.css';
import { UsersApp } from '/src/users/users-app';

document.querySelector('#app').innerHTML = `
  <div>
    <h1 id="app-title">App CRUD</h1>
    <div class="card"></div>    
  </div>
`;

const element = document.querySelector('.card');
UsersApp( element );
