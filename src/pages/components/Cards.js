import React, {Fragment} from 'react';
import "../../styles/card.scss"
import {calculatePopularity, toMinutes} from "../../tools/utils"

const Card = ({className, children}) =>
    <div className={`col-xs-3 col-sm-2 col-md-2 col-lg-1 card ${className}`}>
        {children.map(c =>
            <Fragment>
                {c}
                <Separator/>
            </Fragment>
        )}
    </div>

const Image = ({image}) =>
    <div>
        {(image && <img alt="" width="100%" src={image.url}/>) || <span> No image </span>}
    </div>

const Separator = () =>
    <hr className="separator"/>

export const TrackCard = ({card}) =>
    <Card className="track">
        <div> {card.name} </div>
        <div> {toMinutes(card.duration_ms)} </div>
        <div> {card.artists.map(a => a.name).join(", ")} </div>
        <div> {card.album.name} </div>
        <Image image={card.album.images[0]}/>
    </Card>

export const AlbumCard = ({card}) =>
    <Card className="album">
        <div> {card.name} </div>
        <div> {card.artists.length > 1 ? "Various Artists" : card.artists[0].name} </div>
        <div className="hide-overflow"> {card.available_markets.join(", ")} </div>
        <Image image={card.images[0]}/>
    </Card>

export const ArtistCard = ({card}) =>
    <Card className="artist">
        <div> {card.name} </div>
        <div> {calculatePopularity(card.popularity)} </div>
        <div className="hide-overflow"> {(card.genres && card.genres.join(", ")) || "Unknown Genre"} </div>
        <Image image={card.images[0]}/>
    </Card>
