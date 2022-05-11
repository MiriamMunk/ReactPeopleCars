using Microsoft.EntityFrameworkCore;
using ReactPeopleCars.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ReactPeople.Data
{
    public class PeopleCarsRepository
    {
        private readonly string _ConnectionString;
        public PeopleCarsRepository(string ConString)
        {
            _ConnectionString = ConString;
        }
        public List<Person> GetAll()
        {
            PeopleDataContext context = new(_ConnectionString);
            return context.People.Include(c => c.Cars).ToList();
        }

        public void AddPerson(Person p)
        {
            PeopleDataContext context = new(_ConnectionString);
            context.People.Add(p);
            context.SaveChanges();
        }

        public Person GetById(int id)
        {
            PeopleDataContext context = new(_ConnectionString);
            return context.People.Include(c => c.Cars).FirstOrDefault(x => x.Id == id);
        }
        public void AddCar(Car c)
        {
            PeopleDataContext context = new(_ConnectionString);
            context.Cars.Add(c);
            context.SaveChanges();
        }
        public void DeleteCars(int id)
        {
            PeopleDataContext context = new(_ConnectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM cars WHERE personId = {id}");
            context.SaveChanges();
        }
    }
}
