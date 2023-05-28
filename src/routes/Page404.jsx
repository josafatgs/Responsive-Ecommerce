import { useRouteError } from "react-router-dom";
import {Link} from "react-router-dom";

import './Page404.css';
export default function Page404() {

  const error = useRouteError();
  console.error(error);

  return(
      <div className="container">
        <h1>{error.statusText || error.message}</h1>
        <p className="error-code">404</p>
        <p className="error-message">La página que estás buscando no se encuentra.</p>
        <Link to={"/"} className={"btn-back"} >Regresar</Link>
      </div>
  );
}