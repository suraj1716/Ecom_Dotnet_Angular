
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Core.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using static System.Formats.Asn1.AsnWriter;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.




builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddDbContext<StoreContext>(options=>options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddTransient<StoreContextSeed>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();

var app = builder.Build();


//Seed Data
 
if (args.Length == 1 && args[0].ToLower() == "seeddata")
    SeedData(app);

//Seed Data
void SeedData(IHost app)
{
    var scopedFactory = app.Services.GetService<IServiceScopeFactory>();
   

    using (var scope = scopedFactory.CreateScope())
    {
        var service = scope.ServiceProvider.GetService<StoreContextSeed>();
        
         service.SeedAsync();
       
    }
}






/*var host=Host.CreateApplicationBuilder(args).Build();
/using (var scope= host.Services.CreateScope())
    {
        var service=scope.ServiceProvider;
        var loggerFactory=service.GetRequiredService<ILoggerFactory>();

        try{

                var context=service.GetRequiredService<StoreContext>();
                await context.Database.MigrateAsync();
                await StoreContextSeed.SeedAsync(context,loggerFactory);

        }
        catch(Exception ex)
        {
            var logger=loggerFactory.CreateLogger<Program>();
            logger.LogError(ex,"An error occur during migration");

        }

      host.Run();

 

}
*/


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
endpoints.MapControllers();
});


app.Run();






 

