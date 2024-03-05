using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ContactList.Server.Models;
using CustomerApp.Server.Models;

namespace CustomerApp.Server.Data
{
    public class CustomerContext : DbContext
    {
        public CustomerContext (DbContextOptions<CustomerContext> options)
            : base(options)
        {

        }

        public DbSet<Customer> Customer { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // edit our model as the system loads
            modelBuilder.Entity<Customer>().Navigation<Phone>(c => c.PhoneNumbers).AutoInclude();
        }
    }
}
