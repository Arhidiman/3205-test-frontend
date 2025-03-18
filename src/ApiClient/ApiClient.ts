import axios from 'axios';
import { notification } from 'antd';
import type { IShortenUrl } from './dto';

const API_BASE_URL = 'http://localhost:5000'

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

const showErrorNotification = (error: any) => {
    const errorMessage = error?.response?.data || 'Неизвестная ошибка';
    notification.error({
        message: errorMessage,
    })
}

const showSuccessNotification = (message: string) => {
    console.log('notificatin run', message)
    notification.success({
        message,
    })
}

export const shortenUrl = async ({ originalUrl, alias, expiresAt }: IShortenUrl) => {
    try {
        const { data } = await apiClient.post('/shorten', { originalUrl, alias, expiresAt })
        showSuccessNotification('Ссылка успешно создана!')
        return data
    } catch (error) {
        showErrorNotification(error);
        throw error;
    }
}

export const redirectToOriginal = async (shortUrl: string) => {
    try {
        const { data } = await apiClient.get(`/${encodeURIComponent(shortUrl)}`);
        return data
    } catch (error) {
        showErrorNotification(error);
        throw error;
    }
}

export const getUrlInfo = async (shortUrl: string) => {
    try {
        const { data } = await apiClient.get(`/info/${encodeURIComponent(shortUrl)}`);
        return data
    } catch (error) {
        showErrorNotification(error);
        throw error;
    }
}

export const deleteUrl = async (shortUrl: string) => {
    try {
        const { data } = await apiClient.delete(`/delete/${encodeURIComponent(shortUrl)}`);
        notification.success({
            message: 'Успешно',
            description: 'Ссылка удалена',
        });
        return data
    } catch (error) {
        showErrorNotification(error);
        throw error;
    }
}

export const getUrlStatistics = async (shortUrl: string) => {
    try {
        const { data } = await apiClient.get(`/statistics/${encodeURIComponent(shortUrl)}`);
        return data
    } catch (error) {
        showErrorNotification(error);
        throw error;
    }
}

export const getAllUrls = async () => {
    try {
        const { data } = await apiClient.get(`/urls`);
        return data
    } catch (error) {
        showErrorNotification(error);
        throw error;
    }
}