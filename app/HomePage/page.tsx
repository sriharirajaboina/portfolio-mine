import React from 'react'
import Image from 'next/image'


const HomePage = () => {
  return (
    <div className="md:mx-50 md:my-10">
        <div className="text-center py-10 md:py-25">
            <h1 className="text-[2.5rem] md:text-[4.5rem] font-bold leading-tight
             text-[#ffffff]">
                Adaptive Logo Design
                <br/>for Your Brand
            </h1>
            <div className="flex items-center justify-center mt-15">
                <div className="bg-[#cc9966] flex items-center justify-between py-3 px-6 rounded-full
                font-bold text-[#ffffff]">
                    <button className="mr-3 ">EXPLORE WORKS</button>
                    <span className="text-2xl font-bold">&#8594;</span>
                </div>
            </div>  
        </div>
        <div className="flex items-center justify-between md:my-30 gap-10">
            <div className="text-[#ffffff]">
                <h2 className="font-bold text-7xl tracking-wide leading-tighter">
                    Lets get know about me close
                </h2>
                <p className="text-xl tracking-wider leading-tight my-8">
                    Aaron is a New York-based visual designer focusing on branding and visual
                    identity. Her portfolio showcases her wide range of work,
                    spanning books,posters and web design.
                </p>
                <div className="font-bold">
                    <button className="bg-[#cc9966] py-3 px-6 rounded-full">
                        DISCOVER MORE ABOUT ME
                    </button>
                </div>
            </div>
           
                <Image 
                src="/images/about.png"
                alt="about"
                width={100}
                height={100}
                className="w-120 h-120"/>
           
        </div>
        <div className="my-30">
            <div className="text-[#ffffff] ">
                <h2 className="text-center text-7xl font-bold my-10">
                    My Projects Highlight</h2>
                <div className="text-center flex item-center justify-center">
                    <div className="bg-transparent border border-amber-500 py-3 px-6 rounded-full font-bold">
                        <button>EXPLORE MORE</button>
                        <span className="ml-4 text-2xl">&#8594;</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 my-15 gap-10">
                    <div>
                        <Image 
                        src="/images/p1.png"
                        alt="p1"
                        width={50}
                        height={50}
                        className="w-130 h-130"/>
                        <div className="md:my-10">
                            <h2 className="text-3xl font-bold">
                                Brand Journey Improvements
                            </h2>
                            <h5 className="text-[#4d5461]">
                                Client : 
                                <span className="text-[#ffffff] ml-5">
                                    Organc
                                </span>
                            </h5>
                            <h5 className="text-[#4d5461]">Work : 
                                <span className="text-[#ffffff] ml-5">
                                    Branding Logo design
                                </span>
                            </h5>
                        </div>
                    </div>
                    <div>
                        <Image 
                        src="/images/p2.png"
                        alt="p1"
                        width={50}
                        height={50}
                        className="w-130 h-130"/>
                        <div className="md:my-10">
                            <h2 className="text-3xl font-bold">
                                Brand Grouping
                            </h2>
                            <h5 className="text-[#4d5461]">Client : 
                                <span className="text-[#ffffff] ml-5">FR</span>
                            </h5>
                            <h5 className="text-[#4d5461]">Work : 
                                <span className="text-[#ffffff] ml-5">Branding Logo design</span>
                            </h5>
                        </div> 
                    </div>
                    <div>
                        <Image 
                        src="/images/p3.png"
                        alt="p1"
                        width={50}
                        height={50}
                        className="w-130 h-130"/>
                        <div className="md:my-10">
                            <h2 className="text-3xl font-bold">
                                NFT GLIMPS
                            </h2>
                            <h5 className="text-[#4d5461]">Client : 
                                <span className="text-[#ffffff] ml-5">Rumanda</span>
                            </h5>
                            <h5 className="text-[#4d5461]">Work : 
                                <span className="text-[#ffffff] ml-5">NFT Design</span>
                            </h5>
                        </div>
                    </div>
                    <div>
                        <Image 
                        src="/images/p4.png"
                        alt="p1"
                        width={50}
                        height={50}
                        className="w-130 h-130"/>
                        <div className="md:my-10">
                            <h2 className="text-3xl font-bold">
                                Brand Suggestions
                            </h2>
                            <h5 className="text-[#4d5461]">Client : 
                                <span className="text-[#ffffff] ml-5">T3d</span>
                            </h5>
                            <h5 className="text-[#4d5461]">Work : 
                                <span className="text-[#ffffff] ml-5">NFT logo</span>
                            </h5>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <div className="text-[#ffffff] flex items-start justify-between ">
            <div>
                <h1 className="text-6xl font-bold mb-10 tracking-wide">
                    Testimonial
                </h1>
                <p className="text-lg text-[#6c727f] mb-10 w-[88%] leading-relaxed tracking-wide"> 
                    “Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. 
                    I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. 
                    Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. 
                    I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”
                </p>
                <h2 className="text-xl font-bold tracking-wide">-Martin lee</h2>
            </div>
                <Image 
                src="/images/testimonial.png"
                alt="testimonial"
                width={500}
                height={300}
                className=""/>
        </div>
    </div>
  );
}

export default HomePage