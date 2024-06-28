// src/components/ArrangementList.tsx

import React from 'react'; // Uvozamo samo React
import { useState } from 'react'; // Uvozamo useState hook
import '../styles/globals.css'; // Uvoz globalnog stila

interface Arrangement {
  id: number;
  title: string;
  description: string;
  price: number;
}

const initialArrangements: Arrangement[] = [
  { id: 1, title: 'Weekend Getaway', description: 'Relaxing weekend in a cozy resort', price: 200 },
  { id: 2, title: 'Adventure Trek', description: 'Exciting trekking adventure in the mountains', price: 300 },
  { id: 3, title: 'City Tour', description: 'Guided tour through historical landmarks', price: 150 },
  { id: 4, title: 'Beach Vacation', description: 'Sun, sand, and relaxation by the beach', price: 250 },
];

const ArrangementList: React.FC = () => {
  const [arrangements, setArrangements] = useState<Arrangement[]>(initialArrangements);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredArrangements, setFilteredArrangements] = useState<Arrangement[]>(initialArrangements);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredArrangements(arrangements);
    } else {
      const filtered = arrangements.filter(arrangement =>
        arrangement.title.toLowerCase().includes(term) ||
        arrangement.description.toLowerCase().includes(term)
      );
      setFilteredArrangements(filtered);
    }
  };

  return (
    <div className="ArrangementList">
      <input
        type="text"
        placeholder="Search by title or description..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredArrangements.map(arrangement => (
          <li key={arrangement.id}>
            <div>Title: {arrangement.title}</div>
            <div>Description: {arrangement.description}</div>
            <div>Price: ${arrangement.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrangementList;
