import { tipOptions } from "../data/db";

type PropinasProps = {
    setPropina: React.Dispatch<React.SetStateAction<number>>
}


function Propinas({setPropina}: PropinasProps) {
  return (
    <>
        <h2>Propina</h2>

        <form>
            {tipOptions.map(opcion => (
                <div key={opcion.id} className="opcion-propina">
                    <label htmlFor={opcion.id}>{opcion.label}</label>

                    <input
                        type="radio"
                        id={opcion.id}
                        name="propina"
                        value={opcion.value}
                        onChange={e =>setPropina(+e.target.value)}
                        />
                </div>
            ))}
        </form>
    </>
  )
}

export default Propinas