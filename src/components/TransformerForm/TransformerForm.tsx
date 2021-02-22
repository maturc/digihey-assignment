import { useEffect, useState } from "react";
import { VehicleTree, Node } from "../../utils/VehicleTree";

type ITransformerForm = {
  initialTransformer?: ITransformer;
}

export function TransformerForm( {initialTransformer}: ITransformerForm ) {
  const [name, setName] = useState<string>(initialTransformer?.name ?? "");
  const [activeGroup, setActiveGroup] = useState<string | undefined>(initialTransformer?.vehicleGroup ?? "Air");
  const [activeType,  setActiveType]  = useState<string | undefined>(initialTransformer?.vehicleType ?? "Plane");
  const [activeModel, setActiveModel] = useState<string | undefined>(initialTransformer?.vehicleModel ?? undefined);
  const [gear, setGear] = useState<string>(initialTransformer?.gear.join(" ") ?? "");
  const [status, setStatus] = useState<string>(initialTransformer?.status ?? "OK");

  const [vehicleTypes, setVehicleTypes] = useState<VehicleTree>();

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await fetch('http://localhost:3004/vehicleTypes');
      const json = await response.json();
      const vehicleTree = new VehicleTree();
      vehicleTree.addFromArray(json);
      setVehicleTypes(vehicleTree);
    };
    fetchTypes();
  }, []);

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
  function handleSubmit(e: React.FormEvent<HTMLFormElement>, method = "POST", id?:number) {
    e.preventDefault();
    const url = id? `http://localhost:3004/transformers/${id}` : `http://localhost:3004/transformers`
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: method,
      body: JSON.stringify({
        name: name,
        vehicleGroup: activeGroup,
        vehicleType: activeType,
        vehicleModel: activeModel,
        gear: gear.split(" "),
        status: status
      })
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
  }
  return (
    <form onSubmit={(e) => initialTransformer? handleSubmit(e, "PATCH", initialTransformer.id) : handleSubmit(e)}>
      <label htmlFor="name">Name (4 to 8 characters):</label>
      <input
        type="text"
        id="name"
        name="name"
        minLength={4}
        maxLength={8}
        size={10}
        required
        onChange={(e) => setName(e.target.value)}
        value={name}
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
        onChange={(e) => setGear(e.target.value)}
        value={gear}
      />
      <label htmlFor="status">Status:</label>
      <select name="status" id="status" required onChange={(e) => setStatus(e.target.value)} value={status}>
        <option value="OK">OK</option>
        <option value="INJURED">INJURED</option>
        <option value="MIA">MIA</option>
      </select>
      <input type="submit"/>
    </form>
  );
}