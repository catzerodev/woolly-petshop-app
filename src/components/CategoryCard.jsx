export default function CategoryCard({ title, count, image }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
      
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-medium text-sm">{title}</h3>
          <p className="text-xs text-gray-500">{count}</p>
        </div>

        <span className="text-orange-500 text-lg">→</span>
      </div>
    </div>
  );
}