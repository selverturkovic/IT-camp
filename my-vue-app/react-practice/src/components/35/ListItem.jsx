import React from "react";

// jednostavna komponenta koja preko propsa dobija title, selected, handleClick funkciju
// prikazete title kao text, selected vam je vrednost da li je ovaj element selected
// handleClick vam menja da li je item selectovan ili ne.

function ListItem(props) {
  const { title, selected, handleClick } = props;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={props.selected}
          onChange={props.handleClick}
        />
        <p> {props.title}</p>
      </label>
    </div>
  );
}

export default ListItem;
