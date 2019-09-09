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
  margin: 3vh 0 3vh 0;
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
  const [src, setSrc] = React.useState(false);
  const [crop, setCrop] = React.useState({
    unit: "%",
    width: 100,
    height: 100
  });
  const [imageRef, setImageRef] = React.useState(false);
  const [imageBase64, setImageBase64] = React.useState(false);

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

  const onCropChange = crop => {
    setCrop(crop);
  };

  const makeClientCrop = crop => {
    if (imageRef && crop.width && crop.height) {
      const imageBase64 = getCroppedImg(imageRef, crop);
      setImageBase64(imageBase64);
    }
  };

  const onCropComplete = crop => {
    makeClientCrop(crop);
  };

  const handleCropConfirmation = () => {
    if (imageBase64) {
      setConfirmedImage(imageBase64);
    } else {
      setConfirmedImage(src);
    }
  };

  return (
    <React.Fragment>
      <ImageWrapper>
        {!confirmedImage
          ? src && (
              <React.Fragment>
                <ReactCrop
                  src={src}
                  crop={crop}
                  onImageLoaded={onImageLoaded}
                  onComplete={onCropComplete}
                  onChange={onCropChange}
                />
                <FloatingCircleButton onPress={handleCropConfirmation} />
              </React.Fragment>
            )
          : null}
        <label htmlFor="image-input">
          {!src ? <LazyImage imgName="add_image2.png" /> : null}
          {confirmedImage ? <ImageHolder src={confirmedImage} /> : null}
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
