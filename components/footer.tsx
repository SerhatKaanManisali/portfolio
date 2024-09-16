import React from "react"
import { LinkPreview } from "./ui/link-preview"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

const footer = () => {
    return (
        <div>
            <LinkPreview url="https://github.com/SerhatKaanManisali" layout="dynamic"><FaGithub className="size-11" /></LinkPreview>
            <LinkPreview url="https://www.linkedin.com/in/serhat-kaan-manisali"><FaLinkedin className="size-11" /></LinkPreview>
        </div>
    )
}

export default footer