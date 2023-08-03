import Card from "@/component/Card";
import CatagoryHome from "@/component/HomePage/Catagory";
import HeroSection from "@/component/HomePage/HeroSection";
// import CatagoryHome from "@/component/Homepahe/Catagory";
// import HeroSection from "@/component/Homepahe/HeroSection";
import RootLayout from "@/component/layouts/RootLayout";
import { getProductsCatagoriSuccess } from "@/redux/features/productCatagory/productCatagorySlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

const HomePage = ({ products }) => {

  const dataSix = products.data.slice(0, 6);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (products) {
      dispatch(getProductsCatagoriSuccess(products.data));
    }
  }, [products, dispatch]);


  return (
    <div>
      <HeroSection />
      <CatagoryHome />
      <div className="container mx-auto my-14">
        <div className="text-center">
          <h1 className="text-4xl my-3 mb-5 font-bold">Featured Products</h1>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {
            dataSix.map(product => <Card product={product} key={product._id} />)
          }
        </div>
      </div>
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://pc-bd.vercel.app/api/v1/product/?limit=50')
  const data = await res.json()
  return { props: { products: data }, revalidate: 10 }
}
