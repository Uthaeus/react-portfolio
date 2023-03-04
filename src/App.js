
import './App.css';
import PortfolioContainer from './component/portfolio/portfolio-container';
import NavigationComponent from './component/navigation/navigation-container';

function App() {
  return (
    <div>
      <NavigationComponent />
      <h1>Homer Simpson's Portfolio</h1>
      <PortfolioContainer />
    </div>
  );
}

export default App;
