import React from 'react';

function Product( { headline, image, title, description, price}) {
    return (
        <article>
            <span>{headline}</span>
            <img src={image} alt={title}/>
            <p>{description}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product;