import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const CustomerReview = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-orange-600 font-bold text-5xl my-10">
        Customer Review
      </h2>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            {" "}
            <div className="hero h-[500px] bg-base-200 shadow-2xl">
              <div className="hero-content text-center">
                <div className="max-w-sm">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                    </div>
                  </div>
                  <div>
                    <Rating
                      placeholderRating="5"
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-yellow-600"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                  </div>
                  <h1 className="text-3xl font-bold"> JAMES CHARLIE </h1>
                  <p className="pt-3">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="hero h-[500px] bg-base-200 shadow-2xl">
              <div className="hero-content text-center">
                <div className="max-w-sm">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                    </div>
                  </div>
                  <div>
                    <Rating
                      placeholderRating="5"
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-yellow-600"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                  </div>
                  <h1 className="text-3xl font-bold">OLIVER JPOH</h1>
                  <p className="py-3">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="hero h-[500px] bg-base-200 shadow-2xl">
              <div className="hero-content text-center">
                <div className="max-w-sm">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1248&q=80" />
                    </div>
                  </div>
                  <div>
                    <Rating
                      placeholderRating="5"
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-yellow-600"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                  </div>
                  <h1 className="text-3xl font-bold"> WILLIAM DANIEL </h1>
                  <p className="py-3">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="hero h-[500px] bg-base-200 shadow-2xl">
              <div className="hero-content text-center">
                <div className="max-w-sm">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://images.unsplash.com/photo-1602471615287-d733c59b79c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" />
                    </div>
                  </div>
                  <div>
                    <Rating
                      placeholderRating="5"
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={
                        <FaStar className="text-yellow-600"></FaStar>
                      }
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                  </div>
                  <h1 className="text-3xl font-bold">OLIVER JOSHUA</h1>
                  <p className="py-3">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;
