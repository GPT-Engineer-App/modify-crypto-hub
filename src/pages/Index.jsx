import { useState } from 'react';
import Header from '../components/Header';
import CryptoList from '../components/CryptoList';
import CryptoChart from '../components/CryptoChart';

const Index = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CryptoList onSelectCrypto={setSelectedCrypto} />
          <CryptoChart cryptoId={selectedCrypto} />
        </div>
      </main>
    </div>
  );
};

export default Index;
