import { useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
  stock: number;
};

export default function ProductDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [stock, setStock] = useState<number>(0);

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5001/products');
    const data = await res.json();
    setProducts(data);
  };

  const addProduct = async () => {
    await fetch('http://localhost:5001/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, stock }),
    });
    setName('');
    setStock(0);
    fetchProducts();
  };

  const deleteProduct = async (id: number) => {
    await fetch(`http://localhost:5001/products/${id}`, {
      method: 'DELETE',
    });
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Inventory Dashboard</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Nama Produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-1 mr-2"
        />
        <input
          type="number"
          placeholder="Stok"
          value={stock}
          onChange={(e) => setStock(parseInt(e.target.value))}
          className="border px-3 py-1 mr-2 w-24"
        />
        <button onClick={addProduct} className="bg-blue-500 text-white px-4 py-1 rounded">
          Tambah
        </button>
      </div>

      <ul className="space-y-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>
              {product.name} — <strong>{product.stock}</strong>
            </span>
            <button
              onClick={() => deleteProduct(product.id)}
              className="text-red-600 hover:underline"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
