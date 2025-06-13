import React from 'react'
import Header from '../components/header';

// class Practice extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favcolor: 'blue'
//     };
//   }
  
//   componentDidMount() {
//     // Simulate fetching data from an API
//     setTimeout(() => {
//       this.setState({ favcolor: 'green' });
//     }, 2000); // Change color after 2 seconds
//   }

//   render() {
//     return (
//       <>
//         <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//         <h1 className="text-4xl font-bold mb-4">Practice Component</h1>
//         <p className="text-lg text-gray-700">This is a placeholder for the practice component.</p>
//         <p>this color is {this.state.favcolor}</p>
//       </div>
//       </>
//     )
//   }
// }


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

const Cars = (props) => {
  return (
    <div>
      <h2>Car Model: {props.model}</h2>
      <p>Year: {props.year}</p>
      <p>Color: {props.color}</p>
    </div>
  );
}

const Practice = () => {
  const carData = [
    { model: 'Toyota Camry', year: 2020, color: 'Blue' },
    { model: 'Honda Accord', year: 2019, color: 'Red' },
    { model: 'Ford Focus', year: 2021, color: 'Black' }
  ];

  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Practice Component</h1>
      <p className="text-lg text-gray-700">This is a placeholder for the practice component.</p>
      <div className="mt-6">
        {carData.map((car, index) => (
          <Cars key={index} model={car.model} year={car.year} color={car.color} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Practice;