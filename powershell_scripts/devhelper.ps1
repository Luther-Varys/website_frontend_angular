param([Int32]$step=30)



function hello{

    Write-Host("Hello world: "+$step);

}



#will Build the project for production
#https://stackoverflow.com/questions/25187048/run-executable-from-powershell-script-with-parameters
$scriptPath = ".\node_modules\.bin\ng"
#$baseHref = "https://luther-varys.github.io/website_omniarete/"
$baseHref = "http://hellomondo.com/"
Invoke-Expression "& `"$scriptPath`" build --prod --base-href `"$baseHref`" --env=prod -sm true"

#Run command with dot sourcing
#This command will deploy the website to Github Pages
#http://jeffwouters.nl/index.php/2015/07/powershell-what-is-dot-sourcing-and-why-use-it/
#.".\node_modules\.bin\ngh" 
