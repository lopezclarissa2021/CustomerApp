using CustomerApp.Server.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace ContactList.Server.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public DateTime Birthdate { get; set; }
        [Required]
        public ICollection<Phone> PhoneNumbers { get; set; }
        [Required]
        public ICollection<Email> Emails { get; set; }
        [Required]
        public ICollection<CustomerAddress> Addresses { get; set; }

    }
}
