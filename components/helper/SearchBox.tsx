import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { SearchIcon } from 'lucide-react'
import { Input } from '../ui/input'

const SearchBox = () => {
  return (
   <Dialog>
    <DialogTrigger>
        <SearchIcon cursor={"pointer"} size={26}/>
    </DialogTrigger>
    <DialogContent>
        <form>
            <input type='text' placeholder='Search products' className='block w-full bg-gray-100 rounded-lg px-6 py-3 mt-4 outline-none'/>
        </form>
    </DialogContent>
   </Dialog>
  )
}

export default SearchBox