namespace CustomerApp.Server.Models
{
    public class Email
    {
        public int EmailId { get; set; }
        public int CustomerId { get; set; }
        public string EmailAddress { get; set; }
    }
}
