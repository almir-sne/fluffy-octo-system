import React, {Fragment} from 'react';
import "../../styles/card.scss"
import {calculatePopularity, toMinutes} from "../../tools/utils"
import FavoriteButton from "./FavoriteButton"

const Card = ({className, onClick, children, id}) =>
    <a onClick={onClick} className={`col-xs-3 col-sm-2 col-md-2 col-lg-1 card ${className}`}>
        {children.map((c, index) =>
            <Fragment key={index}>
                {c}
                <Separator/>
            </Fragment>
        )}
        <FavoriteButton text="Favorite" id={id}/>
    </a>

const Image = ({image}) =>
    <div>
        {(image && <img alt="" width="100%" src={image.url}/>) || <span> No image </span>}
    </div>

const Separator = () =>
    <hr className="separator"/>

export const TrackCard = ({card}) =>
    <Card className="track" id={card.id} >
        <div> {card.name} </div>
        <div> {toMinutes(card.duration_ms)} </div>
        <div> {card.artists.map(a => a.name).join(", ")} </div>
        <div> {card.album.name} </div>
        <Image image={card.album.images[0]}/>
    </Card>

export const TrackCardBasic = ({card}) =>
    <div className="col-xs-5 card simple-track">
        <div className="col-xs-1"> {card.track_number} </div>
        <div className="col-xs-5"> {card.name} </div>
        <div className="col-xs-4"> {card.artists.map(a => a.name).join(", ")} </div>
        <div className="col-xs-1"> {toMinutes(card.duration_ms)} </div>
        <div className="col-xs-1"> <FavoriteButton id={card.id} /> </div>
    </div>

export const AlbumCard = ({card, onClick}) =>
    <Card onClick={() => onClick(card)} id={card.id} className="album">
        <div> {card.name} </div>
        <div> {card.artists.length > 1 ? "Various Artists" : card.artists[0].name} </div>
        <div className="hide-overflow"> {card.available_markets.join(", ")} </div>
        <Image image={card.images[0]}/>
    </Card>

export const ArtistCard = ({card, onClick}) =>
    <Card onClick={() => onClick(card)} id={card.id}  className="artist">
        <div> {card.name} </div>
        <div> {calculatePopularity(card.popularity)} </div>
        <div className="hide-overflow"> {(card.genres && card.genres.join(", ")) || "Unknown Genre"} </div>
        <Image image={card.images[0]}/>
    </Card>
