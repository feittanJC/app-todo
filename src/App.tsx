import { useState } from "react"
import { Todos } from "./components/Todos"

const mockTodos = [
  {
    id:'1',
    title:'Hacer un proyecto con Python',
    completed:false  
  },
  {
    id:'2',
    title:'Descargar el ISO de Windows 10 y 11',
    completed:false
  },
  {
    id:'3',
    title:'Recoger el Case',
    completed:false
  }
]


const App = (): JSX.Element => {

  const [todos] = useState(mockTodos)



  return (
    <div className="todoapp">
      <Todos todos={todos}/>
    </div>
       
  )
}

export default App
