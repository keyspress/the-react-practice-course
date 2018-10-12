import React, { PureComponent } from 'react';

class Life extends PureComponent {
  // 1 get default props
  // 2 set default state
  state = {
    title: 'Life cycles'
  };
  // 3 before render
  // componentWillMount() {
  //   console.log('3 before render: will mount');
  //   // document.querySelector('h3').style.color = 'red';
  // }

  // componentWillUpdate() {
  //   console.log('before update');
  // }
  // componentDidUpdate() {
  //   console.log('after update');
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.title === this.state.title) {
  //     return false;
  //   }
  //   return true;
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log('before recieve props');
  // }

  // 4 render
  render() {
    console.log('4 render: render');
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div onClick={() => this.setState({ title: 'something else' })}>
          Change State
        </div>
      </div>
    );
  }
  // 5 after render
  //   componentWillUnmount() {
  //     console.log('unmount');
  //   }
  //   componentDidMount() {
  //     console.log('5 after render: did mount');
  //     document.querySelector('h3').style.color = 'red';
  //   }
}

export default Life;
