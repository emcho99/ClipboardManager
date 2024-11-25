using Microsoft.EntityFrameworkCore;
using ClipboardManager.Server.DatabaseModel;

namespace ClipboardManager.Server.DatabaseModel
{
  public class ClipboardManagerContext : DbContext
  {
    public ClipboardManagerContext(DbContextOptions<ClipboardManagerContext> options) : base(options) {}
    public DbSet<User> User { get; set; }
  }
}