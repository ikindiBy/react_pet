const initialState = {
  user: "unknown",
  currentPage: 17, //offset
  cashFilms: [
    {
      page: 3,
      films: [
        {
          id: 129,
          title: "Spirited Away"
        },
        {
          id: 3322,
          title: "Godfather 4"
        }
      ]
    }
  ],
  films: [
    {
      id: 129,
      title: "Spirited Away",
      tagline: "",
      vote_average: 8.4,
      vote_count: 5095,
      release_date: "2001-07-20",
      poster_path:
        "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
      overview:
        "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
      budget: 15000000,
      revenue: 274925095,
      genres: ["Animation", "Family", "Fantasy"],
      runtime: 125
    },
    {
      id: 240,
      title: "The Godfather: Part II",
      tagline:
        "I don't feel I have to wipe everybody out, Tom. Just my enemies.",
      vote_average: 8.4,
      vote_count: 4308,
      release_date: "1974-12-20",
      poster_path:
        "https://image.tmdb.org/t/p/w500/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
      overview:
        "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      budget: 13000000,
      revenue: 102600000,
      genres: ["Drama", "Crime"],
      runtime: 200
    }
  ]
};

export default function filmsManager(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}
