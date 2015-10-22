using CoderCamps;
using Day18.Models;
using Day18.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Day18.API
{
    public class MoviesController : ApiController
    {

        private IMovieService _movieService;


        public MoviesController(IMovieService movieService)
        {
            this._movieService = movieService;
        }


        public IEnumerable<Movie> Get()
        {
            return _movieService.ListMovies();
        }


        public IHttpActionResult Get(int id)
        {
            var movie = _movieService.GetMovie(id);
            if (movie == null) {
                return NotFound();
            }
            return Ok(movie);
        }



        public IHttpActionResult Post(Movie movie)
        {
            if (movie == null) {
                return BadRequest("Missing movie.");
            }

            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }


            if (movie.Id == 0) {
                _movieService.AddMovie(movie);
                return Created("/movies/" + movie.Id, movie);
            } else {
                _movieService.EditMovie(movie);
                return Ok(movie);
            }
        }


        public IHttpActionResult Delete(int id)
        {
            var original = _movieService.GetMovie(id);
            if (original == null) {
                return NotFound();
            }
            _movieService.DeleteMovie(id);
            return Ok();
        }


    }
}
