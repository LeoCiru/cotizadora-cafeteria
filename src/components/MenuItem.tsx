import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem
}

function MenuItem({item}: MenuItemProps) {
    return(
        <>
          <button>
            <p>{item.name}</p>
            <span>${item.price}</span>
          </button>
        </>
    )
}

export default MenuItem;