type ITransformer = {
  id: number;
  name: string;
  vehicleGroup: string;
  vehicleType: string;
  vehicleModel: string;
  gear: Array<string>; 
  status: string;
}

type IVehicleType = {
  group: string;
  type: string;
  model: string;
}