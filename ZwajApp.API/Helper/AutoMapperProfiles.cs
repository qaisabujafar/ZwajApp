using AutoMapper;
using ZwajApp.API.Dtos;
using ZwajApp.API.Models;

namespace ZwajApp.API.Helper
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForDetailsDto>()
                .ForMember(dest => dest.PhotoUrl, opt => { opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url); })
                .ForMember(dest => dest.Age, opt => { opt.MapFrom(src => src.DateOfBirth.CalculateAge()); });

            CreateMap<User, UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt => { opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url); })
                .ForMember(dest => dest.Age, opt => { opt.MapFrom(src => src.DateOfBirth.CalculateAge()); });

            CreateMap<Photo, PhotoForDetailsDto>();

            CreateMap<UserForUpdateDto,User>();

        }
    }
}
