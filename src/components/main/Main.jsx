import{ useState} from 'react'
import "./main.css"
const Main = ({kontostand, setKontostand}) => {
const [eingabe, setEingabe] = useState("")



const auszahlung = () =>{
    kontostand - eingabe >= 0 
    ? setKontostand(aktuellerKontostand => aktuellerKontostand - Number(eingabe))
    : window.alert("du kannst nichts mehr Abbuchen!")
    setEingabe("")}


const einzahlung = () =>{setKontostand(aktuellerKontostand => aktuellerKontostand + Number(eingabe))
    setEingabe("")
}    

    return (
        <>
        <div className="frame">
        <h2>Mein Girokonto</h2>
        <p className='saldo'>{kontostand}</p>
        <input className='geldbetrag' type="number" 
        name="betrag" 
        value={eingabe}
        id="betrag" 
        placeholder="Betrag in €"
        onChange={(event) =>setEingabe(Number(event.target.value))}/>

        <div>
            <button className='einzahlen' onClick={einzahlung}>Einzahlen</button>
            <button className='auszahlen' onClick={auszahlung}>Auszahlen</button>            
        </div>
        </div>

        </>
     );
}
 
export default Main;