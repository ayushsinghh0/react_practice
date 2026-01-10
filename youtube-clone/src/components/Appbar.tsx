import { SearchBar } from "./searchBar"

export  const AppBar=()=>{
 return <div className="flex  justify-between pt-1 p-3">
{/*     <img src={"./download.png"}></img>
 */}    <div className="text-md inline-flex items-center pb-2">
        Youtube
    </div>
    <div>
        <SearchBar></SearchBar>
    </div>
    <div>
        sign in
    </div>
    
 </div>
}