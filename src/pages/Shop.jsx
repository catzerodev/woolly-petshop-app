import { useProducts } from "../hooks/useProducts";

const Shop = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;