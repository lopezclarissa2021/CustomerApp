using System.ComponentModel.DataAnnotations;

namespace CustomerApp.Server.Models
{
    public class Address
    {
        [Key]
        public int AddressId { get; set; }
        public string Line1 { get; set; }
        public string Line2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public List<CustomerAddress> CustomerAddresses {  get; set; }
    }
}
