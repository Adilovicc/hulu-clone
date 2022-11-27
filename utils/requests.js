const API_KEY = "eb02f1cf82b35b79de8433b86efc7501"

const requests = {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
       title: 'Top rated',
       url:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    },
    fetchActionMovies: {
        title: 'Action',
        url:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
     },
     fetchComedyMovies: {
         title: 'Comedy',
         url:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
     },
     fetchHorrorMovies: {
        title: 'Horror',
        url:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
     },
     fetchRomanceMovies: {
        title: 'Romance',
        url:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
     },
     fetchMysteryMovies: {
         title: 'Mystery',
         url:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
     },
     fetchThrillerMovies:{
         title: 'Thriller',
         url:`/discover/movie?api_key=${API_KEY}&language=en-US&with-genres=53`
     },
     fetchDocumentaryMovies:{
        title: 'Documentary',
        url:`/discover/movie?api_key=${API_KEY}&language=en-US&with-genres=99`
    },
 
}

export default requests