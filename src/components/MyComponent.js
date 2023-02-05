import React from 'react';

class MyComponent extends React.Component {
    state = {
        name:'duong',
        age: 26,
    };

      render(){
        return (
            <div>my name is {this.state.name} {this.state.age}</div>
        );
      }

}
export default MyComponent;