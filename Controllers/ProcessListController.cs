using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Data;

namespace reactdotnetcore.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProcessListController : ControllerBase
    {

        string sql = "select *, CASE WHEN ACTIVE = 1 THEN \"undeploy\" ELSE \"deploy\" END as 'availableActions' from process order by name";
        // GET api/powershell
        [HttpGet]
        public ActionResult<JArray> Get()
        {
            DataTable returnStr = ConsoleApp_dotnetcore.Utility_mySQL.runSQLQuery_datatable(sql);
            var jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(returnStr);
            JArray myObj = JArray.Parse(jsonString);
            return myObj;
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

            DataTable returnStr = ConsoleApp_dotnetcore.Utility_mySQL.runSQLQuery_datatable(sql);
            
            var jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(returnStr);
            JArray myObj = JArray.Parse(jsonString);
            return myObj;
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

}
