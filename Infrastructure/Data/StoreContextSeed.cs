using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class StoreContextSeed{
    
          private readonly StoreContext context;

        public StoreContextSeed(StoreContext _context)
        {
            context=_context;
        }

        public void SeedAsync()
        {
            context.Database.EnsureCreated();

            if(!context.ProductBrands.Any())
            {   

                var brandsData=
                File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");

                var brands=JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

                foreach(var item in brands)
                {

                    context.ProductBrands.Add(item);
                }

                 context.SaveChanges();

         if(!context.ProductTypes.Any())
            {
                var typesData=
                File.ReadAllText("../Infrastructure/Data/SeedData/types.json");

                var types=JsonSerializer.Deserialize<List<ProductType>>(typesData);

                foreach(var item in types)
                {

                    context.ProductTypes.Add(item);
                }

                 context.SaveChanges();

            }

            if(!context.Products.Any())
            {
                var productsData=
                File.ReadAllText("../Infrastructure/Data/SeedData/products.json");

                var products=JsonSerializer.Deserialize<List<Product>>(productsData);

                foreach(var item in products)
                {

                    context.Products.Add(item);
                }

                 context.SaveChanges();

            }
            
 if(!context.Products.Any())
 {
            context.Products.AddRange(new List<Product>()
                {
                
                     new Product()
                        
                        { Id=1,
                           Name= "Angular Speedster Board 2000",
    Descriptio= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
    Price= 200,
    PictureUrl= "images/products/sb-ang1.png",
    ProductTypeId=1,
    ProductBrandId= 1
                           
                        },

                       new Product()
                        { Id=2,
                           Name= "Green Angular Board 3000",
    Descriptio= "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
    Price= 150,
    PictureUrl= "images/products/sb-ang2.png",
    ProductTypeId= 1,
    ProductBrandId= 1
                           
                        }
                });
            context.SaveChanges(); 
 }
                
               /* context.Products.AddRange(new List<Product>()
                {
                
                     new Product()
                        
                        {
                            Id=1,
                            Name = "Karthik",
                           
                        },
                       new Product()
                        {
                            Id=2,
                            Name = "Jacob",
                           
                        }
                });
            context.SaveChanges();   */

            }
               
               
            }

            
        
    
    
    
    /*public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
    {
        try{
            if(!context.ProductBrands.Any())
            {
                var brandsData=
                File.ReadAllText("../Infrastructure/Data/SeedData/brands.json");

                var brands=JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

                foreach(var item in brands)
                {

                    context.ProductBrands.Add(item);
                }

                await context.SaveChangesAsync();

            }

            if(!context.ProductTypes.Any())
            {
                var typesData=
                File.ReadAllText("../Infrastructure/Data/SeedData/types.json");

                var types=JsonSerializer.Deserialize<List<ProductType>>(typesData);

                foreach(var item in types)
                {

                    context.ProductTypes.Add(item);
                }

                await context.SaveChangesAsync();

            }

            if(!context.Products.Any())
            {
                var productsData=
                File.ReadAllText("../Infrastructure/Data/SeedData/products.json");

                var products=JsonSerializer.Deserialize<List<Product>>(productsData);

                foreach(var item in products)
                {

                    context.Products.Add(item);
                }

                await context.SaveChangesAsync();

            }


        }

        catch(Exception ex)
        {
            var logger=loggerFactory.CreateLogger<StoreContextSeed>();
            logger.LogError(ex.Message);

        }
    }*/



    }
}