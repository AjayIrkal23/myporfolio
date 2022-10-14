
import { createContext } from "react";
import kohsa from "../public/assests/kohsa.png"
import spevents from "../public/assests/spevents.png"
import youtube from "../public/assests/mercysyoutube.png"
import Whatsapp from "../public/assests/mercysWhatsapp.png"
import bootstrap from "../public/assests/Bootstrap_logo.svg.png"
import css from "../public/assests/css.png"
import firebase from "../public/assests/firebase.png"
import GitHub from "../public/assests/github1.png"
import Html from "../public/assests/html.png"
import MongoDB from "../public/assests/mongo.png"
import Node from "../public/assests/node.png"
import Material from "../public/assests/mui.png"
import Javascript from "../public/assests/javascript.png"
import React from "../public/assests/react.png"
import Netflix from "../public/assests/Netflix.png"
import Three from "../public/assests/three.png"
import TailWind from "../public/assests/tailwind.png"
import styled from "../public/assests/styled-components.png"
import luckybet from "../public/assests/luckybet.png"
import logo from "../public/assests/logo.jpg"
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
            Image: Netflix,
            Stack: "React / Nextjs / TailWind / MUI / Firebase ",
            Title: "MercysNetflix",
            Url: "/MercysNetflix",
            Technologies: ["React", "Material UI", "Nextjs", "TailWind", "NodeJs", "FireBase"],
            Description: "Netflix is one of the world's leading entertainment services with 221 million paid memberships in over 190 countries enjoying TV series, documentaries, feature films and mobile games across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments. ",
            Visit: "https://mercysnetflix-8iu7.vercel.app/"
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
        {
            Image: luckybet,
            Stack: " REACT / Threejs / R3F / CannonJs / React-Cannonjs /  ",
            Title: "LuckyBet",
            Url: "/LuckyBet",
            Technologies: ["React", "Three Js", "Cannonjs", "R3f"],
            Description: "LuckyBet is an On development 3d Online Casino Game Where people place bets and win or lose their money this game is developed using threejs one of popular 3d development language [ Note This is desktop only for now as it is under development]",
            Visit: "https://luckyshit.vercel.app/"
        },
    ]

    const data = [
        {
            Image: Javascript,
            Title: "Javascript"
        },
        {
            Image: Node,
            Title: "Node JS"
        },
        {
            Image: MongoDB,
            Title: "MongoDB"
        },
        {
            Image: React,
            Title: "React JS"
        },
        {
            Image: Three,
            Title: "Three Js"
        },
        {
            Image: bootstrap,
            Title: "Bootstrap"
        },
        {
            Image: logo,
            Title: "R3F/R3Drei"
        },
        {
            Image: css,
            Title: "Css"
        },
        {
            Image: firebase,
            Title: "Firebase"
        },
        {
            Image: GitHub,
            Title: "GitHub"
        },
        {
            Image: Html,
            Title: "Html"
        },


        {
            Image: Material,
            Title: "Material UI"
        },

        {
            Image: TailWind,
            Title: "TailWind Css"
        },

        {
            Image: styled,
            Title: "Styled Component"
        },


    ]

    return (
        <AccountContext.Provider
            value={{
                ProjData,
                data
            }}
        >
            {children}
        </AccountContext.Provider>
    );

}