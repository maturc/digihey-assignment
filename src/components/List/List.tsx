import { useReducer, useState } from "react"

type IListProps = {
  transformers: Array<ITransformer>;
  update: number;
  setUpdate: Function;
}

export function List( {transformers, update, setUpdate}: IListProps ) {
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
    const tableRow = (
      <tr key={transformer.id}>
        <td>{transformer.name         }</td>
        <td>{transformer.vehicleGroup }</td>
        <td>{transformer.vehicleType  }</td>
        <td>{transformer.vehicleModel }</td>
        <td>{transformer.gear         }</td>
        <td>{transformer.status       }</td>
        <td>
          <select name="status" id="status" required onChange={(e) => handleOnChange(e, transformer)} value={transformer.status}>
            <option value="OK">OK</option>
            <option value="INJURED">INJURED</option>
            <option value="MIA">MIA</option>
          </select>
        </td>
      </tr>
    );
    return tableRow;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Vehicle Group</th>
          <th>Vehicle Type</th>
          <th>Vehicle model</th>
          <th>Gear</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {listOfTransformers}
      </tbody>
    </table>
  );
}