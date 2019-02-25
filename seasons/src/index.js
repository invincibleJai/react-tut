import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = {lat: null, errMessage: ''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errMessage: err.message}),
    );
  }

  componentDidUpdate() {
    console.log('component will update');
  }
  componentWillUnmount() {
    console.log('component will unmount');
  }

  renderContent() {
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (!this.state.lat && this.state.errMessage) {
      return <div> Error : {this.state.errMessage} </div>;
    } else {
      return <Spinner message="Please accept location..." />;
    }
  }

  render() {
    return <div class="border red">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
