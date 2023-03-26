import Button from "./components/Button/Button"
import Cards from "./components/Cards/Cards"
import Header from "./components/Header/Header"


function App() {

  return (
    <div className="App">
      <Header></Header>
      <Button>
        Sort by date
      </Button>
      <Cards></Cards>
    </div>
  )
}

export default App
