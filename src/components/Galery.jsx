import './Galery.css';
export default function Galery({nameGalery, children}) {
  return(
      <section className={"galery"}>
        <h1>{nameGalery}</h1>
        <div className={"galery__section"}>
          {children}
        </div>
      </section>
  );
}