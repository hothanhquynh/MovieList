import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp.jpg";
import IconPlay from "../assets/play.png";
const Banner = () => {
  return (
  <div className="w-full h-[700px] bg-banner bg-center bg-cover relative">
    <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40"/>
    <div className="w-full h-full flex items-center justify-center p-4 relative- z-20">
    <div className="flex flex-col space-y-4 items-baseline w-[50%]">
      <p className="text-white bg-gradient-to-r from-red-600 to-red-300 py-2 px-3 text-md">TV Show</p>
      <div className="flex flex-col space-y-4">
        <h2 className="text-white text-[40px] font-bold">Địa đạo mặt trời trong bóng tối</h2>
        <div className=" flex items-center space-x-3">
          <img src={IconRating} alt="raiting" className=" w-8 h-8" />
          <img src={IconRating} alt="raiting" className=" w-8 h-8" />
          <img src={IconRating} alt="raiting" className=" w-8 h-8" />
          <img src={IconRating} alt="raiting" className=" w-8 h-8" />
          <img src={IconRatingHalf} alt="raiting-half" className=" w-8 h-8" />
        </div>
        <p className="text-white">Bộ phim Địa Đạo – Mặt Trời Trong Bóng Tối thực sự là một tác phẩm ấn tượng và đáng xem trong dòng phim lịch sử – chiến tranh của Việt Nam. Với bối cảnh tái hiện những năm tháng khốc liệt tại địa đạo Củ Chi, phim không chỉ tái hiện sự tàn bạo của chiến tranh mà còn truyền tải sâu sắc cái khổ của người dân và những người chiến sĩ ngày ấy.
Một điểm cộng lớn của bộ phim là việc tái hiện lại hệ thống địa đạo một cách chi tiết. Sơ đồ địa đạo xuất hiện trong phim giúp khán giả hình dung được kết cấu phức tạp, thông minh của di tích này. Ngoài ra, phim còn khéo léo khắc họa nhiều loại bẫy được sử dụng trong địa đạo, mang lại cảm giác chân thực mà không cần giải thích bằng lời – chỉ cần nhìn cũng đủ hiểu.
</p>
        <div className="flex items-center space-x-4">
          <button className="text-white bg-black p-3 font-bold text-sm">Chi tiết</button>
          <button className="p-3 text-white bg-red-600 font-bold text-sm">Xem phim</button>
        </div>
      </div>
    </div>
    <div className="w-[50%] flex items-center justify-center">
      <div className="w-[300px] h-[400px] relative group cursor-pointer">
        <img src={ImgTemp} alt="temp" className=" w-full h-full object-cover"/>
      
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <img src={IconPlay} alt="play" className="w-16 h-16 relative z-20" />
      </div>
      </div>
    </div>
    </div>
  </div>
  );
};

export default Banner;
