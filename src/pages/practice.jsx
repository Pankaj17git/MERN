import Header from '../components/header';
import { useState, useEffect } from "react";

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



const HandleApi = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'DELETE',
    body: JSON.stringify({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  
  .then(Response => Response.json())
  .then((data) => {
    console.log(data);
    // Handle data
  })
  .catch((err) => {
    console.log(err.message);
  });
};

const Practice = () => {
   const [items, setItems] = useState([]);
   const [input, setInput] = useState("");

   useEffect(() => {
      HandleApi();
    }, []);
 
   const handleAddItem = () => {
     // TODO: Add logic to add input to items list
      if (input.trim() !== "") {
        setItems([...items, input]);  // Add the new item
        setInput("");                 // Clear the input field
      }
   };
 
   return (
     <>
       <h8k-navbar header="Item List Manager"></h8k-navbar>
       <div className="App">
         <h3>Item List</h3>
         <input
           type="text"
           value={input}
           onChange={(e) => setInput(e.target.value)}
           placeholder="Enter item"
           data-testid="input-field"
         />
         <button onClick={handleAddItem} data-testid="add-button">
           Add Item
         </button>
         <ul data-testid="item-list">
           {items.map((item, index) => (
             <li key={index} data-testid="list-item">
               {item}
             </li>
           ))}
         </ul>
       </div>
     </>
   );
}

export default Practice;