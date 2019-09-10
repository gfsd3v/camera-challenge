import axios from "axios";

class ImageService {
  /**
   * Asynchronously send a email with user data & image as pdf
   * @param {object} userObj
   * @param {string} userObj.name - The name of the user.
   * @param {string} userObj.email - The email of the user.
   * @param {string} userObj.base64Image - Base64Img uploaded by the user.
   * @returns {Promise}
   */
  static sendEmailWithImageAsPdf = async userObj => {
    const reqObj = { endPoint: "/.netlify/functions/sendEmail", body: userObj };

    try {
      const response = await axios.post(reqObj.endPoint, reqObj.body);
      return response;
    } catch (exception) {
      throw `Failed sending data. ${exception.toString()}`;
    }
  };
}

export default ImageService;
