using AspGame.DAL.Interfaces;
using AspGame.Model;
using Microsoft.EntityFrameworkCore;

namespace AspGame.DAL.Repositories
{
    public class RoomRepository : IRoomRepository
    {
        private readonly ApplicationDbContext _context;

        public RoomRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task Add(GameRoom item)
        {
            await _context.AddAsync(item);
            _context.SaveChanges();
        }

        public Task<bool> Delete(GameRoom room)
        {
            var state = _context.Remove(room).State;

            return Task.FromResult(state == EntityState.Deleted);
        }

        public async Task<bool> DeleteById(int id)
        {
            var room = await _context.Rooms.FirstOrDefaultAsync(x => x.Id == id);

            if (room == null)
                return false;

            var result = await Delete(room);

            return result;
        }

        public async Task<GameRoom?> Get(int id)
        {
            var room = await _context.Rooms.FirstOrDefaultAsync(x => x.Id == id);
            return room;
        }

        public IQueryable<GameRoom> GetAll()
        {
            return _context.Rooms;
        }
    }
}
