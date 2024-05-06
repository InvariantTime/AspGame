using AspGame.Model;

namespace AspGame.DAL.Interfaces
{
    public interface IRoomRepository : IRepository<GameRoom>
    {
        Task<bool> DeleteById(int id);
    }
}
