using ContactList.Server.Models;

namespace CustomerApp.Server.Models
{
    public class ContactAttempt
    {
        public int AttemptId { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public DateTime Date { get; set; }
        public string Notes { get; set; }
        public string AppUserId { get; set; }
    }
}
