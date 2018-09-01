param([Int32]$step=30)

Write-Host("devhelper_zip.ps1: Started.");

# function hello{
#     Write-Host("Hello world: "+$step);
# }



#will Build the project for production
# $scriptPath = ".\node_modules\.bin\ng"
# $baseHref = "http://hellomondo.com/"
# Invoke-Expression "& `"$scriptPath`" build --prod --base-href `"$baseHref`" --env=prod -sm true"


# Invoke-Expression "winscp.com /ini=nul /script=devhelper_ftp.txt"
$source = "..\dist\*"
$destination = "D:\MyData\Repos\Omniarete_frontend\powershell_scripts\dist.zip"

# If(Test-path $destination) {Remove-item $destination}
#Add-Type -assembly "system.io.compression.filesystem"
#[io.compression.zipfile]::CreateFromDirectory($Source, $destination) 



# [Reflection.Assembly]::LoadWithPartialName( "System.IO.Compression.FileSystem" )
# [System.IO.Compression.ZipFile]::CreateFromDirectory($source, $destination)


Invoke-Expression "compress-archive -path `"$source`" -destinationpath `"$destination`" -compressionlevel optimal"