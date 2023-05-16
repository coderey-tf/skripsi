export default function Dashboard() {
  const datas = [
    {
      name: "Total Data Universitas / Alternatif",
      hasil: "123",
    },
    {
      name: "Total Data Kriteria",
      hasil: "234",
    },
    { name: "Total Data Perhitungan", hasil: "85485" },
  ];
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <div className="flex flex-col  md:flex-row items-center justify-between mt-4 gap-8">
        {datas.map((data, i) => (
          <div
            key={i}
            className="card card-side bg-amber-300 shadow-xl grow w-full "
          >
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
              <p>{data.hasil}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
