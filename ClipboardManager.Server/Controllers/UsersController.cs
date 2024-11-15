using ClipboardManager.Server.DatabaseModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;

namespace ClipboardManager.Server.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class UsersController : ControllerBase
  {
    private readonly ClipboardManagerContext _context;

    public UsersController(ClipboardManagerContext context) 
    {
      _context = context;
    }

    //[HttpGet("login")]
    //public IActionResult Login([FromBody] User neUser)
    //{

    //}

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] User newUser)
    {
      if (_context.User.Any(u => u.Username == newUser.Username || u.Email == newUser.Email))
      {
        return BadRequest("Korisnik vec postoji");
      }

      var passwordHasher = new PasswordHasher<User>();
      newUser.Password = passwordHasher.HashPassword(newUser, newUser.Password);

      _context.User.Add(newUser);
      await _context.SaveChangesAsync();

      return Ok(newUser.GetPublic());
    }

    [HttpOptions("register")]
    public IActionResult Options()
    {
      return Ok();
    }
  }
}
