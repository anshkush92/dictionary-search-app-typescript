export const DictionaryApi = async (
  searchedWord: React.ReactNode,
  language: string
) => {
  const requestUrl: string = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${searchedWord}`;
  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(requestUrl, parameters);
  console.log(response);

  const data = await response.json();
  console.log(data);
};
