import type { NextPage } from "next";

const MoreAboutMe: NextPage = () => {
    return (
        <section id="more-about" className="hide flex ">
                <div className="mx-auto more-about-container">
                    <div className="ml-20 flex gap-4">
                        <h1 className="more-about-title bold text-6xl">Hey there!</h1>
                        <img className="more-about-title-icon" src="https://github.com/honghong1012/honghong1012/blob/main/images/wave.gif?raw=true"></img>
                    </div>
                    <div className="more-about-image-text-container items-center justify-between gap-10 max-w-7xl px-20">
                        <div className="flex flex-col more-about-text gap-8" >
                            <p className="text-lg font-semibold text-black">
                                🌊 I was born in Qingdao, Shandong, a beautiful coastal city in China, 
                                and my childhood is filled with fond memories of this place.
                            </p>
                            <p className="text-lg font-semibold text-black">
                                📚  In 2015, I embarked on my academic journey by pursuing my undergraduate degree in Chongqing, 
                                where I majored in software engineering and began my captivating journey into the world of programming. 
                                Just a year later, I took part in the "<a href="http://www.cciee121.com/html/home/index.html"><u>CCIEE 1+2+1</u></a>" program, which led me to transfer to 
                                George Mason University in Fairfax, Virginia, where I delved deeper into computer science.
                            </p>
                            <p className="text-lg font-semibold text-black">
                                💜 To further my education, I pursued a master's degree in Computer Science at 
                                Northwestern University in Evanston, Illinois, with an expected graduation date in December 2022. 
                            </p>
                            
                        </div>
                        <div className="delay hide flex flex-col more-about-image items-center">
                            <img width="70%" src="https://github.com/wensongzhang/My-Personal-Website/blob/05b79862686f830d2c4684f04fd23fe9b2fc2798/public/MoreAboutSection/self1.jpg?raw=true"></img>
                            <p className="text-primary-300"> Christmas 2018 in Washington DC. </p>
                        </div>
                    </div>
                    <div className="more-about-image-text-container reverse items-center justify-between gap-10 max-w-7xl px-20">
                        <div className="delay hide flex flex-col more-about-image items-center">
                            <img width="70%" src="https://github.com/wensongzhang/My-Personal-Website/blob/05b79862686f830d2c4684f04fd23fe9b2fc2798/public/MoreAboutSection/self2.jpg?raw=true"></img>
                            <p className="text-primary-300"> Photo taken at Chengdu in 2021. </p>
                        </div>
                        <div className="flex flex-col more-about-text gap-8">
                            <p className="text-lg font-semibold text-black">
                                🐈 Beyond the world of programming, I'm an ardent cat lover, 
                                with a beloved feline companion named "Bai Gao" back in China 
                                who holds a special place in my heart.

                            </p>
                            <p className="text-lg font-semibold text-black">
                                🎮 In my leisure time, I indulge in video games, including titles like 
                                Genshin Impact, Apex Legends, and Valorant, where I find both enjoyment 
                                and a refreshing break from the world of code.
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default MoreAboutMe;
