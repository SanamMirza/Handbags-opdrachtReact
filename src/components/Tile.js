import React from 'react';

function Tile( { title, content, children, image, photo}) {
    return (
        <section>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>{children}</p>
            <img src={image} alt={photo} />
        </section>
    );
}

export default Tile;