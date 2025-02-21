import './App.css'
import Card from './Card'

function App() {

  return (
    <>
        <Card 
            title="Card title" 
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            children={ <img src="./src/assets/anything.jpg" className="card-img-top" alt="anything"/> }
        />
        <Card
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
        />
    </>
  )
}

export default App

