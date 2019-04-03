using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using Microsoft.AspNetCore.Html;

using reactdotnetcore.utility;
using System.Data;

namespace reactdotnetcore.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProcessListController : ControllerBase
    {
        

        // GET api/powershell
        [HttpGet]
        public ActionResult<JArray> Get()
        {
            //string userName = System.Security.Principal.WindowsIdentity.GetCurrent().Name;
            
            
            //var whoami = Utility_PowerShell.runPSCmd("whoami" + " | ConvertTo-Json");
            var sql = "select * from process";
            DataTable returnStr =  ConsoleApp_dotnetcore.Utility_mySQL.runSQLQuery_datatable(sql);
            //var returnStr2 =  ConsoleApp_dotnetcore..runPSCmd(cmd);

            // "{\"Greeting\":\"Hello\",\"Name\":\"Jamie " + userName.Substring(0,3) + " " + whoami.Substring(0,4) + DateTime.Now.Second.ToString() +"\"}";
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
       
            var sql = "select * from process";
            DataTable returnStr =  ConsoleApp_dotnetcore.Utility_mySQL.runSQLQuery_datatable(sql);
            //var returnStr2 =  ConsoleApp_dotnetcore..runPSCmd(cmd);

            // "{\"Greeting\":\"Hello\",\"Name\":\"Jamie " + userName.Substring(0,3) + " " + whoami.Substring(0,4) + DateTime.Now.Second.ToString() +"\"}";
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

    /*
    public class SQLQuery_ProcessList
    {
        public string sql { get; set; }
        public string sqlOutput { get; set; }
    }
    */
}
