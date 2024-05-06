using System.ComponentModel.DataAnnotations;

namespace AspGame.Model.ViewModels
{
    public class GameRoomViewModel
    {
        [MinLength(4, ErrorMessage = "name's length must be greater than 3")]
        [MaxLength(50, ErrorMessage =  "name's length cannot be greater than 50")]
        public string? Name { get; set; }
    }
}