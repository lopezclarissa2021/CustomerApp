namespace CustomerApp.Server.Models
{
    public class Phone
    {
        public int PhoneId { get; set; } 
        public int CustomerId { get; set; }
        public string PhoneNumber { get; set; }
    }
}
