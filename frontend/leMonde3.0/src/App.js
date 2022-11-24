import React from 'react'
import styles from './style.js'
import './index.css';

import { Navbar, Hero, Stats, Business, Testimonials,
Clients, CTA, Footer, Post } from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Testimonials />
        <Clients />
        <CTA />
        <Post />
        <Footer />
      </div>
    </div>

  </div>
);

export default App
//<Billing />
//<CardDeal />