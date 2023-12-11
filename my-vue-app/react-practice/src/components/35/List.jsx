import React, { useState } from "react";

// imate prop koji se zove data koji je arraj objekata
// i morate da napravite da je svaki list item selectable
// znaci da vam treba state koji ovo snima
// na click list itema se menja chekcbox vrednost tog itema

// const data = [
//   { id: 1, value: "my text 1" },
//   { id: 2, value: "my text 2" },
//   { id: 3, value: "my text 3" },
//   { id: 4, value: "my text 4" },
//   { id: 5, value: "my text 5" },
// ];
function List(props) {
  const { data } = props;
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (id) => {
    // Kopirajte trenutni niz selektovanih stavki kako biste izbjegli izmjenu originalnog stanja
    const updatedSelectedItems = [...selectedItems];

    // Provjerite da li je stavka već selektovana
    const selectedIndex = updatedSelectedItems.indexOf(id);

    // Ako jeste, uklonite je; inače, dodajte je
    if (selectedIndex !== -1) {
      updatedSelectedItems.splice(selectedIndex, 1);
    } else {
      updatedSelectedItems.push(id);
    }

    // Postavite novo stanje selektovanih stavki
    setSelectedItems(updatedSelectedItems);
  };

  if (!Array.isArray(data)) {
    console.error("Data nije niz!");
    return null; // Možete dodati odgovarajući fallback, poruku ili prikazati ništa
  }
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleItemClick(item.id)}
              />
              {item.value}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
