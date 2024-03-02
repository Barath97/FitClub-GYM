import './App.css';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import Programs from './component/Programs/Programs';
import Reasons from './component/Reasons/Reasons';
import Testimonials from './component/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Testimonials/>
          <Footer/>
    </div>
  );
}

export default App;
