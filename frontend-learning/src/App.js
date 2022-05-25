//import logo from './logo.svg';
import './App.css';


// function App() {
//   return (
//     <div>
//       <p>Hello World</p>
//     </div>
//   );
// }

const CompTwo = (props) => {
  return (
    <p class={props.classes}>My name is: {props.name}</p>
  );
}

const App = () => {
  console.log('Hello from component');
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div class="App">
      <p>Hello World, it is {now.toString()}</p>
      <p>{a} + {b} is {a + b}</p>
      <CompTwo name="name" classes="name"/> 
      <CompTwo name="lastname" classes="lastName"/>
    </div>
  );
}

export default App;
