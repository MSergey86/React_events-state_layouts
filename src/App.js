// import logo from './logo.svg';
import './style/App.css';
import Store from './components/Store';

// const products = "555";
// const products = {
//   name: "Nike Metcon 2",
//   price: "130",
//   color: "red",
//   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
// };
const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];


function App() {

  return (
      <div className="App">
      {
          <Store products={products}  />
       }
    </div>
  )
  // return (
  //   <div className="App">
  //     {products.map((product) => (
  //         <Store product={product}  />
  //   ))}
  //   </div>
  // );
}

export default App;


// {cards.map((card) => (
//   <ShopCard card={card} key={indexCard++} />
// ))}