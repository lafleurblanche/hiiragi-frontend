async function FetcherGet(url: RequestInfo) {
  try {
      const res = await fetch(url);
      const json = await res.json();
      console.log("json: ", json);
      return json;
    } catch (e) {
      throw e;
    }
}

export default FetcherGet;
