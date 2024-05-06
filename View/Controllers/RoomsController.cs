using AspGame.Hubs;
using AspGame.Model;
using AspGame.Model.ViewModels;
using AspGame.Services.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace View.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoomsController : ControllerBase
    {
        private readonly IRoomListService _service;
        private readonly IHubContext<RoomListHub> _roomHub;

        public RoomsController(IRoomListService service, IHubContext<RoomListHub> roomHub)
        {
            _service = service;
            _roomHub = roomHub;
        }

        [HttpGet]
        public async Task<IEnumerable<GameRoom>> GetAll()
        {
            var responce = await _service.GetAll();

            if (responce.IsValid == true)
                return responce.Value!;

            foreach (var error in responce.Errors)
                ModelState.AddModelError(string.Empty, error);




            return Enumerable.Empty<GameRoom>();
        }

        [HttpPost]
        public async Task AddRoom(GameRoomViewModel viewModel)
        {
            var responce = await _service.CreateRoom(viewModel);

            if (responce.IsValid == false)
            {
                foreach (var error in responce.Errors)
                    ModelState.AddModelError(string.Empty, error);

                return;
            }

            await _roomHub.Clients.All.SendAsync(RoomListHub.ChangeHookName);
        }
    }
}
