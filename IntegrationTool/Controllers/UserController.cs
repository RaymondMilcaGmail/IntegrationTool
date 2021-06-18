using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntegrationTool.Controllers
{
    public class UserController : Controller
    {
        public ActionResult MyRequests()
        {
            return View();
        }

        public ActionResult ForApprovals()
        {
            return View();
        }
    }
}
