const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">🏠 PropertyFindr</div>
      <nav className="space-x-4 hidden md:flex">
        <a href="#" className="text-gray-600 hover:text-blue-600">Rooms</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Mansion</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Countryside</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Login</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Sign Up</a>
      </nav>
      <input type="text" placeholder="Search..." className="ml-4 p-2 border rounded-md hidden md:block" />
    </header>
  );
};

export default Header;
