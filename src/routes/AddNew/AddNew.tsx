import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { TransformerForm } from '../../components/TransformerForm';
import { VehicleTree } from '../../utils/VehicleTree';

export function AddNew() {
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
  return (
    <>
      <Header />
      <TransformerForm vehicleTypes={vehicleTypes as VehicleTree} />
    </>
  );
}