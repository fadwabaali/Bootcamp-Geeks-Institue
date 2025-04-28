import axios from "axios";

const API_KEY = "F4nfjRrjLmRA8aP1GVH9D7MKOHpEOLumd9njx909wrgA5mJe45gPCgNZ";

export const searchPhotos = async (query, perPage = 30, page = 1) => {
  const response = await axios.get(`https://api.pexels.com/v1/search`, {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      query,
      per_page: perPage,
      page,
    },
  });
  return response.data.photos;
};
