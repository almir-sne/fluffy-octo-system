import React, {Fragment} from 'react';

export const TrackCard = ({card}) =>
    <Fragment>
        <div> Name: {card.name} </div>
        <div> Duration: {card.duration} </div>
        <div> Artist: {card.artists.map(a => a.name).join(", ")} </div>
        <div> Album: {card.album.name} </div>
        <div> {card.album.images[0] && <img height="100px" src={card.album.images[0].url}/>}</div>
    </Fragment>

export const AlbumCard = ({card}) =>
    <Fragment>
        <div> Name: {card.name} </div>
        <div> Artist(s): {card.artists.length > 1 ? "Various Artists" : card.artists[0].name} </div>
        <div> Availability: {card.available_markets.join(",")} </div>
        <div> {card.images[0] && <img height="100px" src={card.images[0].url}/>}</div>
    </Fragment>

export const ArtistCard = ({card}) =>
    <Fragment>
        <div> Name: {card.name} </div>
        <div> Popularity: {card.popularity} </div>
        <div> Genre: {card.genres && card.genres.join(", ")} </div>
        <div> {card.images[0] && <img height="100px" src={card.images[0].url}/>}</div>
    </Fragment>
