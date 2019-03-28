using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using Microsoft.AspNetCore.Html;
using reactdotnetcore.utility;



namespace reactdotnetcore.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PowerShellController : ControllerBase
    {
        

        // GET api/powershell
        [HttpGet]
        public ActionResult<JObject> Get()
        {
            string userName = System.Security.Principal.WindowsIdentity.GetCurrent().Name;
            
            
            //var whoami = Utility_PowerShell.runPSCmd("whoami" + " | ConvertTo-Json");
            var cmd = "date" + " | ConvertTo-Json";
            var whoami = Utility_PowerShell.runPSCmd(cmd);


            var returnStr = whoami;// "{\"Greeting\":\"Hello\",\"Name\":\"Jamie " + userName.Substring(0,3) + " " + whoami.Substring(0,4) + DateTime.Now.Second.ToString() +"\"}";
            JObject myObj = JObject.Parse(returnStr);
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
        public PowerShellCmd post([FromBody] PowerShellCmd psCmdData)
        {
            psCmdData.cmdOutput = Utility_PowerShell.runPSCmd(psCmdData.cmd);
            return psCmdData;
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

    public class PowerShellCmd
    {
        public string cmd { get; set; }
        public string cmdOutput { get; set; }
    }
}
