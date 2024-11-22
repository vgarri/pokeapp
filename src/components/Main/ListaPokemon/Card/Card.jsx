import React from "react";

const Card = (data) => {
  const {name,email,imgUrl,age} = data.data
  return <>
  <div className="pokecard">
  <h1>username: {name}</h1>
  <h1>email: {email}</h1>
  <img src={imgUrl}></img>
  <h4>age: {age}</h4>
  </div>
  </>;
};

export default Card;
