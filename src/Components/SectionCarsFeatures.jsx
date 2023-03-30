import React from "react";

const itemData = [
  {
    src: "assets/img-Proin-593px.png",
    title: "Proin in lorem tortor",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta est a est rutrum ultricies. Etiam placerat id dui eget vestibulum. Praesent aliquam magna nunc, sit amet facilisis ante elementum quis. Curabitur tincidunt neque libero, at pretium nulla mattis ac. Morbi auctor lacus lectus, eget facilisis urna commodo sit amet.",
  },
  {
    src: "assets/img-Proin-594px.png",
    title: "Proin in lorem tortor",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta est a est rutrum ultricies. Etiam placerat id dui eget vestibulum. Praesent aliquam magna nunc, sit amet facilisis ante elementum quis. Curabitur tincidunt neque libero, at pretium nulla mattis ac. Morbi auctor lacus lectus, eget facilisis urna commodo sit amet.",
  },
  {
    src: "assets/img-Proin-593-1px.png",
    title: "Proin in lorem tortor",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta est a est rutrum ultricies. Etiam placerat id dui eget vestibulum. Praesent aliquam magna nunc, sit amet facilisis ante elementum quis. Curabitur tincidunt neque libero, at pretium nulla mattis ac. Morbi auctor lacus lectus, eget facilisis urna commodo sit amet.",
  },
];

export const SectionCarsFeatures = () => {
  return (
    <div class="container div-card-container">
      <div className="row justify-content-center">
        {itemData.map(({ src, title, caption }) => (
          <div class="card border-0 col-lg-4 col-md-6 col-sm-12 p-3">
            <img src={src} class="card-img-top h-100" alt={src} />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
