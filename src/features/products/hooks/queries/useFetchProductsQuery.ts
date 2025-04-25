
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../../api/fetchProducts'


const useFetchProductsQuery = () => {
    const { error, data, refetch, isFetching } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })
    return { isFetching, error, data, refetch }
}

export default useFetchProductsQuery