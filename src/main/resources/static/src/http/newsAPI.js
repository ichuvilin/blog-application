import axios from "axios";

const url = "http://localhost:8080/";

const fetchAllNews = async () => {
  const { data } = await axios.get(url);
  return data;
};

const fetchOneNews = async (id) => {
  const { data } = await axios.get(url + "/" + id);
  return data;
};

export { fetchAllNews, fetchOneNews };
