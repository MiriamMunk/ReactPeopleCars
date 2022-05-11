using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeople.Data;
using ReactPeopleCars.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private readonly string _ConnString;
        public PeopleCarsController(IConfiguration con)
        {
            _ConnString = con.GetConnectionString("ConStr");
        }

        [Route("getall")]
        [HttpGet]
        public List<Person> GetAll()
        {
            var repo = new PeopleCarsRepository(_ConnString);
            return repo.GetAll();
        }

        [Route("addperson")]
        [HttpPost]
        public void Addperson(Person p)
        {
            var repo = new PeopleCarsRepository(_ConnString);
            repo.AddPerson(p);
        }

        [Route("getbyid")]
        [HttpGet]
        public Person GetById(int id)
        {
            var repo = new PeopleCarsRepository(_ConnString);
            return repo.GetById(id);
        }

        [Route("addcar")]
        [HttpPost]
        public void Addcar(Car car)
        {
            var repo = new PeopleCarsRepository(_ConnString);
            repo.AddCar(car);
        }

        [Route("deleteCars")]
        [HttpPost]
        public void DeleteCars(int id)
        {
            var repo = new PeopleCarsRepository(_ConnString);
            repo.DeleteCars(id);
        }
    }
}
