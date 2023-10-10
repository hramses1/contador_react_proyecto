
import "../styles/Contador.css";

export function Contador( props ){
  return(
    <div className="contador">
      {props.numClics}
    </div>
  );
}