using CoderCamps;
using Day18.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Day18.Services
{
    public class MovieService : IMovieService
    {
        private IGenericRepository _repo;

        public MovieService(IGenericRepository repo)
        {
            this._repo = repo;
        }


        public IList<Movie> ListMovies()
        {
            return _repo.Query<Movie>().ToList();
        }


        public Movie GetMovie(int id)
        {
            return _repo.Find<Movie>(id);
        }

        public void AddMovie(Movie movie)
        {
            _repo.Add(movie);
            _repo.SaveChanges();
        }

        public void EditMovie(Movie movie)
        {
            var original = _repo.Find<Movie>(movie.Id);
            original.Title = movie.Title;
            original.Director = movie.Director;
            _repo.SaveChanges();
        }

        public void DeleteMovie(int id)
        {
            _repo.Delete<Movie>(id);
            _repo.SaveChanges();
        }


    }
}