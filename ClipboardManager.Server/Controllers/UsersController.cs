using ClipboardManager.Server.DatabaseModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity.Data;
using System.Text;

namespace ClipboardManager.Server.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class UsersController : ControllerBase
  {
    private readonly ClipboardManagerContext _context;
    private readonly IConfiguration _configuration;

    public UsersController(ClipboardManagerContext context, IConfiguration configuration) 
    {
      _context = context;
      _configuration = configuration;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest loginRequest)
    {
      //provjera emaila
      var user = _context.User.FirstOrDefault(u => u.Email == loginRequest.Email);
      if (user == null)
      {
        return Unauthorized("Pogresan email ili lozinka");
      }
      //provjera sifre
      var passwordHasher = new PasswordHasher<User>();
      var passwordVerificationResult = passwordHasher.VerifyHashedPassword(user, user.Password, loginRequest.Password);
      if (passwordVerificationResult == PasswordVerificationResult.Failed)
      {
        return Unauthorized("Pogresan email ili lozinka");
      }

      var token = GenerateJwtToken(user);
      return Ok(new
      {
        Token = token
        //Username = user.Username,
        //Email = user.Email
      }
      );
    }

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

    private string GenerateJwtToken(User user)
    {
      var claims = new[]
      {
        new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
        new Claim(JwtRegisteredClaimNames.Email, user.Email), 
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        new Claim(ClaimTypes.Name, user.Username)
      };

      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
      var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

      var token = new JwtSecurityToken(
        _configuration["Jwt:Issuer"],
        _configuration["Jwt:Audience"],
        claims,
        expires: DateTime.Now.AddHours(2),
        signingCredentials: creds
      );

      return new JwtSecurityTokenHandler().WriteToken(token);
    }
  }

  public class LoginRequest
  {
    public string Email { get; set; }
    public string Password { get; set; }
  }
}
