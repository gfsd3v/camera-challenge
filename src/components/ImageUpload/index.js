import * as React from "react";
import styled from "styled-components";
import LazyImage from "components/LazyImage";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { FloatingCircleButton } from "components/Button";

const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 9vh 0 9vh 0;
  cursor: pointer;
  overflow: hidden;
`;

const ImageHolder = styled.img`
  display: flex;
  width: 100%;
`;

const HiddenInput = styled.input`
  display: none;
`;

/**
 * @param {HTMLImageElement} image - Image File Object
 * @param {Object} crop - crop Object
 * @returns base64 cropped image
 */
const getCroppedImg = (image, crop) => {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext("2d");

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  // As Base64 string
  return canvas.toDataURL("image/jpeg");
};

const ImageUpload = ({ confirmedImage, setConfirmedImage, ...props }) => {
  // Base64 string from first upload
  const [src, setSrc] = React.useState(false);
  // Setting the crop limits
  const [crop, setCrop] = React.useState({
    unit: "%",
    width: 100,
    height: 100
  });
  // State that store the img html tag with the base64 as src
  const [imageRef, setImageRef] = React.useState(false);

  const handleChange = async event => {
    if (event.target.files && event.target.files.length > 0) {
      // Case the user choose another image remove confirmedImage & shows crop component
      confirmedImage ? setConfirmedImage(false) : null;
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result));
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onImageLoaded = image => {
    setImageRef(image);
  };

  // While the user is moving the cursor selecting the crop we store the crop dimensions
  const onCropChange = crop => {
    setCrop(crop);
  };

  const handleCropConfirmation = () => {
    if (imageRef && crop.width && crop.height) {
      // Getting base64 cropped image
      const imageBase64 = getCroppedImg(imageRef, crop);
      setConfirmedImage(imageBase64);
    } else {
      setConfirmedImage(src);
    }
  };

  const cropHolderHandler = () => {
    if (!confirmedImage) {
      return (
        src && (
          <React.Fragment>
            <ReactCrop
              src={src}
              crop={crop}
              onImageLoaded={onImageLoaded}
              onChange={onCropChange}
            />
            <FloatingCircleButton onPress={handleCropConfirmation} />
          </React.Fragment>
        )
      );
    }
  };

  const addImageHolderHandler = () => {
    if (!src) return <LazyImage imgName="add_image2.png" />;
  };

  const confirmedImageHolderHandler = () => {
    if (confirmedImage) return <ImageHolder src={confirmedImage} />;
  };

  return (
    <React.Fragment>
      <ImageWrapper>
        {cropHolderHandler()}
        <label htmlFor="image-input">
          {addImageHolderHandler()}
          {confirmedImageHolderHandler()}
          <HiddenInput
            accept="image/*"
            id="image-input"
            type="file"
            onChange={handleChange}
          />
        </label>
      </ImageWrapper>
    </React.Fragment>
  );
};

export default ImageUpload;
