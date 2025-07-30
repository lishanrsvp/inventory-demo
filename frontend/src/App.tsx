import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Inventory Demo System</h1>
      <p className="text-gray-600 mb-8">Proyek demo dengan login dummy, React + NestJS + PostgreSQL</p>
      <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Login Sekarang
      </Link>
    </div>
  );
}

export default App;
