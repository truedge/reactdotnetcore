using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System;


namespace reactdotnetcore.controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GreetingController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<JObject> Get()
        {
            string userName = System.Security.Principal.WindowsIdentity.GetCurrent().Name;
            var returnStr = "{\"Greeting\":\"Hello\",\"Name\":\"Jamie " + userName.Substring(0, 3) + DateTime.Now.Second.ToString() + "\"}";
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
        public void Post([FromBody] string value)
        {
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
