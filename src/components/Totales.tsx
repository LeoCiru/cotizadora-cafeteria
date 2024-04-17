import { useMemo } from "react";
import { OrderItem } from "../types"
import { formatearMoneda } from "../helpers/formatearMoneda";

type TotalesProps = {
  orden: OrderItem[],
  propina: number
}

function Totales({orden, propina}: TotalesProps) {
  const subtotal = useMemo(() => orden.reduce((total, actual) => total + (actual.price * actual.quantity), 0), [orden]);
  const propinaMonto = useMemo(() => subtotal * propina, [subtotal, propina]);
  const totalAPagar = useMemo(() => subtotal + propinaMonto, [subtotal, propinaMonto]);
  

  return (
    <>
      <h2>Totales y Propinas</h2>

      <p><span>Subtotal a pagar: </span>{formatearMoneda(subtotal)}</p>
      <p><span>Propina: </span>{formatearMoneda(propinaMonto)}</p>
      <p><span>Total a pagar: </span>{formatearMoneda(totalAPagar)}</p>
    </>
  )
}

export default Totales