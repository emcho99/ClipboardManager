using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;

using ClipboardManager.Server.DatabaseModel;
using Microsoft.Extensions.Caching.Distributed;

namespace ClipboardManager.Server.Auth;

public class Authentication : ActionFilterAttribute
{
  private ClipboardManagerContext _context;
  private IDistributedCache _cache;
  public override void OnActionExecuting(ActionExecutingContext context)
  {
    //base.OnActionExecuting(context);
    _context = context.HttpContext.RequestServices.GetService(typeof(ClipboardManagerContext)) as ClipboardManagerContext;
    _cache = context.HttpContext.RequestServices.GetService(typeof(IDistributedCache)) as IDistributedCache;

    List<string> actionScopes = new List<string>();

    var controllerActionDescriptor = context.ActionDescriptor as ControllerActionDescriptor;
    var alsoCheckTokenIsQuery = false;
    if (controllerActionDescriptor != null)
    {
      if (controllerActionDescriptor.MethodInfo.GetCustomAttributes(inherit: true).Any(a => a.GetType().Equals(typeof(ActionFilterAttribute))))
      {
        alsoCheckTokenIsQuery = true;
      }

      var methodAttributes = controllerActionDescriptor.MethodInfo.GetCustomAttributes(inherit: true);
      var classAttributes = controllerActionDescriptor.ControllerTypeInfo.GetCustomAttributes(inherit: true);
    }

    var token = context.HttpContext.Request?.Headers["token"].ToString();
    if (string.IsNullOrWhiteSpace(token) && alsoCheckTokenIsQuery)
    {
      // try getting from query param
      token = System.Text.Encoding.UTF8.GetString(System.Convert.FromBase64String(context.HttpContext.Request?.Query["token"].ToString()));
    }

    if (!string.IsNullOrWhiteSpace(token) && token.Length > 3)
    {
      string controller = context.HttpContext.Request.RouteValues["controller"] as string;
      string action = context.HttpContext.Request.RouteValues["action"] as string;
      string user = context.HttpContext.Session.GetString("user");

      if (!String.IsNullOrWhiteSpace(user))
      {
        context.HttpContext.Items["user"] = user;
        return;
      }
    }

    context.HttpContext.Response.StatusCode = 403;
    context.Result = new JsonResult(new
    {
      success = false,
      message = new List<string>() { "authentication_required" },
    });
    return;
  }
}
