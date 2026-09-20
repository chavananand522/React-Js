import './App.css';
import Meassage from './components/Meassage';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Header from './components/Header';
// import Hello from './components/Hello';

function App() {
  // const title = 'Welcome All!'     //String Datatype
  // const likes = 50;
  // const link = 'https://www.flipkart.com/';

  return (
    <div className="App">
      {/* <h1>My First React Application</h1>
      
      <Header /> 
        <Hello /> */}

      {/* <h1>{title}</h1>
      <p>Liked {likes} Times</p>
      <a href={link}>Flipkart</a>
      <p>{10}</p>
      <p>{"Byee!"}</p>
      <p>{[1, 2, 3, 4]}</p>
      <p>{Math.random()*10}</p> */}

      {/* <Greet name="Xyz" nickname="xz">
        <button>Click</button></Greet>
      <Greet name="Abc" nickname="ab">
        <p>This is a Child prop</p>
      </Greet> */}

        {/* <Welcome  name="Abc" hname="Superman"/>
         <Welcome  name="Xyz" hname="Batman"/> */}

         <Meassage/>
    </div>
  );
}

export default App;