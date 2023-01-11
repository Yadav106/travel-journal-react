import './App.css'
import Navbar from './Navbar'
import Card from "./Card";
import data from "./data"

function App() {
  const cardData = data.map(x => {
    return (
      <Card 
        key={x.id}
        {...x}

      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <div className="card--container">
          {cardData}
      </div>
    </div>
  )
}

export default App
