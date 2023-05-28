import './ProductoDescription.css';

import Navbar from "./Navbar.jsx";
import { useParams } from "react-router-dom";

export default function ProductDescription() {

  const {nameProduct, priceProduct, srcImageProduct} = useParams();

  return(
      <>
        <Navbar></Navbar>
        <article className={"product__description__card"}>
          <section>
            <img src={`${srcImageProduct}`} alt={"Imagen del Producto"} />
          </section>

          <section>
            <h1>{nameProduct} </h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias architecto corporis expedita in ipsa maxime perferendis porro quaerat quia, sunt velit! A alias architecto asperiores aspernatur consequatur corporis cum cumque deleniti deserunt dignissimos dolorem ea eaque earum eveniet fuga illum impedit laboriosam magni maxime minima minus optio pariatur perferendis porro quibusdam quis quisquam reprehenderit rerum sint sunt, suscipit tempora temporibus totam velit vero vitae voluptates. Accusamus, ad doloremque eaque esse explicabo facere fuga fugiat fugit, illo iste iure iusto labore molestiae nobis officia quidem totam vero! Animi assumenda aut facilis illo, placeat praesentium repellendus tenetur voluptate. Autem cumque deserunt doloremque doloribus eos fugit hic inventore ipsam iure nostrum obcaecati quam recusandae, rem sit voluptate? Accusantium, beatae culpa doloribus, eos eum exercitationem, inventore nostrum officia omnis quam quia quisquam vitae. </span>
            <div>
              <span>{priceProduct}</span>
              <button> <i className="fa-solid fa-cart-shopping"></i> Buy Now!</button>
            </div>
          </section>
        </article>
      </>
  );
}