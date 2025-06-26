import Header from '../components/header';
import { useState, useEffect, useRef, useMemo, useReducer, useCallback } from "react";
import Section from '../components/Section';
import Heading from '../components/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyComponent from '../components/Name';


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

//useReducer

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

//useCallBack

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
}

const Practice = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);



    const handleClick = (() => {
      console.log('Clicked');
    }); // 👈 won't change unless dependencies change


  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);


  const heavyCalculation = (num) => {
    console.log("Heavy calculation running...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total + num;
  };

  // Without useMemo: this runs on *every render*, even if only `b` changes
  // const result = heavyCalculation(a);

  // With useMemo: only runs when `a` changes
  const result = useMemo(() => heavyCalculation(a), [a]);

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
      <div style={{margin: '10px'}}>
        <p>Current: {count}</p>
        <p>Previous: {prevCountRef.current}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <hr />
      <hr />

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
      <hr />
      <hr />

      <div>  {/*for use context hook */}
        <section>
          <MyComponent/>    
        </section>
      </div>
      <hr />
      <hr />

      <h1>My favorite color is {color}!</h1>
    <button
      type="button"
      onClick={() => setColor("blue")}
    >Blue</button>

    <hr/>
    <hr/>

     <Section level={1}> {/*for use context hook */}
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={6}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
    <hr />
    <hr />
    
    <div>
      <p>Result A: {result}</p>
      <button onClick={() => setA(a + 1)}>Update A</button>
      <button onClick={() => setB(b + 1)}>Update B</button>
    </div>

    <hr />
    <hr />

    {/* useReducer */}
    <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>

    <hr />
    <hr />
    {/* useCallBack */}
    <div>
      <Child onClick={handleClick} />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
    </>
  );
}

export default Practice;