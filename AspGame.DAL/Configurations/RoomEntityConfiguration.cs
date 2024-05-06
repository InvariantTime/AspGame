using AspGame.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AspGame.DAL.Configurations
{
    class RoomEntityConfiguration : IEntityTypeConfiguration<GameRoom>
    {
        public void Configure(EntityTypeBuilder<GameRoom> builder)
        {
            builder.HasKey(x => x.Id);
            builder.HasAlternateKey(x => x.Name);

            builder.Property(x => x.Name)
                .HasMaxLength(50)
                .IsRequired();
        }
    }
}
