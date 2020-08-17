
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class UserController: ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        public UserController(IDatingRepository repo,IConfiguration config,IMapper mapper)
        {
            this._repo = repo;
            this._config = config;
            this._mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult> GetUsers()
        {
            var users =await _repo.GetUsers();
            var userMapped = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(userMapped);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> GetUser(int id)
        {
            var user =await  _repo.GetUser(id);
            var userMapped = _mapper.Map<UserForDetailDto>(user);
            return Ok(userMapped);
        }
    }
}