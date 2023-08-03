import CatagoryCard from "./CatagoryCard";

const CatagoryHome = () => {
     const computerComponents = [
          "CPU",
          "Motherboard",
          "RAM",
          "PowerSupplyUnit",
          "StorageDevice",
          "Monitor",
     ];

     return (
          <div className="container mx-auto p-2">
               <div className="text-center">
                    <h1 className="text-2xl my-20"> Category</h1>
               </div>
               <div className="">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4">
                         {computerComponents.map((category, i) => (
                              <CatagoryCard category={category} key={i} />
                         ))}
                    </div>
               </div>
          </div>

     );
};

export default CatagoryHome;