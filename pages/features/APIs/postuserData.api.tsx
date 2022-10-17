import axios from "axios";

export const postUserData = async (payload: any) => {
  try {
    const res = await axios({
      method: "post",
      data: payload,
      url: "",
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
