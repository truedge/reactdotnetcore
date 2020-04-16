using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Data;

namespace reactdotnetcore.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class mySQLController : ControllerBase
    {


        // GET api/powershell
        [HttpGet]
        public ActionResult<JArray> Get()
        {
            var sql = "select 1 as \"name\"";
            DataTable returnDT = ConsoleApp_dotnetcore.Utility_mySQL.runSQLQuery_datatable(sql);
            return JArray.Parse(Newtonsoft.Json.JsonConvert.SerializeObject(returnDT));
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "Hello Jamie";
        }

        // POST api/values

        [HttpPost]
        public JArray post([FromBody] SQLQuery sqlCmdData)
        {
            DataTable returnDT = ConsoleApp_dotnetcore.Utility_mySQL.runSQLQuery_datatable(sqlCmdData.sql);
            var jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(returnDT);
            return JArray.Parse(jsonString);
        }


        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class SQLQuery
    {
        public string sql { get; set; }
        public string sqlOutput { get; set; }
    }
}
