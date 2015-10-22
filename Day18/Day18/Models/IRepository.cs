using System.Collections.Generic;

namespace Day18.Models
{
    public interface IRepository
    {
        void Delete(int id);
        void Edit(Movie movie);
        Movie FindMovie(int id);
        void Insert(Movie movie);
        IList<Movie> ListMovies();
    }
}