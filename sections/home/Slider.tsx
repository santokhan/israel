'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

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
                            <div className="w-full aspect-video p-10 bg-app-light-pink text-app-brown space-y-2">
                                <div className="grid place-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M8.09 11.631H3.4c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.687.687 0 0 0-.95-.24c-3.38 2-4.56 3.22-4.56 9.03v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c0-1.75-1.33-3.08-3.09-3.08ZM18.909 11.631h-4.69c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.698.698 0 0 0-.96-.24c-3.38 2-4.56 3.22-4.56 9.04v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c.01-1.76-1.32-3.09-3.08-3.09Z" fill="currentColor"></path></svg>
                                </div>
                                <h5 className="text-app-brown font-semibold text-lg">{e.title}</h5>
                                <p className="text-sm">{e.desc}</p>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none"><path d="M8.09 11.631H3.4c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.687.687 0 0 0-.95-.24c-3.38 2-4.56 3.22-4.56 9.03v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c0-1.75-1.33-3.08-3.09-3.08ZM18.909 11.631h-4.69c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.698.698 0 0 0-.96-.24c-3.38 2-4.56 3.22-4.56 9.04v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c.01-1.76-1.32-3.09-3.08-3.09Z" fill="currentColor"></path></svg>
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