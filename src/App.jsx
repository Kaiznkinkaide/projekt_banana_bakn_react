import{ useState} from 'react'
import './App.css'
import Main from './components/main/Main'

function App() {
    const [kontostand, setKontostand] = useState(0)



  return (
    <>
    <h1 id='title'>Banana Bank</h1>
    <main>
    <Main
    kontostand={kontostand}
    setKontostand={setKontostand}/>
    </main>


    </>
  )
}

export default App
