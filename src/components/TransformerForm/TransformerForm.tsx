import { useState } from "react";
import { VehicleTree, Node } from "../../utils/VehicleTree";

type ITransformerForm = {
  vehicleTypes: VehicleTree;
}

export function TransformerForm( {vehicleTypes}: ITransformerForm ) {
  const [activeGroup, setActiveGroup] = useState<string | undefined>("Air");
  const [activeType,  setActiveType]  = useState<string | undefined>("Plane");
  const [activeModel, setActiveModel] = useState<string | undefined>(undefined);

  let groupDropdown: any = <option value="loading">Loading</option>;
  let typeDropdown:  any;
  let modelDropdown: any;

  let targetNode: Node;
  if(typeof(vehicleTypes)!=="undefined") {
    targetNode = vehicleTypes.root;
    groupDropdown = targetNode.descendants.map( node => {
      return <option key={node.value} value={node.value}>{node.value}</option>
    })
    if(typeof(activeGroup)!=="undefined") {
      targetNode = targetNode.findDescendant(activeGroup as string) as Node;
      typeDropdown = targetNode.descendants.map( node => {
        return <option key={node.value} value={node.value}>{node.value}</option>
      })
      if(typeof(activeType)!=="undefined") {
        targetNode = targetNode.findDescendant(activeType as string) as Node;
        modelDropdown = targetNode.descendants.map( node => {
          return <option key={node.value} value={node.value}>{node.value}</option>
        })
      }
    }

  }
  return (
    <form>
      <label htmlFor="name">Name (4 to 8 characters):</label>
      <input
        type="text"
        id="name"
        name="name"
        minLength={4}
        maxLength={8}
        size={10}
        required
      />
      <label htmlFor="vehicle-group">Vehicle Group:</label>
      <select name="vehicle-group" id="vehicle-group" required onChange={(e) => { setActiveGroup(e.target.value); setActiveType(undefined); setActiveModel(undefined) }} value={activeGroup}>
        { groupDropdown }
      </select>
      <label htmlFor="vehicle-type">Vehicle Type:</label>
      <select name="vehicle-type" id="vehicle-type" required onChange={(e) => { setActiveType(e.target.value); setActiveModel(undefined) }} value={activeType}>
        { typeDropdown }
      </select>
      <label htmlFor="vehicle-model">Vehicle Model:</label>
      <select name="vehicle-model" id="vehicle-model" required onChange={(e) => setActiveModel(e.target.value)} value={activeModel}>
        { modelDropdown }
      </select>
      <label htmlFor="name">Gear:</label>
      <input
        type="text"
        id="gear"
        name="gear"
        minLength={4}
        maxLength={8}
        size={10}
        required
      />
      <label htmlFor="status">Status:</label>
      <select name="status" id="status" required>
        <option value="ok">OK</option>
        <option value="injured">INJURED</option>
        <option value="mia">MIA</option>
      </select>
      <input type="submit"/>
    </form>
  );
}