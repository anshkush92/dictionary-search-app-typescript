export type Api = {
  license: {} | null;
  meanings: Meanings[] | null;
  phonetic: string | null;
  phonetics: Phonetics[] | null;
  sourceUrls: string[] | null;
  word: string | null;
};

export type License = {
  name: string;
  url: string;
};

export type Phonetics = {
  text: string;
  audio: string;
};

export type Meanings = {
  antonyms: string[]
  definitions: Definition[];
};

export type Definition = {
  definition: string;
};
