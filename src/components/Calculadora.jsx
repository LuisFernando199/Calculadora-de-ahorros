import React, { useState } from "react";
import "../App.css";
import euro from "../assets/euro.svg";

function Calculadora() {
  const [sueldo, setSueldo] = useState("");
  const [porcentajeAhorro, setPorcentajeAhorro] = useState(30);
  const [porcentajeGastos, setPorcentajeGastos] = useState(50);
  const [ahorroMensual, setAhorroMensual] = useState(0);
  const [gastosBasicos, setGastosBasicos] = useState(0);
  const [gastosPersonales, setGastosPersonales] = useState(0);
  const [mostrarMensajes, setMostrarMensajes] = useState(false);

  const calcularAhorroMensual = () => {
    const sueldoNumerico = parseFloat(sueldo);
    if (sueldoNumerico) {
      const ahorro = sueldoNumerico * (porcentajeAhorro / 100);
      const gastosBasicos = sueldoNumerico * (porcentajeGastos / 100);
      const gastosPersonales =
        sueldoNumerico * (1 - (porcentajeAhorro + porcentajeGastos) / 100);
      setAhorroMensual(ahorro.toFixed(2));
      setGastosBasicos(gastosBasicos.toFixed(2));
      setGastosPersonales(gastosPersonales.toFixed(2));
      setMostrarMensajes(true);
    }
  };

  const handleSueldoClick = (e) => {
    e.target.select();
  };

  return (
    <div className="container">
      <div className="calculadora">
        <h2>Calculadora de ahorro</h2>
        <form>
          <label>Sueldo:</label>
          <input
            type="number"
            value={sueldo}
            onChange={(e) => setSueldo(e.target.value)}
            onClick={handleSueldoClick}
          />

          <label>Porcentaje de ahorro:</label>
          <input
            type="number"
            value={porcentajeAhorro}
            onChange={(e) => setPorcentajeAhorro(e.target.value)}
            disabled
          />

          <label>Porcentaje de gastos Básicos:</label>
          <input
            type="number"
            value={porcentajeGastos}
            onChange={(e) => setPorcentajeGastos(e.target.value)}
            disabled
          />

          <button type="button" onClick={calcularAhorroMensual}>
            Calcular
          </button>
          {mostrarMensajes && (
            <>
              <p>
                Ahorro:
                <span>
                  {" "}
                  {ahorroMensual}
                  <img src={euro}></img> Méteme a la hucha
                </span>
              </p>

              <p>
                Gastos básicos:
                <span>
                  {gastosBasicos}
                  <img src={euro}></img> Sobrevive conmigo
                </span>
              </p>

              <p>
                Gastos personales:{" "}
                <span>
                  {gastosPersonales}
                  <img src={euro}></img> Sácame en metálico
                </span>
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Calculadora;
