import { OrderItem } from "../types";
import { formatearMoneda } from "../helpers/formatearMoneda";

type FacturaProps = {
    orden: OrderItem[]
}

function Factura({orden}: FacturaProps) {
    return (
        <>
            <h2>Consumo</h2>

            <div className="contenedor-factura">
                {orden.map(itemAgregado => (
                    <div 
                        className="item-agregado"
                        key={itemAgregado.id}
                    >
                        <div>
                            <p>{itemAgregado.name} - {formatearMoneda(itemAgregado.price)}</p>
                            <span>{itemAgregado.quantity} - {formatearMoneda(itemAgregado.price * itemAgregado.quantity)}</span>
                        </div>

                        <button>
                            X
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Factura;