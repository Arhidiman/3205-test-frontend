import { useState, useEffect } from "react"
import { getAllUrls } from "../ApiClient/ApiClient"
import type { IUrlDto } from "../ApiClient/dto"

interface IFetchUrls {
    urls: IUrlDto[],
    loading: boolean,
    error: string | null,
    refetch: () => void

}

export const useFetchUrls = (): IFetchUrls => {

    const [urls, setUrls] = useState<IUrlDto[] | []>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

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

    useEffect(() => {
        useFetchUrls()
    }, [JSON.stringify(urls)])

    return { urls, loading, error, refetch: useFetchUrls}

}