
namespace AspGame.DAL.Interfaces
{
    public interface IRepository<T>
    {
        Task<T?> Get(int id);

        Task Add(T item);

        Task<bool> Delete(T item);

        IQueryable<T> GetAll();
    }
}
