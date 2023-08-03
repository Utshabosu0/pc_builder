import CardDetails from "@/component/CardDetails";
import RootLayout from "@/component/layouts/RootLayout";
import { useRouter } from "next/router";
const ProductDetail = ({ product }) => {
     const router = useRouter();
     const productDetails = product.data
     return (
          <div>
               <CardDetails productDetails={productDetails} />
          </div>
     );
};

export default ProductDetail;



ProductDetail.getLayout = function getLayout(page) {
     return (
          <RootLayout>{page}</RootLayout>
     )
}

export async function getStaticPaths() {
     const res = await fetch(`https://pc-bd.vercel.app/api/v1/product/?limit=50`)
     const products = await res.json()

     const paths = products.data.map((product) => ({
          params: { productId: product._id },
     }))
     return { paths, fallback: false }
}


export const getStaticProps = async (context) => {
     const { params } = context
     const res = await fetch(`https://pc-bd.vercel.app/api/v1/product/${params.productId}`)
     const data = await res.json()
     return { props: { product: data } }
}
