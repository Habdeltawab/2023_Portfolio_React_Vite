import { Fragment } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <section>About Me</section>
      <section>About Me</section>
      <section>About Me</section>
    </Fragment>
  );
}

export default App;
