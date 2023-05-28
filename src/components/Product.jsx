import './Product.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ProductDescription from "./ProductDescription.jsx";

export default function Product({nameProduct, priceProduct, srcImageProduct}) {

  const [isFavorite, setFavorite] = useState(false);

  const showFavorite = () => {
    setFavorite(!isFavorite);
  }

  return(
      <article className={"product__card"}>
        <div className={"image__and__cart"}>
          <i className="fa-solid fa-cart-shopping"></i>
          <img src={`${srcImageProduct}`} />
        </div>

        <Link to={{
          pathname: 'ProductDescription',
          search: `?name=${nameProduct}`
        }}
        >{nameProduct}</Link>

        <div className={"price__and__favorite"}>
          <span>{priceProduct}</span>

          {   isFavorite ?
              <i className="fa-solid fa-heart isFavorite" onClick={showFavorite} ></i> :
              <i className="fa-regular fa-heart" onClick={showFavorite}></i>
          }
        </div>
      </article>
  );
}