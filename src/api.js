const url = "http://localhost:5000/api/";
const urlDish = url + "dishes/";

const getDishesRequest = () => axios.get(urlDish);

const getDishRequest = (id) => axios.get(urlDish + id);

const deleteDishRequest = (id) => axios.delete(urlDish + id);

const createDishRequest = (dish) => {
  const form = new FormData();

  for (let key in dish) {
    form.append(key, dish[key]);
  }

  return axios.post(urlDish, form, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

const updateDishRequest = (id, newInfoDish) =>
  axios.put(urlDish + id, newInfoDish);
