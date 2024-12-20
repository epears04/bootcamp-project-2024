import React from "react";
import Link from "next/link";
import Image from "next/image";
import type Project from "@database/projectSchema";

export default function BlogPreview(props: Project) {
  return (
    <Link href={`/projects/${props.slug}`} passHref>
      <div className="flex flex-col items-center max-w-2xl p-6 mx-auto mb-8 rounded-lg shadow-lg cursor-pointer bg-cream">
        <h3 className="mb-2 text-2xl font-bold text-gray-800">{props.title}</h3>
        <p className="my-1 text-gray-700">Posted on: {new Date(props.date).toLocaleDateString()}</p>
        {props.image &&(
          <Image
            src={props.image}
            alt={props.image_alt}
            width={500}
            height={300}
            className="rounded-lg"
          />
        )}
        <p className="p-2 m-2 text-center text-gray-800">{props.description}</p>
        <p className="text-base text-gray-600">{props.technologies.join(", ")}</p>
      </div>
    </Link>
  );
}
