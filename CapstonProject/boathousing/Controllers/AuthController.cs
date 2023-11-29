using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using boathousing.Models;
using Microsoft.AspNetCore.Mvc;

namespace boathousing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
          private ApplicationDbContext _context;
        public AuthController(ApplicationDbContext context){
            this._context = context;
        }

    }
}