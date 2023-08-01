using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Route("[controller]")]
    public class BasketController : BaseApiController
    {
        private readonly IbasketRepository _baskekRepository;
      public BasketController(IbasketRepository basketRepository)
      {
        _baskekRepository= basketRepository;
      }

      [HttpGet]
        public async Task<ActionResult<CustomerBasket>> GetBasketById(string id)
        {
            var basket=await _baskekRepository.GetBasketAsync(id);
            return Ok(basket ?? new CustomerBasket(id));

        }

    [HttpPost]
    public async Task<ActionResult<CustomerBasket>> UpdateBasket(CustomerBasket basket)
    {
        var updateBasket= await _baskekRepository.UpdateBasketAsync(basket);
        return Ok(updateBasket);

    }

    [HttpDelete]
    public async Task DeleteBasketAsync(string id)
    {
        await _baskekRepository.DeleteBasketAsync(id);

    }

    }
}