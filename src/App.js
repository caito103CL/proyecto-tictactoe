import React, { useState }  from 'react';

function Cuadrado({value, clicCuadrado}){
  return <button className="square" onClick={clicCuadrado}>{value}</button>
}

export default function Board() {

  const [cuadrados, setCuadrados] = useState(Array(9).fill(null));

  function handleClick(i){
    let siguientesCuadrados= cuadrados.slice();
    siguientesCuadrados[i] = "X";
    setCuadrados(siguientesCuadrados);
  }

  return (
    <React.Fragment>
      <div className="board-row">
        <Cuadrado value={cuadrados[0]} clicCuadrado={()=>handleClick(0)}/>
        <Cuadrado value={cuadrados[1]} clicCuadrado={()=>handleClick(1)}/>
        <Cuadrado value={cuadrados[2]} clicCuadrado={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Cuadrado value={cuadrados[3]} clicCuadrado={()=> handleClick(3)}/>
        <Cuadrado value={cuadrados[4]} clicCuadrado={()=> handleClick(4)}/>
        <Cuadrado value={cuadrados[5]} clicCuadrado={()=> handleClick(5)}/>
      </div>
      <div className="board-row">
        <Cuadrado value={cuadrados[6]} clicCuadrado={()=> handleClick(6)}/>
        <Cuadrado value={cuadrados[7]} clicCuadrado={()=> handleClick(7)}/>
        <Cuadrado value={cuadrados[8]} clicCuadrado={()=> handleClick(8)}/>
      </div>
    </React.Fragment>
  );
}