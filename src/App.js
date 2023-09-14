import amazon from './amazon1.svg'
import location from './assets/location.svg'
import './App.css';
import hamburger from './assets/hamburger.svg'
import Phone from './Phone';
import phone1 from './assets/phone.jpg'
import phone2 from './assets/phone2.png'
import phone3 from './assets/phone3.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <img className='logo' alt='logo' src={amazon}/>
      <img className='loc-logo' alt='location' src={location}/>
      <div className='textarea'>
          <p className='ordername'>deliver to john</p>
          <p className='orderplace'>Bangalore 680303</p>
      </div>
      <input type='text' className='search' />
      </header>
      <div className='ribbon'>
      <img className='ham-logo' alt='logo' src={hamburger}/>
      <p className='menu'>All</p>
      <p className='menu'>Fashion</p>
      <p className='menu'>Mobiles</p>
      <p className='menu'>Gift Ideas</p>
      <p className='menu'>Prime</p>
      <p className='menu'>Amazon Pay</p>
      <p className='menu'>Gift Cards</p>
      </div>
      <div className='result'>
        <p>1-16 of over 2,000 results for  <span className='phone'>“phone” </span></p>
      </div>
      <Phone pic={phone1} name="First Mobile"/>
      <Phone pic={phone2} name="Second Mobile"/>
      <Phone pic={phone3} name="Third Mobile"/>
    </div>
  );
}

export default App;
