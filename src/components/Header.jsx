import { Coins } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex items-center">
        <Coins className="h-8 w-8 text-blue-500 mr-4" />
        <h1 className="text-2xl font-bold text-gray-800">CryptoTracker</h1>
      </div>
    </header>
  );
};

export default Header;
