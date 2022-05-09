using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    //used to implement kestral server that serves client app from API
    public class FallbackController : Controller
    {
        public ActionResult Index(){
            return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(),
                 "wwwroot", "index.html"), "text/HTML");
        }
    }
}