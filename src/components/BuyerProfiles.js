// src/components/BuyerProfiles.js
import React, { useState } from 'react';

const sampleBuyers = [
  {
    id: 1,
    name: 'Alice Johnson',
    location: 'New York, USA',
    industries: ['Tech', 'Health'],
    budget: '$500K - $1M',
    experience: 'Expert',
    timeframe: '3 months',
    verified: true,
  },
  {
    id: 2,
    name: 'Michael Smith',
    location: 'San Francisco, USA',
    industries: ['Retail', 'Finance'],
    budget: '$200K - $500K',
    experience: 'Intermediate',
    timeframe: '6 months',
    verified: false,
  },
];

function BuyerCard({ buyer, onAccept, onReject }) {
  return (
    <div className="border rounded p-4 shadow mb-4 bg-white">
      <h3 className="text-lg font-semibold">
        {buyer.name}{" "}
        {buyer.verified && (
          <span title="Verified" className="text-green-500">
            ✔️
          </span>
        )}
      </h3>
      <p>📍 {buyer.location}</p>
      <p>Industries: {buyer.industries.join(', ')}</p>
      <p>💰 Budget: {buyer.budget}</p>
      <p>🚀 Experience: {buyer.experience}</p>
      <p>⏳ Timeframe: {buyer.timeframe}</p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => onAccept(buyer.id)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Accept
        </button>
        <button
          onClick={() => onReject(buyer.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Reject
        </button>
      </div>
    </div>
  );
}

function BuyerProfiles() {
  const [buyers, setBuyers] = useState(sampleBuyers);

  const handleAccept = (id) => {
    alert(`Accepted buyer with ID: ${id}`);
  };

  const handleReject = (id) => {
    setBuyers(buyers.filter(b => b.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Potential Buyers</h2>
      {buyers.map(buyer => (
        <BuyerCard
          key={buyer.id}
          buyer={buyer}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      ))}
      {buyers.length === 0 && <p>No more buyers to show.</p>}
    </div>
  );
}

export default BuyerProfiles;
