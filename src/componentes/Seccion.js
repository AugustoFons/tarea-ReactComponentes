
import ListaTarjetas1 from "./Tarjetas1/ListaTarjetas1"
import ListaTarjetas2 from "./Tarjetas2/ListaTarjetas2"

const Seccion = (props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems:"flex-start",
            padding:"50px",
            rowGap:"30px"
        }}>
        <h1 style={{color: "white", }}>Good evening</h1>
        <ListaTarjetas1 lista={props.lista} />
        <h2 style={{color: "white", }}>Recently played</h2>
        <ListaTarjetas2 lista={props.lista} />

        </div>
    )
}



export default Seccion