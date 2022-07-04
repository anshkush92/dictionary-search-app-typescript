export const DictionaryApi = async (searchedWord: React.ReactNode) => {
  const requestUrl: string = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
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
