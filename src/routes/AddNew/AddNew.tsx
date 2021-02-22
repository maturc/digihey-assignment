import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { TransformerForm } from '../../components/TransformerForm';
import { VehicleTree } from '../../utils/VehicleTree';

export function AddNew() {
  return (
    <>
      <Header />
      <TransformerForm />
    </>
  );
}