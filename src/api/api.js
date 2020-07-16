import * as axios from "axios";

export default {
  getImages: async () => {
    const response = await axios.get(
      "https://boiling-refuge-66454.herokuapp.com/images"
    );
    return response.data;
  },

  getImageComments: async (imageId) => {
    const response = await axios.get(
      `https://boiling-refuge-66454.herokuapp.com/images/${imageId}`
    );

    return response.data;
  },
};
