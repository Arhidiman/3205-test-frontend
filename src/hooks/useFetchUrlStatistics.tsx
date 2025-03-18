import { useState, useEffect } from "react"
import { getUrlStatistics } from "../ApiClient/ApiClient"
import type { IUrlStatisticsDto } from "../ApiClient/dto"

interface IFetchUrls {
    statistics: IUrlStatisticsDto[],
    loading: boolean,
    error: string | null,
    refetch: () => Promise<void>
}

export const useFetchUrlStatistics = (shortUrl: string): IFetchUrls => {

    const [statistics, setStatistics] = useState<IUrlStatisticsDto[] | []>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const useFetchStatistics = async () => {
        try {
            const data = await getUrlStatistics(shortUrl)
            setStatistics(data)
        } catch(err: any) {
            setError(err?.message || 'Не удалось загрузить ссылки') 
        } finally {
            setLoading(false)
        }
    }      

    useEffect(() => {
        useFetchStatistics()
    }, [])

    return { statistics, loading, error, refetch: useFetchStatistics}

}