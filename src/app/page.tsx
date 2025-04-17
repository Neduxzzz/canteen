export default function Home() {
  const items = [
    { title: 'Produktai', icon: '📦' },
    { title: 'Sandėlys', icon: '🏬' },
    { title: 'Patiekalai', icon: '🍽️' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded shadow text-center hover:shadow-md cursor-pointer"
        >
          <div className="text-3xl mb-2">{item.icon}</div>
          <div className="text-red-700 text-lg font-bold">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
