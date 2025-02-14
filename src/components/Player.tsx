import { useEffect, useRef, useState } from "react";
import tracks from "../data/tracks";

export default function Player() {

    const audioRef = useRef<HTMLAudioElement>(null);

    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    useEffect(() => {
        if (!isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
    },[isPlaying, audioRef]);

    function handleChangeTrack(file: string) {
        if (audioRef.current) {
            audioRef.current.src = `./tracks/${file}`;
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => setIsPlaying((prev) => !prev)}>{isPlaying ? "Pause" : "Play"}</button>
            </div>
            <audio ref={audioRef} src="./tracks/09-IfYoureHappyChant.mp3" />
            <ul>
                {tracks
                    .map(track => (
                        <li 
                            style={{ cursor: "pointer" }}
                            key={track.title}
                            onClick={() => handleChangeTrack(track.file)}
                        >{track.title}</li>
                    ))}
            </ul>
        </div>
    );
}