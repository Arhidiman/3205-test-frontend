import { useState, useEffect } from "react"
import { getAllUrls } from "../ApiClient/ApiClient"
import type { IUrlDto } from "../ApiClient/dto"

interface IFetchUrls {
    urls: IUrlDto[],
    loading: boolean,
    error: string | null,
}

export const useFetchUrls = (): IFetchUrls => {

    const [urls, setUrls] = useState<IUrlDto[] | []>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {

        const useFetchUrls = async () => {
            try {
                const data = await getAllUrls()
                setUrls(data)
            } catch(err: any) {
                setError(err?.message || 'Не удалось загрузить ссылки') 
            } finally {
                setLoading(false)
            }
        }      

        useFetchUrls()
    }, [])

    return { urls, loading, error}

}