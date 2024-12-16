import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p>
        {"This Magic Brain will detect faces in your pictures. Give it a try!"}
      </p>
      <div className="container">
        <input type="text" />
        <button type="submit" className="detect">
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
