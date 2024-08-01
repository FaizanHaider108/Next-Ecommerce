import { getAllCategory} from "@/Request/requests"

const Category = async() => {
const categories: string[] = await getAllCategory();
  return (
    <div className="pt-16 pb-12">
        
        {/* Grid */}
       
    </div>
  )
}

export default Category