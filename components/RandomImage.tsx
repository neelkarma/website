import Image from "next/image";
import { FC } from "react";
import useSWRImmutable from "swr/immutable";
import { ImageResponse } from "types/image";

export const RandomImage: FC = () => {
  const res = useSWRImmutable<ImageResponse>("/api/image");

  if (!res.data)
    return (
      <div className="w-[120px] h-[120px] rounded-full bg-gray-700 animate-pulse"></div>
    );
  console.log(res.data);

  return (
    <div className="rounded-full">
      <Image
        placeholder="blur"
        blurDataURL={res.data.photoBlurURL}
        src={res.data.photoURL}
        alt={
          res.data.description ??
          `Photo by ${res.data.userFullName} on Unsplash`
        }
        title={`Photo by ${res.data.userFullName} on Unsplash`}
        className="rounded-full"
        width="120px"
        height="120px"
      />
    </div>
  );
};
