using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;
using ZwajApp.API.Data;
using ZwajApp.API.Models;

namespace ZwajApp.API.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly DataContext _context;
    public WeatherForecastController(DataContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetValues()
    {
        var values = await _context.Values.ToListAsync();
        return Ok(values);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetValue(int id)
    {
        var value = await _context.Values.FirstOrDefaultAsync(w=>w.id == id);
        return Ok(value);
    }

    [HttpPost]
    public async Task<IActionResult> AddValue(Value value)
    {
        var res =  _context.Values.Add(value);
        await _context.SaveChangesAsync();
        return Ok(res);
    }
}
