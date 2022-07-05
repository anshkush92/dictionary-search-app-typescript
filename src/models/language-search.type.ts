export type LanguageProps = {
  className?: string;
  children?: React.ReactNode;
  getLanguage: (language: string) => void;
};

export type SearchProps = {
  className?: string;
  children?: React.ReactNode;
  language: string;
  getData: (data: React.ReactNode) => void;
};

export type languagesType = {
  label: string;
  value: string;
};

export type OutputProps = {
  className?: string;
  children?: React.ReactNode;
  data?: React.ReactNode;
};
