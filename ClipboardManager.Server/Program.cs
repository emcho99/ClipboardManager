using ClipboardManager.Server.DatabaseModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Sqlite;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
  options.AddPolicy("CORSPolicy",
      builder =>
      {
        builder
          .AllowAnyMethod()
          .AllowAnyHeader()
          .AllowCredentials()
          .WithOrigins("https://localhost:5173");
      });
});

// Add services to the container.

//builder.Services.AddControllers();
builder.Services.AddControllersWithViews();
builder.Services.AddAuthentication("Bearer")
  .AddJwtBearer(options =>
  {
    options.TokenValidationParameters = new TokenValidationParameters
    {
      ValidateIssuer = true,
      ValidIssuer = "ClipboardManager",
      ValidateAudience = true,
      ValidAudience = "ClipboardManagerUsers",
      ValidateIssuerSigningKey = true,
      IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("5e39a39a7e4359815862e7cca862ee09da74a6ceefd1e400278dfc5bdf5c81d0635d1908201adf0d88904cabec6ea9f944534582fb272a535d4d0ae327a272503b6cba10d4047d97a3f10b2984104094b66631089bc3557d1f21b2a7532525d08ef87a9350a77ec4741e8683171de7a47a4ec5a1a73ba639a6dac54b0700c990ce1ac3582ff91bc392b75ec578adba77c73e09100fc36fd3cfb5294426560a28b5f246af697cdad77b50a33289b6e63c1e70d9d1fe80b7ea18842de8254f83d63f3c09f0f44a5468022db434b71606457488b9094a2c6b81c43a878f269abdd1ab68045c9bfab79e7902a8b3d95090c1dd9ba36ba7cea79e07207df07f3e85d1"))
    };
  });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(swaggerGenOptions =>
{
  swaggerGenOptions.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
  {
    Version = "v1",
    Title = "ClipboardManager API",
    Description = "The Clipboard Manager is a web-based application designed to help users easily manage, store and organize their clipboard content across different devices.",
    Contact = new Microsoft.OpenApi.Models.OpenApiContact
    {
      Name = "Emir Aljović",
      Url = new Uri("https://github.com/emcho99")
    }
  });
});

// Connect to database - mysql server database
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
builder.Services.AddDbContext<ClipboardManagerContext>(options =>
  options.UseSqlServer(connectionString));

// Connect to database - sqlite database
//var connectionString = builder.Configuration.GetConnectionString("Database");
//builder.Services.AddDbContext<ClipboardManagerContext>(options =>
//{
//  options.UseSqlite(builder.Configuration.GetConnectionString("Database"));
//});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseRouting();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}
else
{
  app.UseHsts();
}

app.UseHttpsRedirection();
app.UseCors("CORSPolicy");

app.UseAuthorization();

app.UseAuthentication();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
