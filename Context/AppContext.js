import React from "react";
import { createContext } from "react";
import kohsa from "../public/assests/kohsa.png"
import spevents from "../public/assests/spevents.png"
import youtube from "../public/assests/mercysyoutube.png"
import Whatsapp from "../public/assests/mercysWhatsapp.png"
import AnimatedPortfolio from "../public/assests/AnimatedPort.png"
export const AccountContext = createContext(null);



export const Accountprovider = ({ children }) => {

    const ProjData = [
        {
            Image: kohsa,
            Stack: "React / NodeJs / MONGODB / Express / TailWind / MUI  ",
            Title: "Kohsa",
            Url: "/Kohsa",
            Technologies: ["React", "Material UI", "MONGODB", "Express", "NodeJs", "TailWind", "Firebase"],
            Description: "Kohsa is E-commerce Website. A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service",
            Visit: "https://kohsa.shop/"
        },
        {
            Image: youtube,
            Stack: "React / NodeJs / MONGODB / Express / TailWind / MUI  ",
            Title: "MercysYoutube",
            Url: "/MercysYoutube",
            Technologies: ["React", "Material UI", "MONGODB", "NodeJs", "TailWind", "Firebase"],
            Description: "YouTube is an American online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is currently owned by Google, and is the second most visited website, after Google Search. And I made a youtube clone which does 50% to 60% of the working using Rapid API React, NodeJs",
            Visit: "https://630c6fac1b8fa5716d654cb7--jovial-longma-f2aab6.netlify.app/"
        },
        {
            Image: Whatsapp,
            Stack: "React / NodeJs / MONGODB / Express / TailWind / MUI  ",
            Title: "MercysWhatsappWeb",
            Url: "/MercysWhatsappWeb",
            Technologies: ["React", "Material UI", "MONGODB", "Express", "NodeJs", "TailWind", "Firebase"],
            Description: "Whatsapp Web is a website Which allows yout to connect to your whatsapp and you can send or receive messages images etc I developed a whatsapp clone where you can use your google account to login and send text messages etc PS: Is only Responsive in Desktop Will not Open in mobile devices as it is WHATSAPP WEB",
            Visit: "https://deft-tarsier-beda37.netlify.app/"
        },
        {
            Image: AnimatedPortfolio,
            Stack: "React / StyledComponent / TailWind / MUI / ReactTSparkles  ",
            Title: "AnimatedPortfolio",
            Url: "/AnimatedPortfolio",
            Technologies: ["React", "Material UI", "ReactTSparkles", "TailWind", "NodeJs", "StyledCom"],
            Description: "This is an animated portfolio Website made with React ReactTsparkles and Styled Components make sure you check it out ",
            Visit: "https://singular-cactus-0fdf24.netlify.app/"
        },

        {
            Image: spevents,
            Stack: "HTML / CSS / REACT / Bootstrap ",
            Title: "SpEvents",
            Url: "/SpEvents",
            Technologies: ["HTML", "Css Js", "Bootstrap", "React"],
            Description: "SpEvents is corporate event organization which conducts any form of event, hospitality or social activity which is organised or funded by a business entity. With such a broad definition, the target audience for corporate events can be equally as broad, including but not limited to: Employees. Board members.",
            Visit: "https://www.thespevents.com/"
        },
    ]


    return (
        <AccountContext.Provider
            value={{
                ProjData
            }}
        >
            {children}
        </AccountContext.Provider>
    );

}