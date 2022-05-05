import classes from './App.module.css';
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/homePage/homePage"

function App() {
  return (
    <div className={classes.appWrapper}>
      <Navbar />
        <HomePage />
    </div>
  );
}

export default App;
