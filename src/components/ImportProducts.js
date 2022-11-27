




    export async function getServerSideProps(context){
        const products = await fetch("http://fakestoreapi.com/products")
                            .then((res) => res.json());
        return { props: {
        products: products,
                }
        }
    
    }
