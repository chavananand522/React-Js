
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroname={"Batman"} />
        <Hero heroname={"Superman"} />
        <Hero heroname={"joker"} />
        <Hero />
      </ErrorBoundary>
    </div>
  );
}

export default App;