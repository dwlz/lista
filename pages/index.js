import react from "react";
import { useEffect, useState } from "react"
import apps from './_apps';

function Home(){
    /*const [money, setMoney] = useState(0)

  const Aumentar = () => {
        setMoney(money + 1);
    }
   const Diminuir = () => {
            setMoney(money - 1);
    }

    return(
        <div>
            <h1>Aumentar e Diminuir</h1>
            <p>Dinheiro: ${money}</p>
            <button
            onClick={Aumentar}
            >Aumentar</button>
            <button
            onClick={Diminuir}
            >Diminuir</button>
        </div>
    )*/
        
            /*const [value, updateValue] = useState(0);
            const [multi, updateMulti] = useState(0);
            const [value2, updateValue2] = useState(0);

            useEffect( ()=>{
                updateMulti(value * value2);
            })
            useEffect(()=>{
                updateMulti(value2 * value);

            })
            const clear = () =>{
                updateValue("");
                updateValue2("");
            }


    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Multiplicador</h3>
            </div>
            <p className={styles.total}>Resposta: {multi}</p>
            <input
            className={styles.input}
            type="number"
            value={value}
            onChange={(e)=>{updateValue(e.target.value)}}
            />
            <br/>
            <span className={styles.span}>X</span>
            <input
            className={styles.input}
            type="number"
            value={value2}
            onChange={(e)=>{updateValue2(e.target.value)}}
            />
            <br/>
            <button
            className={styles.button}
            onClick={clear}
            >Limpar</button>
        </div>
            )*/


        const [input, setInput] = useState('')
        const [compras, setCompras] = useState({
            tarefas:[{
                id:1,
                tarefa:"Estudar"
            },{
                id:2,
                tarefa:"Tomar banho"
            }
            ]
        })

        
        const lista = compras.tarefas.map( item => {
            return (<li key={item.id}>{item.tarefa}</li>);
        })
        
        
        const getValue = () =>{
            if(input.length > 0){
            compras.tarefas.push({id:compras.tarefas.length + 1,
            tarefa: input})
            console.log(compras)
            setInput('')
        }else{
            alert('Digite algo no campo!')
        }
            
        }
        
        const remove = () => {
           compras.tarefas.splice(0, 1)
           console.log(compras)
        }
        


               
            return(
                <div className="main">
                    <h4 className="title">Lista de Tarefas</h4>
                        <div className="containerInput">
                    
                            <input 
                            type="text"
                            placeholder={"Digite uma tarefa!"}
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            />
                            <button
                            className="button"
                            onClick={getValue}
                            >+</button>
                            <button
                            className="button"
                            onClick={remove}
                            >-</button>
                        </div>
                    <div className="lista">
                        <ol>
                            {lista}
                        </ol>
                    
                    </div>
                </div>
            )
}

export default Home