var image = React.createElement('img', { src: 'img/react.png' });
var title = React.createElement('h1', null, 'React');
var subtitle = React.createElement('p', null, 'Библиотека для создания пользовательских интерфейсов');
var container = React.createElement('div', { className: 'container'}, image, title, subtitle);
 
ReactDOM.render(container, document.getElementById('root'));