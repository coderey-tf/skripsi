import { DocumentPlusIcon } from "@heroicons/react/24/solid";

export default function ImportButton() {
  return (
    <div>
      <button className="w-auto flex justify-center items-center bg-blue-500 gap-1 p-2 font-semibold text-white rounded-md hover:bg-blue-700">
        <DocumentPlusIcon title="Import Data" width={20} height={20} />
        Import Data
      </button>
    </div>
  );
}
