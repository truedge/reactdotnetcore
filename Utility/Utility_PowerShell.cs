

using System;
using System.Management.Automation;
using System.Management.Automation.Runspaces;

namespace reactdotnetcore.utility
{
    class Utility_PowerShell
    {
        public static string runPSCmd(string psScript)
        {
            var output = "";
            Console.WriteLine("Running: "+ psScript);
            //PowerShell ps = PowerShell.Create();
            using (Runspace runspace = RunspaceFactory.CreateRunspace()){
                using (PowerShell ps = PowerShell.Create())
                {
                
                    
                    //Console.WriteLine("\nEvaluating 'Get-Command Write-Output' in PS Core Runspace\n");
                    var results = ps.AddScript(psScript).Invoke();
                    output = results[0].ToString();
                    Console.WriteLine(output);

                    ps.Commands.Clear();

                    /* foreach (dynamic result in results)
                    {
                        Console.WriteLine(result.ToString());
                    }*/
                    
                    
                }
            }
            return output;

        }

        
    }
}