export type wordContextProviderProps = {
  children: React.ReactNode;
};

export type wordContext = {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
};
