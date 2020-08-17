using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace DatingApp.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
           var host = CreateWebHostBuilder(args).Build();
           using(var scope = host.Services.CreateScope())
           {
             var Services = scope.ServiceProvider;
             try
             {
                 var Context = Services.GetRequiredService<DataContext>();
                 Context.Database.Migrate();
                 Seed.SeedUsers(Context);

             }
             catch(Exception ex)
             {
                 var logger = Services.GetRequiredService<ILogger<Program>>();
                 logger.LogError(ex,"An error occured during migration");
             }
           }
           host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args).UseStartup<Startup>();
    }
}
