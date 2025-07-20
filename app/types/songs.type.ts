export type SongType = {
    title: string;
    artist: string;
    key: string;
    sections: SectionType[];
}

export type SectionType = {
    section: "Verse" | "Chorus" | "Bridge" | "Interlude" | "Outro" | "Intro" | "Pre-Chorus" | "Refrain" | "Chant";
    song: ChordsAndLyricsType[];
}

export type ChordsAndLyricsType = {
    lyrics: string;
    chords: ChordType[];
}

export type ChordType = String;