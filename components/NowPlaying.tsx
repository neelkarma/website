import { FC } from "react";
import useSWR from "swr";
import { FaSpotify } from "react-icons/fa";
import { ClientNowPlaying } from "types/spotify";

export const NowPlaying: FC<{}> = () => {
  const { data } = useSWR<ClientNowPlaying>("/api/spotify");
  if (!data) return <p className="text-gray-500">Loading...</p>;
  return (
    <div className="flex gap-2 items-center">
      <FaSpotify className="text-[#1DB954] text-lg" />
      {data.isPlaying ? (
        <p className="text-gray-500">
          Playing{" "}
          <a
            href={data.url}
            className="transition text-gray-400 hover:text-gray-300"
          >
            {data.artist} - {data.title}
          </a>
        </p>
      ) : (
        <p className="text-gray-500">Nothing Playing</p>
      )}
    </div>
  );
};
