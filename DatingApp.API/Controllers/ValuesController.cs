using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly  DataContext _context;
        public ValuesController(DataContext context)
        {
            this._context = context;
        }
    
        [HttpGet]
        public IActionResult GetValues()
        {
           var value =  _context.Values.ToList();
           return Ok(value);
        }
        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetValuesById(int id)
        {
           var value =  _context.Values.FirstOrDefault(x=>x.Id==id);
           return Ok(value);
        }
    }
}
