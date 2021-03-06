import { useHistory } from "react-router-dom";
import './list.css';

type IListProps = {
  transformers: Array<ITransformer>;
  update: number;
  setUpdate: Function;
}

export function List( {transformers, update, setUpdate}: IListProps ) {
  let history = useHistory();
  function handleEdit(id: number) {
    history.push(`/edit/${id}`);
  }
  function handleDelete(id: number) {
    fetch(`http://localhost:3004/transformers/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE",
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
    setTimeout(() => { setUpdate(update+1); }, 200);
  }
  function handleOnChange( e: React.ChangeEvent<HTMLSelectElement>, transformer: ITransformer) {
    fetch(`http://localhost:3004/transformers/${transformer.id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify({
        status: e.target.value
      })
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
    setTimeout(() => { setUpdate(update+1); }, 200);
  }
  const listOfTransformers = transformers.map((transformer)=> {
    const gear = transformer.gear.map((item) => {
      return <span className="table__gear">{item}</span>
    });
    console.log(gear);
    
    const tableRow = (
      <tr key={transformer.id} className="table__body-row">
        <td>{transformer.name         }</td>
        <td>{transformer.vehicleGroup }</td>
        <td>{transformer.vehicleType  }</td>
        <td>{transformer.vehicleModel }</td>
        <td className="table__gear-outer">{gear}</td>
        <td>{transformer.status       }</td>
        <td>
          <select name="status" id="status" required onChange={(e) => handleOnChange(e, transformer)} value={transformer.status}>
            <option value="OK">OK</option>
            <option value="INJURED">INJURED</option>
            <option value="MIA">MIA</option>
          </select>
        </td>
        <td>
          <button className="table__button" onClick={() => handleEdit(transformer.id)}>
            Edit
          </button>
          <button className="table__button" onClick={() => handleDelete(transformer.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
    return tableRow;
  });
  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          <th>Name</th>
          <th>Vehicle Group</th>
          <th>Vehicle Type</th>
          <th>Vehicle model</th>
          <th>Gear</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {listOfTransformers}
      </tbody>
    </table>
  );
}