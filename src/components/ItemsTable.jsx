import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";

export default function ItemsTable() {
  const { items } = useStock();

  return (
    <div className="divTable">
      <table className="tabelaItens">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Em Estoque</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="fitContent">
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity} unid.</td>
              <td>{item.category}</td>
              <td className="tdBtn">
                <Link
                  to={`/items/${item.id}`}
                  className="button is-primary is-small"
                >
                  Ver
                </Link>
                <Link
                  to={`/items/${item.id}/update`}
                  className="button is-small"
                >
                  Atualizar
                </Link>
                <DeleteButton itemName={item.name} itemId={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
