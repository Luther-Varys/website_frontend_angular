param([Int32]$step=30)



function hello{
    Write-Host("Hello world: "+$step);
}



#will Build the project for production
# $scriptPath = ".\node_modules\.bin\ng"
# $baseHref = "http://hellomondo.com/"
# Invoke-Expression "& `"$scriptPath`" build --prod --base-href `"$baseHref`" --env=prod -sm true"


Invoke-Expression "winscp.com /ini=nul /script=devhelper_ftp.txt"