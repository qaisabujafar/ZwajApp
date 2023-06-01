using Newtonsoft.Json;
using ZwajApp.API.Models;

namespace ZwajApp.API.Data
{
    public class TrialData
    {


        public static void TrialUsers(DataContext context) {
            var userData = System.IO.File.ReadAllText("Data/UsersTrialData.json");
            var users  = JsonConvert.DeserializeObject<List<User>>(userData);

            foreach(var user in users)
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash("password", out passwordHash, out passwordSalt);
                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                user.Username = user.Username.ToLower();
                context.Add(user);
                context.SaveChanges();
            }
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

    }
}