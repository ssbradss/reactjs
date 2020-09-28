import axios from '../configs/axios';

export const all = async () => {
    try {
      const response = await axios.get('Books');
      return response.data;
    } catch (e) {
      console.log(e);
    }
}; 

export const get = async (id) => {
    try {
        const response = await axios.get(`Books/${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};
  
export const create = async (data) => {
    try {
      const response = await axios.post(`Books`, data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
};
  
export const update = async (data) => {
    try {
        const response = await axios.post(`Books/${data.ID}`, data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const remove = async (id) => {
    try {
        const response = await axios.delete(`Books/${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};