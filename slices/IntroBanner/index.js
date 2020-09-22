import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <div className="intro-banner">
    {console.log(slice.primary.image)}

    {/* {slice.primary.image.responsive ? (
      <img src={slice.primary.image.responsive.url} className="image" />
    ) : (
      <img src={slice.primary.image.url} className="image" />
    )} */}
    {slice.primary.image ? (
      <img src={slice.primary.image.url} className="image" />
    ) : null}
    <div className="content">
      <div>
        {slice.primary.title ? <RichText render={slice.primary.title} /> : null}
        {slice.primary.description ? (
          <RichText render={slice.primary.description} />
        ) : (
          <p></p>
        )}
        {slice.primary.button_label ? (
          <button>{slice.primary.button_label}</button>
        ) : null}
      </div>
    </div>

    <style>{`

    .intro-banner{
      width:100vw;
      position:relative;
      color:white;
      overflow-x: hidden;
   
    }

    .image{
      width:100%;
      height:500px;
    }

    .content{
      width:100%;
      position:absolute;
      top:50%;
      left:45%;
    }

    button{
      display:block;
      background-color:white;
      outline:none;
      width:200px;
      height:50px;
      font-size:20px;
      border:none;
      cursor:pointer;
    }

    @media (max-width: 680px) {
     
      .content{
        left:20%;
      }
  }
`}</style>
  </div>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
