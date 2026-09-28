$certDir = $PSScriptRoot
$certPath = Join-Path $certDir "cert.pem"
$keyPath = Join-Path $certDir "key.pem"

Write-Host "Generating self-signed certificate in $certDir..."

try {
    # Generate a self-signed certificate using PowerShell
    $cert = New-SelfSignedCertificate -DnsName "localhost" -CertStoreLocation "cert:\LocalMachine\My" -KeyExportPolicy Exportable -KeySpec Signature -Provider "Microsoft Enhanced RSA and AES Cryptographic Provider" -NotAfter (Get-Date).AddYears(1)
    
    $pwd = ConvertTo-SecureString -String "1234" -Force -AsPlainText
    $pfxPath = Join-Path $certDir "temp.pfx"
    
    Export-PfxCertificate -Cert $cert -FilePath $pfxPath -Password $pwd
    
    Write-Host "Certificate generated successfully."
    Write-Host "Note: For a pure PEM conversion on Windows without OpenSSL, it can be complex."
    Write-Host "Please use Docker to generate the PEM files easily:"
    Write-Host 'docker run --rm -v ${PWD}:/certs alpine/openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /certs/key.pem -out /certs/cert.pem -subj "/CN=localhost"'
    
} catch {
    Write-Host "Failed to generate certificate via PowerShell. Ensure you run as administrator or use the Docker command."
}

# Provide dummy files so nginx won't crash immediately when building, but it might fail on start if invalid.
if (-not (Test-Path $certPath)) {
    "dummy certificate - run the docker openssl command" | Out-File -FilePath $certPath -Encoding ascii
}
if (-not (Test-Path $keyPath)) {
    "dummy key - run the docker openssl command" | Out-File -FilePath $keyPath -Encoding ascii
}
