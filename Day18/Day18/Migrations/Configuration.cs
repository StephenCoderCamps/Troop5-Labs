namespace Day18.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Day18.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Day18.Models.ApplicationDbContext context)
        {
            var movies = new Movie[]
            {
                new Movie {Title="Terminator", Director="Camaron" },
                new Movie {Title="King Kong", Director="Jackson" },
                new Movie {Title="Memento", Director="Nolan" },
            };

            context.Movies.AddOrUpdate(m => m.Title, movies);
        }
    }
}
