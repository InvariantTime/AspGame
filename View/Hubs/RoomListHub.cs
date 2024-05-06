using Microsoft.AspNetCore.SignalR;

namespace AspGame.Hubs
{
    public class RoomListHub : Hub
    {
        public const string ChangeHookName = "onRoomsChanged";

        public override async Task OnConnectedAsync()
        {
            await Task.CompletedTask;
        }
    }
}
