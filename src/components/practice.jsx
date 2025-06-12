import React from 'react'

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favcolor: 'blue'
    };
  }
  
  componentDidMount() {
    // Simulate fetching data from an API
    setTimeout(() => {
      this.setState({ favcolor: 'green' });
    }, 2000); // Change color after 2 seconds
  }

  render() {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Practice Component</h1>
        <p className="text-lg text-gray-700">This is a placeholder for the practice component.</p>
        <p>this color is {this.state.favcolor}</p>
      </div>
      </>
    )
  }
}


// function PracticeComponent() {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//         <h1 className="text-4xl font-bold mb-4">Practice Component</h1>
//         <p className="text-lg text-gray-700">This is a placeholder for the practice component.</p>
//         <p>this color is {this.state.favcolor}</p>
//       </div>
//     </>

//   )
// }

export default Practice