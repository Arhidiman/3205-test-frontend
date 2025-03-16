import { useState, useEffect } from "react"
import { getUrlStatistics } from "../ApiClient/ApiClient"
import type { IUrlStatisticsDto } from "../ApiClient/dto"

interface IFetchUrls {
    statistics: IUrlStatisticsDto[],
    loading: boolean,
    error: string | null,
}

export const useFetchUrlStatistics = (shortUrl: string): IFetchUrls => {

    const [statistics, setStatistics] = useState<IUrlStatisticsDto[] | []>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {

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

        useFetchStatistics()
    }, [])

    return { statistics, loading, error}

}