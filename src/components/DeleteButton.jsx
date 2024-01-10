import PropTypes from "prop-types";
import useStock from "../hooks/useStock";

DeleteButton.propTypes = {
  itemName: PropTypes.string,
  itemId: PropTypes.number,
};

export default function DeleteButton({ itemName, itemId }) {
  const { deleteItem } = useStock();
  const handleDelete = () => {
    if (confirm(`Tem certeza eu deseja excluir ${itemName}`)) {
      deleteItem(itemId);
    }
  };

  return (
    <button className="button is-danger is small" onClick={handleDelete}>
      Excluir
    </button>
  );
}
