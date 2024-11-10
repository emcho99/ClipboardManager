using ClipboardManager.Server.DatabaseModel;
using Microsoft.EntityFrameworkCore;

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

// Connect to database
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
builder.Services.AddDbContext<ClipboardManagerContext>(options =>
  options.UseSqlServer(connectionString));

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

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
