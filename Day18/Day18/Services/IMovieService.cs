using System.Collections.Generic;
using Day18.Models;

namespace Day18.Services
{
    public interface IMovieService
    {
        void AddMovie(Movie movie);
        void DeleteMovie(int id);
        void EditMovie(Movie movie);
        IList<Movie> ListMovies();
        Movie GetMovie(int id);
    }
}