import Counter from "./components/Counter"
import FetchAPI from "./components/FetchAPI"
import { useSelector } from "react-redux"


function App() {
  const value = useSelector((state)=>state.counter.count)
  const data = useSelector(state=>state.fetchapi.products)
  
  return (
    <div>
      <Counter/>
      <p>count : {value}</p>
      <br />
      <br />
      <FetchAPI/>
      {
        data.map((eachData)=><p key={eachData.id}>{eachData.name}</p>)
      } 
    </div>
  )
}

export default App
