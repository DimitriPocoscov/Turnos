import './App.css'
import { loadData,saveData,clearData } from './LocalStorage/useLocalStorage'
import { useState } from 'react'
import { Currela } from './Currela/Currela.jsx'
import { AnadeCurrela } from './Currela/Currela.jsx'

function App() {

  const [currelas, setCurrelas] = useState(loadData())

  function eliminaCurrela(trabajador) {
    let filtrado = currelas.filter(
    (currela) => currela != trabajador
    )
    setCurrelas(filtrado)
    saveData(filtrado)
  }
  function anadeCurrela(trabajador) {
    let filtrado = [...currelas,trabajador]
    setCurrelas(filtrado)
    saveData(filtrado)
  }

  return (

    <>
      {
        currelas.map(
          (currela,index)=> 
            <Currela 
              nombre = {currela} 
              key={index} 
              manageErase = {
                () => {
                  eliminaCurrela(currela)
                }
              }
            />
        )
        
      }
      <AnadeCurrela  
        manageAdd = {
        anadeCurrela
        }
      />
    </>
  )
}

export default App
