import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

export default function ItemDetailes() {
  const [itemDetailes, setItemDetailes] = useState({});
  let { id, media_type } = useParams();
  async function getItemDetailes(id, media_type) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=0877fff4d5fc2afbbadbea6d31c7a353&language=en-US`
    );
    setItemDetailes(data);
    console.log(data);
  }
  useEffect(() => {
    getItemDetailes(id, media_type);
  }, []);
  return (
    <>
      <div className="row">
       <div className="col-8 col-md-4 col-lg-3 animateShow mx-auto mb-5">
  {itemDetailes.poster_path ? (
    <img
      className="w-100 floatImage"
      src={"https://image.tmdb.org/t/p/w500" + itemDetailes.poster_path}
      alt=""
    />
  ) : (
    <img
      className="w-100 floatImage"
      src={"https://image.tmdb.org/t/p/w500" + itemDetailes.profile_path}
      alt=""
    />
  )}
</div>

        <div className="col-12 col-md-8 col-lg-9 animateShow ">
          <h2 className="h3">
            {itemDetailes.title}
            {itemDetailes.name}
          </h2>
          <h3 className="h5 pColor">{itemDetailes.tagline}</h3>
          <div>
            {itemDetailes.genres?.map((g) => (
              <span key={g.id} className="badge bg-info text-dark me-2">
                {g.name}
              </span>
            ))}
          </div>
          <br />
          {itemDetailes.vote_average ? (
            <h6>Vote : {itemDetailes.vote_average.toFixed(1)}</h6>
          ) : (
            ""
          )}
          {itemDetailes.vote_count ? (
            <h6>Vote Count : {itemDetailes.vote_count}</h6>
          ) : (
            ""
          )}
          {itemDetailes.popularity ? (
            <h6>Popularity : {itemDetailes.popularity}</h6>
          ) : (
            ""
          )}
          {itemDetailes.release_date ? (
            <h6>Release Date : {itemDetailes.release_date}</h6>
          ) : (
            ""
          )}
          {itemDetailes.birthday ? (
            <h6>Birthday : {itemDetailes.birthday}</h6>
          ) : (
            ""
          )}
          {itemDetailes.deathday ? (
            <h6>Deathday : {itemDetailes.deathday}</h6>
          ) : (
            ""
          )}
          {itemDetailes.gender ? (
            itemDetailes.gender === 2 ? (
              <h6>Gender : Male</h6>
            ) : (
              <h6>Gender : Female</h6>
            )
          ) : (
            ""
          )}
          {itemDetailes.place_of_birth ? (
            <h6>Place of Birth : {itemDetailes.place_of_birth}</h6>
          ) : (
            ""
          )}
          {itemDetailes.overview ? (
            <Accordion defaultActiveKey={null} className="custom-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Click to Read Overview</Accordion.Header>
                <Accordion.Body>
                  <p className="pColor mt-3">{itemDetailes.overview}</p>{" "}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ) : (
            ""
          )}
        </div>
      </div>
      {itemDetailes.biography ? (
        <div className="row mt-5">
          <Accordion defaultActiveKey={null} className="custom-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Click to Read Biography</Accordion.Header>
              <Accordion.Body>
                {itemDetailes.biography
                  ? itemDetailes.biography
                  : "No biography available."}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
