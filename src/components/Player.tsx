import tracks from "../data/tracks";

export default function Player() {
    return (
        <div>
            <ul>
                {tracks.map(track => (<li key={track.title}>{track.title}</li>))}
            </ul>
        </div>
    );
}