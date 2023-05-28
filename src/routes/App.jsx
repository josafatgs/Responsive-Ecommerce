import Navbar from "../components/Navbar.jsx";
import Galery from "../components/Galery.jsx";
import Product from "../components/Product.jsx";

import './App.css';
import Footer from "../components/Footer.jsx";

export default function App() {

  return (
      <>
        <Navbar></Navbar>
        <Galery nameGalery={"Productos"} >
          <Product nameProduct={"Tenis Nike"} priceProduct={"$2350.99"} srcImageProduct={"https://picsum.photos/250/150"} ></Product>
          <Product nameProduct={"Tenis Nike"} priceProduct={"$2350.99"} srcImageProduct={"https://picsum.photos/250/150"} ></Product>
          <Product nameProduct={"Tenis Nike"} priceProduct={"$2350.99"} srcImageProduct={"https://picsum.photos/250/150"} ></Product>

          <Product nameProduct={"Tenis Nike"} priceProduct={"$2350.99"} srcImageProduct={"https://picsum.photos/250/150"} ></Product>
          <Product nameProduct={"Tenis Nike"} priceProduct={"$2350.99"} srcImageProduct={"https://picsum.photos/250/150"} ></Product>
          <Product nameProduct={"Tenis Nike"} priceProduct={"$2350.99"} srcImageProduct={"https://picsum.photos/250/150"} ></Product>

          <Product nameProduct={"Tenis Nike"} priceProduct={"$2350.99"} srcImageProduct={"https://picsum.photos/250/150"} ></Product>
          <Product nameProduct={"Tenis Nike"} priceProduct={"$2350.99"} srcImageProduct={"https://picsum.photos/250/150"} ></Product>
          <Product nameProduct={"Tenis Nike"} priceProduct={"$2350.99"} srcImageProduct={"https://picsum.photos/250/150"} ></Product>
        </Galery>
        <Footer></Footer>
      </>
  );

}


