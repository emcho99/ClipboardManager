using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ClipboardManager.Server.DatabaseModel
{

    public class FileModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get;set; }
        public string FileName { get;set; }
        //[JsonIgnore]
        //public byte[] Data { get; set; }
        public long Length { get;set; }
        public string ContentType { get;set; }
    }
}
