using ClipboardManager.Server.DatabaseModel;
using Microsoft.AspNetCore.Mvc;

namespace ClipboardManager.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FileModelController : ControllerBase
    {
        private readonly ClipboardManagerContext _context;
        public FileModelController(ClipboardManagerContext context)
        {
           _context = context; 
        }
        [HttpPost]
        public IActionResult Paste(FileModel pasteModel)
        {
            if (ModelState.IsValid)
            {
               _context.FileModel.Add(pasteModel);
               _context.SaveChanges();
               return Ok(new {message = "Item added successfully"});
            }
            else
            {
            return BadRequest(new {message = "Invalid data type"});
            }

        } 
    }
}
