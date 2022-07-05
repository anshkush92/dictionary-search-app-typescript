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

  try {
    const response = await fetch(requestUrl, parameters);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
