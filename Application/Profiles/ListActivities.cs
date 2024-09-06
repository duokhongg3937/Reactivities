using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles;

public class ListActivities
{
  public class Query : IRequest<Result<List<UserActivityDto>>>
  {
    public string Username { get; set; }
    public string Predicate { get; set; }
  }

  public class Handler(DataContext context, IMapper mapper) : IRequestHandler<Query, Result<List<UserActivityDto>>>
  {
    private readonly DataContext context = context;
    private readonly IMapper mapper = mapper;

    public async Task<Result<List<UserActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
    {
      var query = context.ActivityAttendees
        .Where(u => u.AppUser.UserName == request.Username)
        .OrderBy(a => a.Activity.Date)
        .ProjectTo<UserActivityDto>(mapper.ConfigurationProvider)
        .AsQueryable();

      query = request.Predicate switch
      {
        "past" => query.Where(a => a.Date <= DateTime.Now),
        "hosting" => query.Where(a => a.HostUsername == request.Username),
        _ => query.Where(a => a.Date >= DateTime.Now)
      };

      var activities = await query.ToListAsync();

      return Result<List<UserActivityDto>>.Success(activities);
    }
  }

}
