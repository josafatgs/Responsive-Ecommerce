import './FooterSection.css'
export default function FooterSection({nameSection, children}){
  return(
      <div className={"footer__section"}>
        <h3>{nameSection}</h3>
        {children}
      </div>
  );
}