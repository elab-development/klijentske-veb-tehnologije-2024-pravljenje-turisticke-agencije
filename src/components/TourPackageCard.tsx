import React from 'react';
import TourPackage from '@/models/TourPackage';

interface TourPackageCardProps {
  tourPackage: TourPackage;
}

const TourPackageCard: React.FC<TourPackageCardProps> = ({ tourPackage }) => {
  return (
    <div className="card">
      <img src={tourPackage.imageUrl} alt={tourPackage.name} />
      <h2>{tourPackage.name}</h2>
      <p>{tourPackage.description}</p>
      <p>{tourPackage.getSummary()}</p>
    </div>
  );
};

export default TourPackageCard;
