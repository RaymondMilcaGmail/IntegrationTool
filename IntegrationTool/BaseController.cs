using IntegrationTool.Model.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntegrationTool
{
    public class BaseController : Controller
    {
        protected IntegrationToolContext _context;

        public BaseController() {
            _context = new IntegrationToolContext();
            _context.ChangeTracker.LazyLoadingEnabled = true;

            //_context.Configuration.LazyLoadingEnabled = true;
        }

        protected override void Dispose(bool disposing)
        {
            _context.Dispose();

            base.Dispose(disposing);
        }
    }
}
