/*function Hero(props) { //functional component
  let count = 0;
    function handleClick() {
      count++;
      console.log(count);
    }
  return (
  <div className="container">
      <div className="count">{count}</div>
      <img src={props.imageUrl} onClick={handleClick} />
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
  </div>
  );
} */
  
  var Hero = React.createClass({
    getInitialState: function() {
      return {
        count: 0
      };
    },
    
    handleClick: function() {
      this.setState({ count: this.state.count += 1 });
    },
    
    render: function() {
      return (
      <div className="container">
          <div className="count">{this.state.count}</div>
          <img src={this.props.imageUrl} onClick={this.handleClick} />
          <h1>{this.props.title}</h1>
          <p>{this.props.subtitle}</p>
      </div>
      );
    }
  });
  
  ReactDOM.render(
    <div>
      <Hero title="React"
        imageUrl="img/react.png"
        subtitle="Библиотека для создания пользовательских интерфейсов"/>
      <Hero title="Angular 2"
        imageUrl="img/angular.png"
        subtitle="Один фреймворк"/>
    </div>, 
    document.getElementById('root'));