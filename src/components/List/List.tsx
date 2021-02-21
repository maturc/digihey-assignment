import React from 'react';

type IListProps = {
  transformers: Array<ITransformer>;
}

export function List( {transformers}: IListProps ) {
  const listOfTransformers = transformers.map((transformer)=> {
    const tableRow = (
      <tr>
        <td>{transformer.name         }</td>
        <td>{transformer.vehicleGroup }</td>
        <td>{transformer.vehicleType  }</td>
        <td>{transformer.vehicleModel }</td>
        <td>{transformer.gear         }</td>
        <td>{transformer.status       }</td>
      </tr>
    );
    return tableRow;
  });
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Vehicle Group</th>
        <th>Vehicle Type</th>
        <th>Vehicle model</th>
        <th>Gear</th>
        <th>Status</th>
      </tr>
      {listOfTransformers}
    </table>
  );
}