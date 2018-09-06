import React, {Component} from 'react';

class Test extends Component {
   state = {
      title: '',
      body: ''
   }

   componentDidMount() { fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({
         title: data.title,
         body: data.body
      })
   )
   }

   // componentWillMount()  {
   //    console.log('component will mount')
   // }
   //
   // componentDidUpdate() {
   //    console.log('did update')
   // }
   //
   // componentWillUpdate() {
   //    console.log('will update')
   // }
   //
   // componentWillReceiveProps(nextProps, nextState) {
   //    console.log('will receive props');
   // }
   //
   // static getDerivedStateFromProps(nextProps, prevState) {
   //    return {
   //       test: 'somethig'
   //    };
   // }
   //
   // getSnapshotBeforeUpdate(prevProps, prevState) {
   //
   // }

    render() {
      const { title, body } = this.state;
      return (
         <div>
            <h1 className="text-center">{title}</h1>
            <p>{body}</p>
         </div>
      )
    }
}

export default Test;
