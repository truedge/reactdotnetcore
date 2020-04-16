using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System;
using System.Data;

namespace reactdotnetcore.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProcessStepController : ControllerBase
    {


        // GET api/processstep
        [HttpGet]
        public ActionResult<JArray> Get()
        {
            var sql = "select * from step order by name";
            DataTable returnStr = ConsoleApp_dotnetcore.Utility_mySQL.runSQLQuery_datatable(sql);
            var jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(returnStr);
            JArray myObj = JArray.Parse(jsonString);
            return myObj;
        }

        // GET api/process/5
        [HttpGet("{id}")]
        public ActionResult<JObject> Get(int id)
        {
            var sql = "select * from step where id = " + id.ToString();

            DataTable returnStr = ConsoleApp_dotnetcore.Utility_mySQL.runSQLQuery_datatable(sql);
            var jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(returnStr);
            jsonString = jsonString.Substring(1, jsonString.Length - 2); // trim 
            JObject myObj = JObject.Parse(jsonString);
            try
            {
                myObj = JObject.Parse(jsonString);
            }
            catch
            {
                myObj = JObject.Parse("[]");
            }
            return myObj;
        }

        // POST api/values

        [HttpPost]
        public JObject post([FromBody] ProcessStepData processStepData)
        {

            var sql = @"insert into esscoresql.step (  `name`, `description`, `createdate`, `modifieddate`,`active`,`createdby`,`processid`,`steptypeid` ) "
              + "values ('" + processStepData.name + "', '" + processStepData.description + "', "
                            + "current_date(), "
                            + "null, "
                            + processStepData.active.ToString() + ", '"
                            + "jedge',"
                            + processStepData.processid.ToString() + ", '"
                            + processStepData.steptypeid.ToString() + "')";
            Console.WriteLine("sql: " + sql);
            DataTable returnStr = ConsoleApp_dotnetcore.Utility_mySQL.runSQLQuery_datatable(sql);
            //var returnStr2 =  ConsoleApp_dotnetcore..runPSCmd(cmd);
            Console.WriteLine("sql return: " + returnStr);
            // "{\"Greeting\":\"Hello\",\"Name\":\"Jamie " + userName.Substring(0,3) + " " + whoami.Substring(0,4) + DateTime.Now.Second.ToString() +"\"}";

            JObject myObj;
            try
            {
                var jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(returnStr);
                myObj = JObject.Parse(jsonString);
            }
            catch
            {
                myObj = JObject.Parse("{\"status\":\"complete\"}");
            }
            return myObj;
        }


        // PUT api/values/5
        [HttpPut("{id}")]
        public JObject Put(int id, [FromBody] JObject value)
        {
            var sql = @"update step set active = 1, modifieddate=CURRENT_DATE()" + "where id = '" + id + "'";
            Console.WriteLine("sql: " + sql);
            DataTable returnStr = ConsoleApp_dotnetcore.Utility_mySQL.runSQLQuery_datatable(sql);

            JObject myObj;
            try
            {
                var jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(returnStr);
                myObj = JObject.Parse(jsonString);
            }
            catch
            {
                myObj = JObject.Parse("{\"status\":\"complete\"}");
            }
            return myObj;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public JObject Delete(int id)
        {
            var sql = @"update step set active = 0, modifieddate=CURRENT_DATE()" + "where id = '" + id + "'";
            Console.WriteLine("sql: " + sql);
            DataTable returnStr = ConsoleApp_dotnetcore.Utility_mySQL.runSQLQuery_datatable(sql);

            JObject myObj;
            try
            {
                var jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(returnStr);
                myObj = JObject.Parse(jsonString);
            }
            catch
            {
                myObj = JObject.Parse("{\"status\":\"complete\"}");
            }
            return myObj;
        }
    }


    public class ProcessStepData
    {
        public int id { get; set; }

        public int steptypeid { get; set; }

        public int processid { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public DateTime createdate { get; set; }
        public DateTime modifieddate { get; set; }
        public int active { get; set; }
        public string createdby { get; set; }
    }

}
