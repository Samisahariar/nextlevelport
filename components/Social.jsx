import React from 'react'
import Link from 'next/link'
import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const socials = [
    {
        icons: <FiGithub></FiGithub>,
        path: "https://github.com/Samisahariar"
    },

    {
        icons: <CiLinkedin />,
        path: "https://www.linkedin.com/in/saklain-sahariar"
    },

    {
        icons: <CiTwitter />,
        path: "https://github.com/Samisahariar"
    },

    {
        icons: <FiFacebook />,
        path: "https://www.facebook.com/sahariar.chowdhury.1"
    }

]


const Social = ({containerStyles, iconstyles}) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((link, index) => {

                    return (
                        <Link key={index} href={link.path} className={iconstyles}>
                            {link.icons}
                        </Link>
                    )

                })
            }
        </div>
    )
}

export default Social