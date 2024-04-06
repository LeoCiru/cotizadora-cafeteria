import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem
    agregarItem: (item: MenuItem) => void
}

function MenuItem({item, agregarItem}: MenuItemProps) {
    return(
        <>
          <button
            onClick={() =>agregarItem(item)}
          >
            <p>{item.name}</p>
            <span>${item.price}</span>
          </button>
        </>
    )
}

export default MenuItem;