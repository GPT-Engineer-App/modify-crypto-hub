import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchTopCryptos = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const CryptoList = ({ onSelectCrypto }) => {
  const { data: cryptos, isLoading, error } = useQuery({
    queryKey: ['topCryptos'],
    queryFn: fetchTopCryptos,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Top Cryptocurrencies</h2>
      <ul>
        {cryptos.map((crypto) => (
          <li
            key={crypto.id}
            className="flex items-center justify-between py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectCrypto(crypto.id)}
          >
            <div className="flex items-center">
              <img src={crypto.image} alt={crypto.name} className="w-8 h-8 mr-2" />
              <span>{crypto.name}</span>
            </div>
            <span>${crypto.current_price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;
