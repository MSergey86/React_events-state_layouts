import React from 'react';
import '../style/ListView.css';


function ListView ({items}) {
  return (

    <div class ="ListView">
      {items.map((item) => (
          <div class ='shopItem'>
          <div class ='wrap_img'>
            <img src={item.img} alt='' />
          </div>
          <h2 class ='heading'>{item.name}</h2>
          <p>{item.color}</p>
          <span class ='bodyCart_price'>${item.price}</span>
          <button class ='buttonCart'>Add to Cart</button>
          </div>
    ))}
    </div>
  );
}

export default ListView;
