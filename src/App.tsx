import MenuItem from "./components/MenuItem";
import Factura from "./components/Factura";
import { menuItems } from "./data/db";

function App() {

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
            />
          ))}
        </div>

        <div className="factura">
          <Factura/>
        </div>
        
      </main>
    </>
  )
}

export default App
