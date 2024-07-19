import Image from "next/image";
import React from "react";
import { BuildProject as BuildProjectType } from "@/app/types";
import GithubIcon from "../../../../public/image/github-mark.png";

export default function BuildProject({ prop }: { prop: BuildProjectType }) {
  return (
    <div className="m-10 p-10 flex flex-row items-center border-dotted border-2 border-neutral-200 hover:border-solid hover:border-neutral-300">
      <div className="mr-20">
        <Image src={prop.img} width={300} height={50} alt={prop.imgAlt}></Image>
      </div>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold">{prop.title}</h2>
        <p>{prop.description}</p>
        <div className="group">
          <a href={prop.github} target="_blank">
            <Image src={GithubIcon} alt="github icon" width={30}></Image>
          </a>
          <div className="invisible group-hover:visible ">{prop.github}</div>
        </div>
      </div>
    </div>
  );
}
