using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Security.Cryptography;

namespace ClipboardManager.Server.DatabaseModel
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Username { get; set; } = "";
        public string Password { get; set; } = "";
        public string Name { get; set; } = "";
        public string LastName { get; set; } = "";
        public string Email { get; set; } = "";
        public string Adress { get; set; } = "";

        public static string Hash(string password, string passwordSalt)
        {
            SHA256 sha256Hash = SHA256.Create();
            byte[] passwordBytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(passwordSalt + password));
            string passwordHash = Convert.ToBase64String(passwordBytes);
            return passwordHash;
        }

        public object GetPublic()
        {
            return new {
                id = this.Id,
                username = this.Username,
                password = this.Password,
                name = this.Name,
                lastName = this.LastName,
                email = this.Email,
                address = this.Adress
            };
        }
    }
}
