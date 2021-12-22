import { FC } from "react";
import useSWR from "swr";
import { ClientNowPlaying } from "types/spotify";

export const NowPlaying: FC<{}> = () => {
  const { data } = useSWR<ClientNowPlaying>("/api/spotify");
  if (!data) return <p className="text-gray-500">Loading...</p>;
  return data.isPlaying ? (
    <p className="text-gray-400 dark:text-gray-500">
      Playing{" "}
      <a
        href={data.url}
        className="transition text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
      >
        {data.artist} - {data.title}
      </a>
    </p>
  ) : (
    <p className="text-gray-500">Nothing Playing</p>
  );
};
