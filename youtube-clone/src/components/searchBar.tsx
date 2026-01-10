import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export const SearchBar=()=>{
    return <div>
  <div className="flex items-center justify-center w-full">
      <div className="flex w-full max-w-xl">
        {/* Input field */}
        <input type="text" placeholder="Search" className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500" />

        {/* Search button */}
        <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
</div>
  
}