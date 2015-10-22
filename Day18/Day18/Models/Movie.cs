using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Day18.Models
{
    public class Movie
    {
        public int Id { get; set; }

        [Required(ErrorMessage="Title is required!")]
        public string Title { get; set; }

        [Required(ErrorMessage ="Director is required!")]
        public string Director { get; set; }
    }
}