import { MenuItem, OrderItem } from "../types";
import { formatearMoneda } from "../helpers/formatearMoneda";
import Propinas from "../components/Propinas";
import Totales from "../components/Totales";

type FacturaProps = {
    orden: OrderItem[]
    eliminarItem: (id: MenuItem['id']) => void
    setPropina: React.Dispatch<React.SetStateAction<number>>
    propina: number
}

function Factura({orden, eliminarItem, propina, setPropina}: FacturaProps) {
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

                    <Propinas
                        setPropina={setPropina}
                    />

                    <Totales
                        orden={orden}
                        propina={propina}
                    />
                </div>

            ) : (
                <h2 className="sin-articulos">Agregar artículos</h2>
            )}
        </>
    )
}

export default Factura;