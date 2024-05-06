using AspGame.DAL.Interfaces;
using AspGame.Model;
using AspGame.Model.ViewModels;
using AspGame.Services.Interfaces;

namespace AspGame.Services
{
    public class RoomListService : IRoomListService
    {
        private readonly IRoomRepository _repository;

        public RoomListService(IRoomRepository repository)
        {
            _repository = repository;
        }

        public async Task<Responce> CreateRoom(GameRoomViewModel viewModel)
        {
            bool isValid = ObjectValidator.IsValid(viewModel, out var errors);   

            if (isValid == false)
                return new Responce(StatusCodes.Error, errors);

            var room = new GameRoom()
            {
                Name = viewModel.Name,
            };

            try
            {
                await _repository.Add(room);
            }
            catch (Exception e)
            {
                return new Responce(StatusCodes.Error, new string[] { e.Message });
            }

            return Responce.Success;
        }

        public async Task<Responce> DeleteRoom(int id)
        {
            bool result = await _repository.DeleteById(id);

            if (result == false)
            {
                return new Responce(StatusCodes.Error, new string[] 
                {
                    "Unable to delete room"
                });
            }

            return Responce.Success;
        }

        public async Task<Responce<GameRoom>> Get(int id)
        {
            var room = await _repository.Get(id);

            if (room == null)
            {
                return new Responce<GameRoom>(null, StatusCodes.Error, new string[]
                {
                    "Unable to get room"
                });
            }

            return new Responce<GameRoom>(room, StatusCodes.Ok);
        }

        public Task<Responce<IEnumerable<GameRoom>>> GetAll()
        {
            var rooms = _repository.GetAll();
            var responce = new Responce<IEnumerable<GameRoom>>(rooms, StatusCodes.Ok);

            return Task.FromResult(responce);
        }
    }
}
