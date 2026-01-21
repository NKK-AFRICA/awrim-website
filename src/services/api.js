import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3001/api'
});

export default {
    // News
    getNews() {
        return apiClient.get('/news');
    },
    addNews(news) {
        return apiClient.post('/news', news);
    },
    updateNews(id, news) {
        return apiClient.put(`/news/${id}`, news);
    },
    deleteNews(id) {
        return apiClient.delete(`/news/${id}`);
    },

    // Events
    getEvents() {
        return apiClient.get('/events');
    },
    addEvent(event) {
        return apiClient.post('/events', event);
    },
    updateEvent(id, event) {
        return apiClient.put(`/events/${id}`, event);
    },
    deleteEvent(id) {
        return apiClient.delete(`/events/${id}`);
    },

    // Gallery
    getGallery() {
        return apiClient.get('/gallery');
    },
    addGallery(item) {
        return apiClient.post('/gallery', item);
    },
    updateGallery(id, item) {
        return apiClient.put(`/gallery/${id}`, item);
    },
    deleteGallery(id) {
        return apiClient.delete(`/gallery/${id}`);
    },

    // Resources
    getResources() {
        return apiClient.get('/resources');
    },
    addResource(item) {
        return apiClient.post('/resources', item);
    },
    updateResource(id, item) {
        return apiClient.put(`/resources/${id}`, item);
    },
    deleteResource(id) {
        return apiClient.delete(`/resources/${id}`);
    },

    // File Upload
    uploadImage(file) {
        const formData = new FormData();
        formData.append('image', file);
        return apiClient.post('/upload', formData);
    }
};
