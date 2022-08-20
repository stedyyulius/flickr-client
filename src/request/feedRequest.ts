import axios from 'axios';

import api from '../constants/api';

export const getFeeds = async () => {
    
    try {

        const response = await axios.get(api);

        return response.data;

    } catch(error) {

        alert(error);

    }
}