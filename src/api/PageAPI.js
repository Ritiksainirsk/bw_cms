import Headers from './Headers';
import config from '../config/config';

// Get list of pages
export const getPageList = async () => {
    try {
        const response = await fetch(`${config.link}pagemanagement/list`, new Headers('POST'));
        if (!response.ok) {
            throw new Error('Failed to fetch pages');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching pages:', error);
        throw error;
    }
};

// Add or edit a page
export const savePage = async (pageData) => {
    try {
        const response = await fetch(`${config.link}pagemanagement/add-edit`, 
            new Headers('POST', pageData)
        );
        if (!response.ok) {
            throw new Error('Failed to save page');
        }
        return await response.json();
    } catch (error) {
        console.error('Error saving page:', error);
        throw error;
    }
};

// Get page details by ID
export const getPageDetails = async (id) => {
    try {
        const response = await fetch(`${config.link}pagemanagement/detail/${id}`, 
            new Headers('GET')
        );
        if (!response.ok) {
            throw new Error('Failed to fetch page details');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching page details:', error);
        throw error;
    }
};