import amazon from './amazon1.svg'
import location from './assets/location.svg'
import './App.css';
import Phone from './Phone';
import 'bootstrap/dist/css/bootstrap.min.css';
import india from './assets/india.svg';
import cart from './assets/cart.svg'
import phones from './phones'
import review from './review';
import brands from './brands';
import Ribbon from './Ribbon';
import React,{useState} from 'react';



function App() {


  const [filterText, setFilterText] = useState(''); // State for filtering
  const [rating,setRating] = useState('');

  const handleRateChange = (event) => {
    setRating(event.target.value)
    console.log(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
    console.log(event.target.value)
  };
  
  const ratedPhones = () => {
    return phones.filter((phone) => {
    return phone.rating === parseInt(rating);
   } )
      };

      
  const filteredPhones = () => {
    return phones.filter((phone) =>
    phone.name.toLowerCase().includes(filterText.toLowerCase())
  )};

  const [sortBy, setSortBy] = useState('price');

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortPhones = () => {
    return [...phones].sort((a, b) => {
      if (sortBy === 'price') {
        return parseFloat(a.price.replace(',', '')) - parseFloat(b.price.replace(',', ''));
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  };





  return (
    <div className="App">
      <header className="App-header">
      
      <img className='logo' alt='logo' src={amazon}/>
      <img className='loc-logo' alt='location' src={location}/>
      <div className='textarea'>
          <p className='ordername'>Hello</p>
          <p className='orderplace'><b>Select your address</b></p>
      </div>
      <input type='text' className='search' />
      <img className='loc-logo' alt='india' src={india}/>
      <img className='loc-logo' alt='cart' src={cart}/>
      </header>
      <Ribbon />
      <div className='result'>
        <p className='pr'>1-16 of over 2,000 results for <span className='phone'>“phone” </span></p>
                  <div>
        <label>Sort by:</label>
        <select onChange={handleSortChange}> 
        
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
      </div> 
      <div className='home-page'>
          <div className='side-bar'>
              <div  className='Brand'>
              <p className='pb'><b>Brand</b></p>
              {brands.length && brands.map((phoneName) => {
                return(
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value={phoneName} id="flexCheckDefault" onChange={handleFilterChange} />
                <label class="form-check-label" for="flexCheckDefault">
                  {phoneName}
                </label>
              </div>)})
               }
              </div>
              <p className='pcr'><b>Customer Review</b></p>
              {review.length && review.map(({star1,star2,star3,star4,star5,rating}) => {
                return(
              <div class="review" value={rating} onClick={handleRateChange}>
                <img className="star-review" src={star1} alt="star"/>
                <img className="star-review" src={star2} alt="star"/>
                <img className="star-review" src={star3} alt="star"/>
                <img className="star-review" src={star4} alt="star"/>
                <img className="star-review" src={star5} alt="star"/>
                <p className='pre'>  & up</p>
              </div>)})
               }
            </div>
            <vl />
            <div className='products'>
              {/* {phones.length && phones.map(({image,name,prize})=>{
                return(
                  <div>
              <Phone pic={image} name={name} price={prize}/> <hr /></div>)

                })
              } */}

              {filteredPhones().map((phone)=>{
                return(
                  <div>
              <Phone pic={phone.image} name={phone.name} price={phone.price}/> <hr /></div>)

                })
              } 
                {/* {ratedPhones().map((phone)=>{
                return(
                  <div>
                  <Phone pic={phone.image} name={phone.name} price={phone.price}/> <hr /></div>)

                })
              }  */}
              {/* {sortPhones().map((phone) => (
            <Phone pic={phone.image} name={phone.name} price={phone.price}/>
        ))} */}

            </div>
      </div>
    </div>
  );
}

export default App;
