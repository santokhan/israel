'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export function Slides() {
    const sliderDataList = [
        {
            title: "לינדה, פנסיונרית",
            desc: "הרבה זמן רציתי לקחת זמן לעצמי אבל לא היה לי כוח למשהו כזה כבד. זה ממש מיוחד בעיני שאצלך יש מקום לצייר בכיף ולהצליח להתרכז גם בציור וגם בשיחה, ושהיא הייתה כזו עמוקה! לא האמנתי שאני יכולה לשתף דברים כאלה, לא נראה לי שהבנתי בכלל שזה מה שעובר עלי. אני מודה לך עמוקות."
        },
        {
            title: "לינדה, פנסיונרית",
            desc: "הרבה זמן רציתי לקחת זמן לעצמי אבל לא היה לי כוח למשהו כזה כבד. זה ממש מיוחד בעיני שאצלך יש מקום לצייר בכיף ולהצליח להתרכז גם בציור וגם בשיחה, ושהיא הייתה כזו עמוקה! לא האמנתי שאני יכולה לשתף דברים כאלה, לא נראה לי שהבנתי בכלל שזה מה שעובר עלי. אני מודה לך עמוקות."
        },
        {
            title: "לינדה, פנסיונרית",
            desc: "הרבה זמן רציתי לקחת זמן לעצמי אבל לא היה לי כוח למשהו כזה כבד. זה ממש מיוחד בעיני שאצלך יש מקום לצייר בכיף ולהצליח להתרכז גם בציור וגם בשיחה, ושהיא הייתה כזו עמוקה! לא האמנתי שאני יכולה לשתף דברים כאלה, לא נראה לי שהבנתי בכלל שזה מה שעובר עלי. אני מודה לך עמוקות."
        },
        {
            title: "לינדה, פנסיונרית",
            desc: "הרבה זמן רציתי לקחת זמן לעצמי אבל לא היה לי כוח למשהו כזה כבד. זה ממש מיוחד בעיני שאצלך יש מקום לצייר בכיף ולהצליח להתרכז גם בציור וגם בשיחה, ושהיא הייתה כזו עמוקה! לא האמנתי שאני יכולה לשתף דברים כאלה, לא נראה לי שהבנתי בכלל שזה מה שעובר עלי. אני מודה לך עמוקות."
        },
        {
            title: "לינדה, פנסיונרית",
            desc: "הרבה זמן רציתי לקחת זמן לעצמי אבל לא היה לי כוח למשהו כזה כבד. זה ממש מיוחד בעיני שאצלך יש מקום לצייר בכיף ולהצליח להתרכז גם בציור וגם בשיחה, ושהיא הייתה כזו עמוקה! לא האמנתי שאני יכולה לשתף דברים כאלה, לא נראה לי שהבנתי בכלל שזה מה שעובר עלי. אני מודה לך עמוקות."
        },
        {
            title: "לינדה, פנסיונרית",
            desc: "הרבה זמן רציתי לקחת זמן לעצמי אבל לא היה לי כוח למשהו כזה כבד. זה ממש מיוחד בעיני שאצלך יש מקום לצייר בכיף ולהצליח להתרכז גם בציור וגם בשיחה, ושהיא הייתה כזו עמוקה! לא האמנתי שאני יכולה לשתף דברים כאלה, לא נראה לי שהבנתי בכלל שזה מה שעובר עלי. אני מודה לך עמוקות."
        },
        {
            title: "לינדה, פנסיונרית",
            desc: "הרבה זמן רציתי לקחת זמן לעצמי אבל לא היה לי כוח למשהו כזה כבד. זה ממש מיוחד בעיני שאצלך יש מקום לצייר בכיף ולהצליח להתרכז גם בציור וגם בשיחה, ושהיא הייתה כזו עמוקה! לא האמנתי שאני יכולה לשתף דברים כאלה, לא נראה לי שהבנתי בכלל שזה מה שעובר עלי. אני מודה לך עמוקות."
        },
    ]
    return (
        <div className="">
            <div className="hidden lg:block">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={60}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {sliderDataList.map((e, i) =>
                        <SwiperSlide key={i}>
                            <div className="w-full aspect-video p-10 bg-app-light-pink text-app-black space-y-2">
                                <div className="grid place-items-center text-app-brown">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" /></svg>
                                </div>
                                <h5 className="text-app-black font-semibold text-lg">{e.title}</h5>
                                <p className="text-app-black">{e.desc}</p>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className="block lg:hidden">
                <Swiper
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {sliderDataList.map((e, i) =>
                        <SwiperSlide key={i}>
                            <div className="w-full p-8 bg-app-light-pink text-app-brown space-y-2">
                                <div className="grid place-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" /></svg>
                                </div>
                                <h5 className="text-app-brown font-semibold text-lg">{e.title}</h5>
                                <p className="text-sm">{e.desc}</p>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
}

export default function Slider() {
    const text = {
        title: "נשים משתפות וממליצות",
        desc: "כל אחת עוברת את התהליכים הפנימיים שלה וחווה את הדברים באופן הייחודי לה. כנסי לקרוא כמה שיתופים של נשים שהיו אצלי בטיפול ולראות איך הן חוו את התהליך."
    }

    return (
        <div className="py-12 lg:py-20">
            <div className="w-full max-w-screen-xl mx-auto px-4 space-y-8">
                <div className="max-w-screen-sm mx-auto text-center">
                    <article className="w-full px-4 space-y-4">
                        <h1 className="text-3xl font-bold text-app-brown">{text.title}</h1>
                        <p className="text-app-brown">{text.desc}</p>
                    </article>
                </div>
                <div className="">
                    <Slides />
                </div>
            </div>
        </div>
    );
}