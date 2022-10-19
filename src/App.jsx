import Navbar from './components/Navbar'
import Card from './components/Card'
import dataSet from './data'
import './style.css'

function App() {
  const data = dataSet.map(data => {
    return(
      <Card 
        key={data.id}
        {...data}
      />
    )
  })
  return(
    <>
      <Navbar />
      <div className="card-list">
        {data}
      </div>
    </>
  )
}

export default App
