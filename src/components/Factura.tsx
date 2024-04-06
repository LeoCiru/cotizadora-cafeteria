import { MenuItem, OrderItem } from "../types";
import { formatearMoneda } from "../helpers/formatearMoneda";

type FacturaProps = {
    orden: OrderItem[]
    eliminarItem: (id: MenuItem['id']) => void
}

function Factura({orden, eliminarItem}: FacturaProps) {
    return (
        <>
            {orden.length > 0 ? (
                <div className="contenedor-factura">
                <h2>Consumo</h2>
                    <div className="contenedor-items">
                    {orden.map(itemAgregado => (
                        <div 
                            className="item-agregado"
                            key={itemAgregado.id}
                        >
                            <div>
                                <p>{itemAgregado.name} - {formatearMoneda(itemAgregado.price)}</p>
                                <span>{itemAgregado.quantity} - {formatearMoneda(itemAgregado.price * itemAgregado.quantity)}</span>
                            </div>

                            <button
                                onClick={() => eliminarItem(itemAgregado.id)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                    </div>
                </div>
            ) : (
                <p>Agregar artículos</p>
            )}
        </>
    )
}

export default Factura;