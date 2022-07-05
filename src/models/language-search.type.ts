import { Api } from "./api.type";

export type LanguageProps = {
  className?: string;
  children?: React.ReactNode;
  getLanguage: (language: string) => void;
};

export type SearchProps = {
  className?: string;
  children?: React.ReactNode;
  language: string;
  getData: (data: Api[] | null) => void;
};

export type languagesType = {
  label: string;
  value: string;
};

export type OutputProps = {
  className?: string;
  children?: React.ReactNode;
  data?: Api[] | null;
};
