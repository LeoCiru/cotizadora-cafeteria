import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import Factura from "./components/Factura";
import MenuItem from "./components/MenuItem";

function App() {
  const { agregarItem, orden, propina, setPropina, eliminarItem, enviarOrden } = useOrder()
  return (
    <>
      <header>
        <h1>Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="contenedor">
        <div className="menu">
          <h2>Menú</h2>
          
          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              agregarItem={agregarItem}
            />
          ))}
        </div>

        <div className="factura">
          <Factura
            orden={orden}
            eliminarItem={eliminarItem}
            setPropina={setPropina}
            propina={propina}
            enviarOrden={enviarOrden}
          />
        </div>
        
      </main>
    </>
  )
}

export default App
