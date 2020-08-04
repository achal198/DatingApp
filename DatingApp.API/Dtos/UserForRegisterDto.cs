using System.ComponentModel.DataAnnotations;
namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage ="UserName is Required")]
        public string UserName { get; set; }
        [Required(ErrorMessage ="Password is Required")]
        [MinLength(4,ErrorMessage= "Password should be greater than four character.")]
        public string Password { get; set; }
    }
}