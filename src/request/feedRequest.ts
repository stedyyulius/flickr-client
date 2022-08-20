import axios from 'axios';

import api from '../constants/api';

export const getFeeds = async (tag: string) => {

    try {

        const response = await axios.get(`${api}?tags=${tag}`);

        return response.data;

    } catch(error) {

        alert(error);

    }
}