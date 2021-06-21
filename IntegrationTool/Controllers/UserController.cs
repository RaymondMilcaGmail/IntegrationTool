using IntegrationTool.Model.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntegrationTool.Controllers
{
    public class UserController : BaseController
    {

        public ActionResult Users()
        {          
            return View();       
        }

        [HttpPost]
        public ActionResult Users(User user)
        {
            var existing_users = _context.Users
                            .Where(c =>
                                   c.UserName == user.UserName &&
                                   c.Password == user.Password
                                   )
                            .SingleOrDefault();

            if (existing_users == null)
            {
                ModelState.AddModelError("Invalid Username/Password", string.Empty);
                return View(existing_users);
            }                       

            return RedirectToAction("/partners");
        }

        [HttpPost]
        public ActionResult SelectAllUsers()
        {
            var users = _context.Users
                            .ToList();
            return View(users);
        }

        [HttpPost]
        public ActionResult AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();

            return View(user);
        }

        [HttpPost]
        public ActionResult DeleteUser(User user)
        {
            var existing_users = _context.Users.SingleOrDefault(x=>x.UserName == user.UserName);

            if (existing_users != null)
            {
                _context.Users.Remove(existing_users);
                _context.SaveChanges();
            }

            return View(user);
        }


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
