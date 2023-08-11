import React, { useState } from "react";
import GlassIcon from "./GlassIcon";

export default function StateGlass() {
  const [imgUrl, setImgUrl] = useState("./img/model.jpg");
  const [selectedGlassUrl, setSelectedGlassUrl] = useState(null);

  const handleChangeGlass = (glassUrl) => {
    setSelectedGlassUrl(glassUrl);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <img src={imgUrl} alt="glass" />
          {selectedGlassUrl && (
            <img
              src={selectedGlassUrl}
              alt="selected glass"
              className="selected-glass"
            />
          )}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Bảo Hân chọn kính đi biển nè!</div>
            <div className="card-body">
              <GlassIcon onChangeGlass={handleChangeGlass} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
