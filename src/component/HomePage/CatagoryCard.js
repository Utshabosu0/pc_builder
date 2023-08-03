import Link from "next/link";

const CatagoryCard = ({ category }) => {
     return (
          <div className="card w-48 md:w-52 text-center shadow-xl">
               <div className="btn btn-success">
                    <Link href={`/product/${category}`} className="">{category}</Link>

               </div>
          </div>
     );
};


export default CatagoryCard;
