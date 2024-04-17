import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";
import { toast } from "sonner";

function useOrder() {
    const [orden, setOrden] = useState<OrderItem[]>([])
    const [propina, setPropina] = useState(0)

    function agregarItem(item: MenuItem) {

        const itemExiste = orden.find(elemento => elemento.id === item.id);
        
        if (itemExiste) {
            const ordenActualizada = orden.map(itemActualizado => itemActualizado.id === item.id ? {...itemActualizado, quantity: itemActualizado.quantity + 1} : itemActualizado);
            setOrden(ordenActualizada)
        } else {
            const newItem: OrderItem = {...item, quantity: 1};
            setOrden([...orden, newItem])
        }
    }

    function eliminarItem(id: MenuItem['id']) {
        const itemEliminado = orden.filter(elementoEliminado => elementoEliminado.id != id);
        setOrden(itemEliminado);
    }

    function enviarOrden() {
        setOrden([]);
        setPropina(0);

        toast.success("¡Orden enviada!")
    }

    return {
        agregarItem,
        orden,
        propina,
        setPropina,
        eliminarItem,
        enviarOrden
    }
}

export default useOrder