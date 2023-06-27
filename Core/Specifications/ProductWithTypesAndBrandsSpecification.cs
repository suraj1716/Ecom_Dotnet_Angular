using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductWithTypesAndBrandsSpecification: BaseSpecification<Product>
    {
        public  ProductWithTypesAndBrandsSpecification(string sort)
        {

            AddInclude(x=>x.ProductType);
            AddInclude(x=>x.ProductBrand);
            AddOrderBy(x=>x.Name);
            
        }

         public  ProductWithTypesAndBrandsSpecification(int id)
         : base(x=>x.Id==id)
        {
            
            AddInclude(x=>x.ProductType);
            AddInclude(x=>x.ProductBrand);
            
        }
    }
}