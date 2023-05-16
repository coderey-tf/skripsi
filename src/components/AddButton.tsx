import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function AddButton() {
  return (
    <div>
      <button className="w-auto flex justify-center items-center bg-green-500 gap-1 p-2 font-semibold text-white rounded-md hover:bg-green-700">
        <PlusCircleIcon title="Tambah Data" width={20} height={20} />
        Tambah Data
      </button>
    </div>
  );
}
