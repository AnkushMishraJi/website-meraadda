import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import M from "materialize-css";
import { textAlign } from "@mui/system";

function UploadPhoto() {
  const [file, setFile] = useState("");
  const PostData = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "meraadda-web");
    data.append("cloud_name", "mera-adda");
    fetch("	https://api.cloudinary.com/v1_1/mera-adda/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setFile(data.url);
        console.log("photo is uploaded");
      });
  };

  const UploadModal = (props) => {
    return (
      <>
        <h5 style={{ textAlign: "center" }}>{props.data}</h5>
        <div class="file-field input-field w-50">
          <div class="btn">
            <span>Browse</span>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <button
            className="btn waves-effect waves-light #1e88e5 blue darken-1"
            onClick={(e) => PostData()}
          >
            Submit
          </button>
          <div class="file-path-wrapper">
            <input
              class="file-path validate"
              type="text"
              placeholder="Browse Photos"
            />
          </div>
        </div>
        <div></div>
      </>
    );
  };

  return (
    <>
      <UploadModal data="Upload Photo 1" />
      <UploadModal data="Upload Photo 2" />
      <UploadModal data="Upload Photo 3" />
      <UploadModal data="Upload Photo 4" />
      <UploadModal data="Upload Photo 5" />
      <UploadModal data="Upload Photo 6" />
    </>
  );
}

export default UploadPhoto;
