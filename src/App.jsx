import styles from "./style.js";
import { Billing, Business, Carddeal, Clients, CTA, Footer, Navbar, Stats, Testominal, Hero, Button } from "./components/index.js";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <Carddeal />
        <Testominal/>
        <Clients />
        <CTA />
        <Footer />
        
      </div>
    </div>
  </div>
);

export default App;