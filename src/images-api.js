import axios from "axios";

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 31EST00y1PYFgPo9xf_Ghbrlss41cnPaNN8qzVoGBjc",
  },
});

export default async function getImages(query, page) {
  const params = {
    query,
    page,
    per_page: 12,
  };

  const response = await unsplashApi.get("search/photos", { params });
  return response.data;
}
