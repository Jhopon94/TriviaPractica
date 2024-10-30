import React, { useEffect, useState } from "react";
import './carrusel.css';
import { useValor } from "../../valorContexto";

function Carrusel() {

    //contexto para compartir la información a otros componentes
    const {setRespCorrectas, setSiguientePregunta, setExamenTerminado} = useValor();

    const onSeleccRadio = (e) => {
        const textoSelecc = e.target.value;
        setRespSelecc(textoSelecc);

    }

    const onEndAnimation = () => {
        setClasesCartas("cartaPregunta");
    }

    const [clasesCartas, setClasesCartas] = useState("cartaPregunta primeraVez");

    useEffect(() => {
        if (clasesCartas === "cartaPregunta") {
            siguientePregunta();
        }
    }, [clasesCartas]);

    const preguntaUno =
        <div className={clasesCartas} key="cartaPreguntaUno" onAnimationEnd={onEndAnimation} >
            <h2>
                ¿Cuál es la capital de Colombia?
            </h2>
            <div className="contRespuestasUno contRespuestas">
                <div>
                    <input type="radio" name="opcPreguntaUno" id="pregUnoRespUno" value="cali"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregUnoRespUno">Santiago de Cali</label>
                </div>
                <div>
                    <input type="radio" name="opcPreguntaUno" id="pregUnoRespDos" value="cundinamarca"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregUnoRespDos">Cundinamarca</label>
                </div>
                <div>
                    <input type="radio" name="opcPreguntaUno" id="pregUnoRespTres" value="bogota"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregUnoRespTres">Bogotá</label>
                </div>
                <div>
                    <input type="radio" name="opcPreguntaUno" id="pregUnoRespCuatro" value="armenia"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregUnoRespCuatro">Armenia</label>
                </div>
            </div>;
        </div>

    const preguntaDos =
        <div className={clasesCartas} key="cartaPreguntaDos" onAnimationEnd={onEndAnimation}>
            <h2>
                ¿Cuál es el tercer planeta del sistema solar?
            </h2>
            <div className="contRespuestasDos contRespuestas">
                <div>
                    <input type="radio" name="opcPreguntaDos" id="pregDosRespUno" value="mercurio"
                        onChange={onSeleccRadio} ></input>
                    <label htmlFor="pregDosRespUno">Mercurio</label>
                </div>
                <div>
                    <input type="radio" name="opcPreguntaDos" id="pregDosRespDos" value="jupiter"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregDosRespDos">Júpiter</label>
                </div>
                <div>
                    <input type="radio" name="opcPreguntaDos" id="pregDosRespTres" value="neptuno"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregDosRespTres">Neptuno</label>
                </div>
                <div>
                    <input type="radio" name="opcPreguntaDos" id="pregDosRespCuatro" value="tierra"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregDosRespCuatro">Tierra</label>
                </div>
            </div>
        </div>;

    const preguntaTres =
        <div className={clasesCartas} key="cartaPreguntaTres" onAnimationEnd={onEndAnimation}>
            <h2>
                ¿Cuántos departamentos tiene Colombia?
            </h2>
            <div className="contRespuestasTres contRespuestas">
                <div>
                    <input type="radio" name="opcPreguntaTres" id="pregTresRespUno" value="15"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregTresRespUno">15</label>
                </div>
                <div>
                    <input type="radio" name="opcPreguntaTres" id="pregTresRespDos" value="32"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregTresRespDos">32</label>
                </div>
                <div>
                    <input type="radio" name="opcPreguntaTres" id="pregTresRespTres" value="25"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregTresRespTres">25</label>
                </div>
                <div>
                    <input type="radio" name="opcPreguntaTres" id="pregTresRespCuatro" value="8"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregTresRespCuatro">8</label>
                </div>
            </div>
        </div>;

    const preguntaCuatro =
        <div className={clasesCartas} key="cartaPreguntaCuatro" onAnimationEnd={onEndAnimation}>
            <h2>
                ¿Cuál es el ave en el escudo de Colombia?
            </h2>
            <div className="contRespuestasCuatro contRespuestas">
                <div>
                    <input type="radio" name="opcPreguntaCuatro" id="pregCuatroRespUno" value="paloma"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregCuatroRespUno">Paloma</label>
                </div>
                <div>
                    <input type="radio" name="opcPreguntaCuatro" id="pregCuatroRespDos" value="condor"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregCuatroRespDos">Cóndor</label>
                </div>
                <div>
                    <input type="radio" name="opcPreguntaCuatro" id="pregCuatroRespTres" value="perico"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregCuatroRespTres">Perico</label>
                </div>
                <div>
                    <input type="radio" name="opcPreguntaCuatro" id="pregCuatroRespCuatro" value="gaviota"
                        onChange={onSeleccRadio}></input>
                    <label htmlFor="pregCuatroRespCuatro">Gaviota</label>
                </div>
            </div>
        </div>;

    const preguntas = [preguntaUno, preguntaDos, preguntaTres, preguntaCuatro];
    const [preguntaSelecc, setPreguntaSelecc] = useState(0);
    const [respSelecc, setRespSelecc] = useState(undefined);
    const [textoBtn, setTextoBtn] = useState("Siguiente");
    const [btnOff, setBtnOff] = useState(false);
    //array de las 4 calificaciones, se vuelven true al ser correctas
    const [calificaciones, setCalificaciones] = useState([]);

    const btnSiguiente = () => {
        if (preguntaSelecc < 3) { // índice real, se cuenta desde 0
            if (respSelecc === undefined) return;
            else if (respSelecc === "bogota") {
                // guardar respuesta
                calificaciones.push(true);
            }
            else if (respSelecc === "tierra") {
                calificaciones.push(true);
            }
            else if (respSelecc === "32") {
                calificaciones.push(true);
            }
            else {
                calificaciones.push(false);
            }
            console.log(respSelecc);
            setClasesCartas("cartaPregunta girarCarta");
        }
        if (preguntaSelecc === 2) {
            if (respSelecc === undefined) return;
            setTextoBtn("Calificar");
        }
        if (preguntaSelecc === 3) {
            //Ultima Pregunta igual que las otras 3 pero sin animación ni siguiente pregunta
            if (respSelecc === undefined) return;
            if (respSelecc === "condor") {
                calificaciones.push(true);
            }
            else {
                calificaciones.push(false);
            }
            setPreguntaSelecc(preguntaSelecc + 1);
            setBtnOff(true);
            const auxRespCorrect  = CalcularResultado();
            console.log(auxRespCorrect);
            setRespCorrectas(auxRespCorrect);//ENVIAR CANTIDAD RESPUESTAS ACERTADAS
            setExamenTerminado(true);//ENVIAR SEÑAL DE EXAMEN TERMINADO
        }
    }

    function siguientePregunta() {
        if (preguntaSelecc <= 2) { //en la cuarta pregunta no funciona la "siguiente pregunta"
            setSiguientePregunta(true);//ENVIAR SIGUIENTE PREGUNTA TRUE
            const auxSiguiente = preguntaSelecc + 1;
            if (auxSiguiente < 3) setPreguntaSelecc(auxSiguiente);
            if (auxSiguiente === 3) {
                setClasesCartas("cartaPregunta");
                setPreguntaSelecc(auxSiguiente);
            }
        }
    }

    function CalcularResultado(){
        let auxResultado = 0;
        calificaciones.map((valor) => {
            if(valor) auxResultado += 1;
        });
        return auxResultado;
    }

    useEffect(() => { //reiniciar a indefinido la respuesta en cada pregunta
        setRespSelecc(undefined);
    }, [preguntaSelecc]);

    return (
        <div className="carruselHijo">
            {preguntas[preguntaSelecc]}
            <div className="contSiguiente">
                <button onClick={btnSiguiente} disabled={btnOff}>{textoBtn}</button>
            </div>
        </div>
    );
}

export default Carrusel;