import styles from "./page.module.scss";
import { songData } from "./song-data";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles["song"]}>
          <div className={styles["song__song-header"]}>
            <h1>{songData.title}</h1>
            <p>By {songData.artist}</p>
            <p>Key: {songData.key}</p>
          </div>

          {songData.sections.map((section, index) => (
            <div className={styles["song__song-section"]} key={index}>
              <p>{section.section}</p>
              <div className={styles["song__song-lyrics"]}>
                {section.song.map((line, lineIndex) => (
                  <div key={lineIndex}>
                    <p>{line.chords.join(" ")}</p>
                    <p>{line.lyrics}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
