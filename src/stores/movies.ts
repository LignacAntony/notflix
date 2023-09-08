import { defineStore } from 'pinia'

interface DataShema {
  page: number
  results: []
  total_pages: number
  total_results: number
}
export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
export interface SuggestMovie {
  year: number
  name: string
  description: string
  iamge: string
  banner: string
  genre: {
    one: string
    two: string
    three: string
  }
}
export const useMovieStore = defineStore('movie', {
  state: () => ({
    myMovie: {} as SuggestMovie,
    movies: [] as DataShema[],
    favoritesMovies: [] as Movie[]
  }),
  actions: {
    async addMovies() {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODA1ZjkwNjQ2ZmMyNWMwNDMwMzE4ODExYWM0OGZmNyIsInN1YiI6IjY0ZjQ4NTA5ZTBjYTdmMDEwZGU1NjcxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fVMzeA6_kcrsV1WjlzUSVqopVrl-w4xrrm9J0jZI2yY'
        }
      }
      try {
        const res = await Promise.all([
          await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`,
            options
          ),
          await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16`,
            options
          ),
          await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12`,
            options
          ),
          await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35`,
            options
          ),
          await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99`,
            options
          )
        ])
        const data = await Promise.all(res.map((r) => r.json()))
        this.movies = data
      } catch {
        throw Error('Promise failed')
      }
    },
    setFavoritesMovies(movie: Movie) {
      const foundFavoriteIndex = this.favoritesMovies.findIndex((f) => f === movie)
      if (foundFavoriteIndex === -1) {
        this.favoritesMovies.push(movie)
      } else {
        this.favoritesMovies.splice(foundFavoriteIndex, 1)
      }
    }
  },
  getters: {
    getActionMovies(state) {
      const list = { ...state.movies[0] }
      return list.results
    },
    getAnimationMovies(state) {
      const list = { ...state.movies[1] }
      return list.results
    },
    getAdventureMovies(state) {
      const list = { ...state.movies[2] }
      return list.results
    },
    getComedyMovies(state) {
      const list = { ...state.movies[3] }
      return list.results
    },
    getDocumentaryMovies(state) {
      const list = { ...state.movies[4] }
      return list.results
    },
    getFavoritesMovies(state) {
      return state.favoritesMovies
    }
  }
})
