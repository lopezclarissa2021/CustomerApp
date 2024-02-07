using System.ComponentModel.DataAnnotations;

namespace CustomerApp.Server.Models
{
    public class CustomerAddress
    {
        [Key]
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int AddressId { get; set; }
    }
}
