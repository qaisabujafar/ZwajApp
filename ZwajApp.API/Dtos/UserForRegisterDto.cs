using System.ComponentModel.DataAnnotations;

namespace ZwajApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string username { get; set; }
        [StringLength(8,MinimumLength =4,ErrorMessage ="يجب على كلمة السر ان لا تقل عن 4 حروف")]
        public string password { get; set; }
    }
}
