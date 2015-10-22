using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Day18.Models
{
    public class EFRepository : IRepository
    {
        private ApplicationDbContext _db = new ApplicationDbContext();


        public IList<Movie> ListMovies()
        {
            return _db.Movies.ToList();
        }


        public Movie FindMovie(int id)
        {
            return _db.Movies.Find(id);
        }


        public void Insert(Movie movie)
        {
            _db.Movies.Add(movie);
            _db.SaveChanges();
        }

        public void Edit(Movie movie)
        {
            var original = this.FindMovie(movie.Id);
            original.Title = movie.Title;
            original.Director = movie.Director;
            _db.SaveChanges();
        }


        public void Delete(int id)
        {
            var original = this.FindMovie(id);
            _db.Movies.Remove(original);
            _db.SaveChanges();
        }


    }
}