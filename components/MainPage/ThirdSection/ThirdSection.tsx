import { useState } from "react";
// Components
import Categories from "./Categories";
import ProjectItems from "./ProjectItems";

function ThirdSection() {
    const [category, setCategory] = useState("next");

    return (
        <section className=" min-h-full w-full py-20" id="projects">
            <div className="mx-auto w-11/12 max-w-7xl">
                <p className="project-hide project-title font-bold text-primary-100">
                    Experiences & Projects
                </p>
                <div className="project-container gap-x-30 grid grid-cols-1 gap-y-28 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                    {category === "next" && (
                        <>
                            <ProjectItems
                                imgId="Ubisoft"
                                title="Ubisoft Entertainment"
                                resume="Resume.pdf"
                                description={
                                    <>
                                        During my time at <b>Ubisoft</b>, I held a pivotal role in web development, 
                                        focusing on homepage takeovers for global events, custom product pages 
                                        for titles like Assassin's Creed Odyssey, Skull & Bones and Far Cry 6 DLCs. 
                                        and modules to enhance the user experience. I also managed Ubisoft+ pages, 
                                        working on internal tools for workflow improvement. My responsibilities extended 
                                        to developing and implementing front-end solutions for web applications, 
                                        utilizing modern JavaScript frameworks like <b>React JS</b> and <b>React Router Dom</b>. 
                                        I was actively engaged in an <b>Agile</b>-based approach to application development, 
                                        ensuring adaptability and efficiency in our processes.
                                    </>
                                }
                                stack={
                                    <>
                                        <li>TypeScript</li>
                                        <li>ReactJS</li>
                                        <li>Redux</li>
                                        <li>Sass</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                imgId="BF"
                                title="BeaconFire Inc."
                                resume="Resume.pdf"
                                description={
                                    <>
                                        During my MERN Stack Developer tenure at BeaconFire, I achieved significant optimization results, 
                                        boosting web application efficiency through the removal of unnecessary database calls and 
                                        the utilization of <b>Redux</b> for faster load times. I employed <b>React Hooks</b> to 
                                        efficiently manage state within React components and maintain functional component lifecycles. 
                                        My proficiency extended to working with <b>TypeScript</b>'s features. To streamline processes, 
                                        I implemented a real-time <b>CI/CD</b> platform triggered by data updates and established a <b>Jenkins</b> pipeline, 
                                        substantially reducing manual workloads. Additionally, my contributions involved maintaining the 
                                        team's <b>MongoDB</b> and creating multiple REST APIs for historical data retrieval, vastly improving 
                                        data analysis convenience and efficiency.
                                    </>
                                }
                                stack={
                                    <>
                                        <li>ReactJS</li>
                                        <li>NodeJS</li>
                                        <li>ExpressJS</li>
                                        <li>MongoDB</li>
                                        <li>AWS S3</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                imgId="PhotoApp"
                                title="Online Social Application"
                                source="https://github.com/wensongzhang/Online-Social-Application-Demo"
                                description={
                                    <>
                                        "PhotoApp" is a{" "}
                                        full-stack Photo Sharing and Chatting Application.
                                        The architecture using
                                        event-driven communication is developed
                                        with  <b>HTML/CSS</b>, <b>JavaScript</b>{" "}
                                        and <b>NodeJS</b>. And the whole
                                        application is configured and deployed
                                         on{" "}
                                        <b>Heroku</b>{" "}Cloud Platform.
                                        <br /> Besides, I integrated{" "}
                                        <b>PostgreSQL</b> database for data storage and also
                                        designed a simple frontend UI with{" "}
                                        <b>React</b>.
                                    </>
                                }
                                stack={
                                    <>
                                        <li>JavaScript</li>
                                        <li>ReactJS</li>
                                        <li>NodeJS</li>
                                        <li>Heroku</li>
                                        <li>PostgreSQL</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                imgId="MovieSearchEngine"
                                title="Movie Search Engine"
                                source="https://github.com/wensongzhang/Movie-Search-Engine/tree/main/my-react-app"
                                description={
                                    <>
                                        {/* <br /> */}
                                        MovieSearchEngine is a sleek web-based application designed for effortless movie discovery, 
                                        seamlessly combining <b>HTML/CSS</b>,{" "}
                                        <b>React.js</b> and APIs powered OMDb, all elevated with the 
                                        elegance and user-friendly interface of <b>Material UI</b>. Featuring a primary search page and 
                                        an immersive details review page, users can easily explore and uncover their favorite films 
                                        by searching movie titles or using relevant keywords.
                                    </>
                                }
                                stack={
                                    <>
                                        <li>HTML/CSS</li>
                                        <li>JavaScript</li>
                                        <li>ReactJS</li>
                                        <li>Material UI</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                imgId="Doodle"
                                title="DoodlePark"
                                website="https://scarletthong.top"
                                source="https://github.com/honghong1012/Portfolio"
                                description={
                                    <>
                                        Doodle Park is a dynamic web-based application designed for user interaction 
                                        within a community. Users can effortlessly log in or sign up to engage with one another. 
                                        The platform offers a variety of entertaining features, including park quests and mini-games, 
                                        all developed with <b>TypeScript</b> for type-safe coding. 
                                        It's built using cutting-edge technologies such as <b>ReactJS</b> for a responsive user interface, {" "}
                                        <b>Material UI</b> for sleek and intuitive design, and relies on <b>OAuth 2.0</b> and <b>JWT</b> {" "}
                                        for secure authentication and authorization, ensuring a safe and 
                                        enjoyable experience for all participants.
                                    </>
                                }
                                stack={
                                    <>
                                        <li>ReactJS</li>
                                        <li>TypeScript</li>
                                        <li>Material UI</li>
                                        <li>OAuth2.0</li>
                                        <li>JWT</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                imgId="Doodle"
                                title="Personal Website"
                                website="https://scarletthong.top"
                                source="https://github.com/honghong1012/Portfolio"
                                description={
                                    <>
                                        My self-coded technical website, meticulously crafted with <b>TypeScript</b>, <b>Next.js</b>{" "} and the finesse 
                                        of <b>tailwindCSS</b>, serves as a showcase for my portfolio, presenting my personal introduction, 
                                        an array of projects, and my diverse experiences. I've not only meticulously designed and 
                                        optimized the entire website's visual style but also skillfully encapsulated specific components 
                                        to enhance development efficiency. This versatile creation can also double as a polished 
                                        portfolio template for others in the field.
                                    </>
                                }
                                stack={
                                    <>
                                        <li>TypeScript</li>
                                        <li>NextJS</li>
                                        <li>TailwindCSS</li>
                                    </>
                                }
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ThirdSection;
