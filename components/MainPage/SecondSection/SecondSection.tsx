import Image from "next/image";
// Assets
// import AboutGif from "public/SecondSection/About.gif";
const AboutGif = "SecondSection/giphy.gif"

function SecondSection() {
    return (
        <section className="flex min-h-screen w-full items-center py-20" id="about" >
            <div className="mx-auto about-content-container">
                <h1 className="hide about-title text-8xl text-primary-100 font-bold">
                    About me
                </h1>
                <div className=" mx-auto about-image-text-container max-w-7xl cursor-default items-center justify-between gap-5">
                    <div className="hide about-image-container">
                        <img style={{width:"100%"}} src={AboutGif} alt="About Me Section gif"></img>
                    </div>
                    <div className="hide delay about-text-container flex w-full flex-col gap-6 text-justify">
                        <p className="font-semibold text-black">
                            Hello, my name is Wensong Zhang. 
                            I'm a front-end software developer with a Master's degree from Northwestern University, 
                            and currently residing in Chicago, IL.
                        </p>
                        <p className="font-semibold text-black">
                            My journey in computer science began in August 2015 during my undergraduate years, 
                            though it wasn't until I pursued my master's at Northwestern 
                            that I discovered my passion for web development.
                        </p>
                        <p className="font-semibold text-black">
                            I embarked on my web development journey starting with HTML, CSS, and JavaScript, and gradually expanded my skillset. 
                            My experience at <a href="https://www.ubisoft.com/en-us/company/about-us" target="_blank" className="hover:text-teal-500"><u>Ubisoft</u></a>, 
                            where I worked with TypeScript and collaborating with a team, 
                            deepened my understanding of software development. Building upon a strong programming foundation, 
                            I eagerly embrace new technologies like ReactJS, NodeJs, and TypeScript, 
                            and I'm committed to continuous learning in this dynamic field.
                        </p>
                        <p className="font-semibold text-black">
                            Indeed, with a strong grounding in programming fundamentals, the journey of acquiring 
                            new skills and technologies has been both seamless and rewarding. I am committed to 
                            continually advancing along this path of learning and growth. My unwavering dedication to 
                            mastering new technologies and my passion for software development continue to drive me 
                            forward on this dynamic and ever-evolving journey in the world of technology.

                        </p>
                    </div>
                </div>
                <div className="hide more-about flex justify-content-center">
                    <a
                        href="/moreAboutMe"
                        rel="noopener noreferrer"
                        className="flex justify-center text-2xl rounded-lg border-2 border-teal-500 px-3 py-2 text-teal-500 hover:bg-teal-500 hover:border-teal-500 hover:text-white md:w-1/3"
                    >More about me...</a>
                </div>
            </div>
        </section>
    );
}

export default SecondSection;
