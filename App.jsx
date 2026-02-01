import { Header } from './Header.jsx'
import { Hero } from './Hero.jsx'
import { About } from './About.jsx'
import { Academics } from './Academics.jsx'
import { Facilities } from './Facilities.jsx'
import { Admissions } from './Admission.jsx'
import { Contact } from './Contact.jsx'
import { Footer } from './Footer.jsx'

 function App() {
  return (
    <div className="size-full">
      <Header />
      <main>
        <Hero />
        <About />
        <Academics />
        <Facilities />
        <Admissions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
