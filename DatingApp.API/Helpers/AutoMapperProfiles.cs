using System.Linq;
using AutoMapper;
using DatingApp.API.Dtos;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User,UserForListDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(sourceMember => 
            sourceMember.Photos.FirstOrDefault(p=> p.IsMain).Url))
            .ForMember(dest => dest.Age, opt => opt.MapFrom(sourceMember =>
             sourceMember.DateofBirth.CalculateAge()));

            CreateMap<User,UserForDetailDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(sourceMember => 
            sourceMember.Photos.FirstOrDefault(p=> p.IsMain).Url))
            .ForMember(dest => dest.Age, opt => opt.MapFrom(sourceMember =>
             sourceMember.DateofBirth.CalculateAge()));
            CreateMap<Photo,PhotosForDetailDto>();
        }
    }
}