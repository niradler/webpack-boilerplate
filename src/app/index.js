
import template from './index.tpl.html';
import '../style/app.scss';

console.log('ENV - APP_NAME', APP_NAME);

const app =document.getElementById('app');
app.innerHTML = template;