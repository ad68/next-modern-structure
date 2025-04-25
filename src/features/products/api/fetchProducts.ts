import { fetchApi } from '@/shared/config/axiosConfig'

export const fetchProducts = async () => {
    const response = await fetchApi.get('https://apitester.ir/api/Products?')
    return response
}