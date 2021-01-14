export const getMovies = (apiKey, searchValue, page) => {
  return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}&type=movie&page=${page}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      } else {
        return response.json()
      }
    })
}