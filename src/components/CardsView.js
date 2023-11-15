import React from 'react';
import '../style/CardsView.css';

function CardsView ({cards}) {
    return (

        <div class ="CardView">
          {cards.map((ShopCard) => (
              <div class ='shopCard'>
                <h2 className='heading'>{ShopCard.name}</h2>
                <p>{ShopCard.color}</p>
   
                  <img src={ShopCard.img} alt='' />

                <div class = 'bodyCart'>
                  <span class ='bodyCart_price'>${ShopCard.price}</span>
                  <button class ='buttonCart'>Add to Cart</button>
                </div>
              </div>
        ))}
        </div>
      );
}

export default CardsView;