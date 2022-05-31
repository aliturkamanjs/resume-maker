import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import TempalteIcon from "../svg/templateIcon.svg";

import template1 from "../images/template1.png";
import template2 from "../images/template2.png";
import template3 from "../images/template3.png";
import template4 from "../images/template4.png";
import template5 from "../images/template5.png";

import "swiper/css";
import Layout from "../layout/layout";

export const TemplateListPage = () => {
  return (
    <Layout>
      <div className="w-full h-screen bg-dark flex items-center justify-between flex-col pt-12">
        <div className="flex flex-col items-center">
          <img src={TempalteIcon} alt="" className="select-none w-40" />
          <h1 className="text-slate-50 text-3xl mt-8">
            Job-winning resume templates
          </h1>
          <p className="text-slate-400 w-3/6 text-center mt-2">
            Each resume template is expertly designed and follows the exact
            “resume rules” hiring managers look for. Stand out and get hired
            faster with field-tested resume templates.
          </p>
        </div>
        <div className="w-11/12 overflow-hidden h-80">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log()}
            onSlideChange={() => console.log()}
          >
            <SwiperSlide>
              <div className="w-4/6">
                <img src={template1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-4/6">
                <img src={template2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-4/6">
                <img src={template3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-4/6">
                <img src={template4} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-4/6">
                <img src={template5} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};
