"use client";

import React from "react";
import Image from "next/image";

export default function Section3_NewsRoom() {
    return (
        <section id="section-3" className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 overflow-hidden text-black" style={{ backgroundColor: "transparent" }}>
            <div className="absolute inset-0 -z-10 mix-blend-overlay"></div>

            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-white drop-shadow-sm">
                    News<span className="text-white">Room</span>
                </h2>
                <p className="mt-4 font-playfair font-medium text-lg text-black">Swipe for the latest posts and updates</p>
            </div>

            {/* Carousel Container (Slide 1) */}
            <div className="news-masonry-container relative z-10 w-full w-full w-full px-4">
                <div className="box box_one">
                    <img src="/assets/news/dummy3.png" alt="News Featured" className="box-img drop-shadow-xl" />
                    <p className="text__one uppercase text-sm font-semibold">LATEST UPDATE | BY ADMIN | 18 APR 2026</p>
                    <h1 className="text__two">BTA AWARDS 2026 NOMINATIONS OPEN!</h1>
                </div>

                <div className="box box_two">
                    PRESS RELEASE
                </div>

                <div className="box box_three">
                    <p>Early bird registrations end in 24H!</p>
                    <p>Secure your Elite Access</p>
                </div>

                <div className="box box_four">
                    <p className="text__one leading-tight text-xl">NEW GUEST SPEAKERS ANNOUNCED</p>
                    <p className="text__two text-sm text-gray-500 font-normal">POSTED 16 APR 2026</p>
                </div>

                <div className="box box_five">
                    <p>Anticipation Level</p>
                    <input id="range" type="range" min="1" max="100" defaultValue="85" />
                    <div className="labels">
                        <label htmlFor="range">Just Watching</label>
                        <label htmlFor="range">Can't Wait!</label>
                    </div>
                </div>

                <div className="box box_six">
                    <p>Event Tracks</p>
                    <div className="colors color_one" title="Wellness"></div>
                    <div className="colors color_two" title="Tech"></div>
                    <div className="colors color_three" title="Awards"></div>
                </div>

                <div className="box box_seven">
                    <h3>Highlights</h3>
                    <div>
                        <p className="text__one">GALA DINNER</p>
                        <p className="text__two">An unforgettable evening of networking and dining</p>
                    </div>
                    <div>
                        <p className="text__one">SEMINARS</p>
                        <p className="text__two">Accelerate your profits with AI and leadership tracks</p>
                    </div>
                </div>

                <div className="box box_eight">
                    <h3>Join Us</h3>
                    <p>BTA GlobalX</p>
                    <div className="circle"></div>
                </div>
            </div>

            <style jsx>{`
                .news-masonry-container {
                    column-count: 3;
                    column-gap: 20px;
                    margin: 30px auto;
                }

                @media (max-width: 768px) {
                    .news-masonry-container {
                        column-count: 2;
                    }
                }
                
                @media (max-width: 480px) {
                    .news-masonry-container {
                        column-count: 1;
                    }
                }

                .box {
                    display: inline-block;
                    margin: 0 0 20px;
                    padding: 30px;
                    width: 100%;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
                    transition: transform 0.3s ease;
                }

                .box:hover {
                    transform: translateY(-5px);
                }

                .box_one {
                    color: #fff;
                    position: relative;
                    min-height: 250px;
                    background: #2e2939;
                }

                .box-img {
                    height: 80px;
                    width: auto;
                    position: absolute;
                    top: -20px;
                    right: 20px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 10px;
                    padding: 5px;
                    backdrop-filter: blur(5px);
                }

                .box_one .text__one {
                    margin: 60px 0px 20px;
                    color: #f88e2d;
                    letter-spacing: 1px;
                }

                .box_one .text__two {
                    font-weight: bold;
                    font-size: 26px;
                    line-height: 1.2;
                }

                .box_two {
                    color: #fff;
                    font-weight: bold;
                    background: #f88e2d;
                    text-align: center;
                    letter-spacing: 2px;
                    font-size: 18px;
                }

                .box_three {
                    background: #fff;
                    color: #2e2939;
                    font-weight: 500;
                }

                .box_three p {
                    margin: 15px 0px;
                    margin-left: 20px;
                    position: relative;
                }

                .box_three p::before {
                    content: "";
                    height: 10px;
                    width: 10px;
                    background: #f88e2d;
                    position: absolute;
                    border-radius: 50%;
                    left: -25px;
                    top: 6px;
                    box-shadow: 0px 0px 0px 3px #fff, 0px 0px 0px 5px #f88e2d;
                }

                .box_four {
                    background: #fff;
                    color: #2e2939;
                    font-weight: bold;
                    min-height: 180px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .box_four .text__one {
                    font-weight: bold;
                    font-size: 22px;
                    margin: 0px 0px 10px;
                }

                .box_four .text__two {
                    font-weight: 600;
                    margin-top: 10px;
                }

                .box_five {
                    background: #fff;
                    color: #2e2939;
                    font-weight: bold;
                }

                .box_five p {
                    font-size: 20px;
                }

                .box_five #range {
                    margin-top: 15px;
                    -webkit-appearance: none;
                    width: 100%;
                    height: 18px;
                    border-radius: 20px;
                    background: #f3f3f3;
                    outline: none;
                }

                .box_five #range::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 30px;
                    height: 30px;
                    background: #f88e2d;
                    cursor: pointer;
                    border-radius: 50%;
                }

                .box_five .labels {
                    display: flex;
                    justify-content: space-between;
                    font-size: 10px;
                    margin-top: 10px;
                    text-transform: uppercase;
                    color: #888;
                }

                .box_six {
                    background: #fff;
                    color: #2e2939;
                }

                .box_six p {
                    font-weight: bold;
                    font-size: 18px;
                    margin: 10px 0px;
                }

                .box_six .colors {
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    display: inline-block;
                    margin: 10px 10px 0 0;
                    box-shadow: inset 0 0 0 2px rgba(0,0,0,0.1);
                }

                .box_six .color_one { background: #05cc05; }
                .box_six .color_two { background: #3F51B5; }
                .box_six .color_three { background: #E91E63; }

                .box_seven {
                    color: #fff;
                    background: #2e2939;
                    min-height: 200px;
                }

                .box_seven h3 {
                    font-weight: bold;
                    margin-bottom: 20px;
                    font-size: 22px;
                    color: #f88e2d;
                }

                .box_seven div {
                    margin: 15px 0px;
                }

                .box_seven .text__one {
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 14px;
                    letter-spacing: 1px;
                }

                .box_seven .text__two {
                    font-size: 12px;
                    margin-top: 5px;
                    color: rgba(255,255,255,0.7);
                    line-height: 1.4;
                }

                .box_eight {
                    background: #fff;
                    color: #2e2939;
                    font-weight: bold;
                    font-size: 30px;
                    overflow: hidden;
                    position: relative;
                    height: 250px;
                }

                .box_eight p {
                    font-size: 15px;
                    margin-top: 10px;
                    color: #f88e2d;
                }

                .box_eight .circle {
                    height: 70px;
                    width: 70px;
                    margin: 50px 0px 10px;
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 0px 0px 0px 25px #f88e2d, 0px 0px 15px 26px #f88e2d;
                    position: absolute;
                    left: 0px;
                    bottom: 20px;
                }
            `}</style>
        </section>
    );
}
