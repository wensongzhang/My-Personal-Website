import Image from "next/image";
// Assets
import Typewriter from "typewriter-effect";
import Gmail from "public/FirstSection/gmail.svg"
import Linkedin from "public/FirstSection/linkedin.svg"
import Instagram from "public/FirstSection/instagram.svg"
import Github from "public/FirstSection/github.svg"

function FirstSection() {
    return (
        <section id="home" className="min-h-screen">
            <main className="calc-height flex w-full items-center py-20">
                <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between gap-20">
                    <div className="flex w-full cursor-default flex-col gap-3">
                        <div className="hide text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl text-teal-500">
                        <Typewriter
                            options={{
                                // strings: ['Hey there', '你好','안녕하세요'],
                                strings: ['Hi there!', '你好!', ':)'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </div>
                        <div className="hide delay title-name font-bold text-primary-100">
                            <div>I'm</div>
                            <div>Wensong.</div>
                            {/* <div>Zhang</div> */}
                        </div>
                        <p className="hide delay slogan-title-down  text-primary-300">
                            I build things for the web.
                        </p>
                        {/* <p className="hide delay slogan-title-down italic text-primary-300">
                            A Self-Taught Full-Stack Developer
                        </p> */}
                        <p className="hide delay text-justify introduction font-semibold text-primary-300">
                        " I craft seamless user experiences by blending my creativity with technical skills, 
                        giving life to designs that captivate and inspire. "
                        </p>
                        <h2 className="hide contact-text text-primary-100 ">
                            <a className="hover:text-teal-500" href="mailto:zhangwensonggg@gmail.com"><Image src={Gmail}/> Gmail</a> / {" "}
                            <a className="hover:text-teal-500" href="https://www.linkedin.com/in/zhangwensong/" target="_blank"><Image src={Linkedin}/> LinkedIn</a> / {" "}
                            <a className="hover:text-teal-500" href="https://github.com/wensongzhang" target="_blank"><Image src={Github}/> GitHub</a> 
                            {/* / {" "} */}
                            {/* <a href="https://www.instagram.com/scarlett_hong1012/" target="_blank"><Image src={Instagram}/> Instagram </a>   */}
                        </h2>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default FirstSection;
