using ContactList.Server.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CustomerApp.Server.Models
{
    public class CustomerAddress
    {
        [Key]
        public int Id { get; set; }
        public int CustomerId { get; set; }
        [ForeignKey(nameof(Address))]
        public int AddressId { get; set; }
        public Customer Customer { get; set; }
        public Address Address { get; set; }
    }
}
