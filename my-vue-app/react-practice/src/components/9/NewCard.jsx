const NewCard = ({ renderHeader, renderBody }) => {
  return (
    <div className="newCard">
      {renderHeader && <div className="newCardHeader">{renderHeader}</div>}
      <div className="NewCardBody">{renderBody}</div>
    </div>
  );
};

export default NewCard;
