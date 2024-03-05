using ContactList.Server.Models;
using CustomerApp.Server.Models;
using Microsoft.AspNetCore.Identity;
using System.Runtime.ExceptionServices;

namespace CustomerApp.Server.Data
{
    public class SeedData
    {
        // method- ensure we have populated the data
        public static async Task EnsurePopulated(IServiceProvider serviceProvider)
        {
            // need to get a context
            CustomerContext context = serviceProvider.GetService<CustomerContext>();

            if (context == null)
            {
                throw new Exception("Context can not be found.");
            }


            // check if we dont have data in the datbase
            if (!context.Customer.Any())
            {
               
                Customer lucas = new Customer
                {
                    FirstName = "Lucas",
                    LastName = "Yost",
                    Birthdate = new DateTime(2022, 12, 05),
                    PhoneNumbers = new List<Phone>
                    {
                        new Phone { PhoneNumber = "3606886262"},
                        new Phone { PhoneNumber = "3605081044"}
                    }
                };

                // seed the database
                context.Customer.Add(lucas);

                await context.SaveChangesAsync();

            } else
            {
                throw new Exception("Database has already beeen seeded.");
            }
        }
    }
}
