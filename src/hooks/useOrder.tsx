import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

function useOrder() {
    const [orden, setOrden] = useState<OrderItem[]>([])

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

    return {
        agregarItem,
        orden
    }
}

export default useOrder