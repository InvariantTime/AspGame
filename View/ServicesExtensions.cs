using AspGame.DAL.Interfaces;
using AspGame.DAL.Repositories;
using AspGame.Services.Interfaces;
using AspGame.Services;

namespace AspGame
{
    public static class ServicesExtensions
    {
        public static IServiceCollection InitializeServices(this IServiceCollection services)
        {
            services.AddScoped<IRoomListService, RoomListService>();

            return services;
        }


        public static IServiceCollection InitializeRepositories(this IServiceCollection services)
        {
            services.AddScoped<IRoomRepository, RoomRepository>();

            return services;
        }


        public static IServiceCollection InitializeMapper(this IServiceCollection services)
        {
            var assemblies = AppDomain.CurrentDomain.GetAssemblies();
            services.AddAutoMapper(assemblies);

            return services;
        }
    }
}
