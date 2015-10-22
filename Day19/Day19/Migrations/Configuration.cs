namespace Day19.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Day19.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Day19.Models.ApplicationDbContext context)
        {
            var categories = new Category[]
            {
               new Category
               {
                   Name = "SciFi",
                   Movies = new Movie[]
                   {
                       new Movie { Title="Blade Runner"},
                       new Movie { Title="Ex Machina"},
                   }
               },

               new Category
               {
                   Name="Drama",
                   Movies = new Movie[]
                   {
                       new Movie {Title="The Godfather"}
                   }
               }

            };

            context.Categories.AddOrUpdate(c => c.Name, categories);
        }
    }
}
