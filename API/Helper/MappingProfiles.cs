using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDtos>()
            .ForMember(d=>d.ProductBrand, o=>o.MapFrom(s=>s.ProductBrand.Name))
            .ForMember(d=>d.ProductType, o=>o.MapFrom(s=>s.ProductType.Name))
            .ForMember(d=>d.PictureUrl, o=>o.MapFrom<ProductUrlResolver>());
        }
    }
}