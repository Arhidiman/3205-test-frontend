import axios from 'axios';
import { notification } from 'antd';

const API_BASE_URL = 'http://localhost:5000'; // Укажи свой адрес сервера

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Функция для отображения ошибок
const showErrorNotification = (error: any) => {
    const errorMessage = error?.response?.data || 'Неизвестная ошибка';
    notification.error({
        message: 'Ошибка',
        description: errorMessage,
        duration: 5,
    });
};

// 🔹 Создание короткой ссылки
export const shortenUrl = async (originalUrl: string, alias?: string) => {
    try {
        const { data } = await apiClient.post('/shorten', { originalUrl, alias });
        return data; // Вернет короткий URL
    } catch (error) {
        showErrorNotification(error);
        throw error;
    }
};

// 🔹 Переадресация по короткой ссылке
export const redirectToOriginal = async (shortUrl: string) => {
    try {
        const { data } = await apiClient.get(`/${encodeURIComponent(shortUrl)}`);
        return data; // Вернет оригинальный URL
    } catch (error) {
        showErrorNotification(error);
        throw error;
    }
};

// 🔹 Получение информации о короткой ссылке
export const getUrlInfo = async (shortUrl: string) => {
    try {
        const { data } = await apiClient.get(`/info/${encodeURIComponent(shortUrl)}`);
        return data; // Вернет информацию о ссылке
    } catch (error) {
        showErrorNotification(error);
        throw error;
    }
};

// 🔹 Удаление короткой ссылки
export const deleteUrl = async (shortUrl: string) => {
    try {
        const { data } = await apiClient.delete(`/delete/${encodeURIComponent(shortUrl)}`);
        notification.success({
            message: 'Успешно',
            description: 'Ссылка удалена',
        });
        return data; // Вернет подтверждение удаления
    } catch (error) {
        showErrorNotification(error);
        throw error;
    }
};

// 🔹 Получение статистики по ссылке
export const getUrlStatistics = async (shortUrl: string) => {
    try {
        const { data } = await apiClient.get(`/statistics/${encodeURIComponent(shortUrl)}`);
        return data; // Вернет статистику
    } catch (error) {
        showErrorNotification(error);
        throw error;
    }
};