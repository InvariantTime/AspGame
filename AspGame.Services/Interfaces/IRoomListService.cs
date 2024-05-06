using AspGame.Model;
using AspGame.Model.ViewModels;

namespace AspGame.Services.Interfaces
{
    public interface IRoomListService
    {
        Task<Responce> CreateRoom(GameRoomViewModel viewModel);

        Task<Responce<IEnumerable<GameRoom>>> GetAll();

        Task<Responce<GameRoom>> Get(int id);

        Task<Responce> DeleteRoom(int id);
    }
}
