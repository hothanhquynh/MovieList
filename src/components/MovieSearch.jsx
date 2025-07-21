import React from 'react';
import PropTypes from 'prop-types'; // SỬA LỖI: Import PropTypes từ 'prop-types'
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import { MovieContext } from '../context/MovieProvider';
import { useContext } from "react";



const MovieSearch = ({ title, data }) => {
  const {handleTrailer}= useContext(MovieContext)
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {/* Đảm bảo data tồn tại và là một mảng trước khi map */}
        {data && data.map((item) => (
          <div key={item.id} className="w-[200px] h-[300px] relative group" onClick={() => handleTrailer(item.id)} >
            <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-full bg-black/40"/>
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-2">
                <p className="uppercase text-md">{item.title || item.name || item.original_title || item.original_name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

// SỬA LỖI: Đổi MovieSearch.PropType thành MovieSearch.propTypes (chữ 'p' nhỏ)
// và sử dụng PropTypes đã import
MovieSearch.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
};

export default MovieSearch;