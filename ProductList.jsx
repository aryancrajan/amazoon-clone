
import phone from './assets/phone.jpg'; // Import your phone images here
import phone2 from './assets/phone2.png';
import phone3 from './assets/phone3.png';


const ProductList = () => {
  const [phones, setPhones] = useState([
    {
      id: 1,
      image: phone,
      price: "9,999",
      name: "Samsung"
    },
    {
      id: 2,
      image: phone2,
      price: "20,999",
      name: "Iphone"
    },
    {
      id: 3,
      image: phone3,
      price: "10,999",
      name: "Nokia"
    }
    // Add more phone objects here
  ]);

}

export default ProductList;
