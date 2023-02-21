@echo off

SETLOCAL ENABLEDELAYEDEXPANSION

pushd "D:\HD Giovanni\AHJF_FCMI\"

for %%G in ( ^) ) do (
    for /f delims^= %%i in ('dir /a /s /b ^| findstr "%%~G"') do (
        set "_name=%%~nxi" && cmd.exe /v:on /c rename "%%~fi" "!_name:%%~G=!"
        )
    )


for %%G in ( ^( ) do (
    for /f delims^= %%i in ('dir /a /s /b ^| findstr "%%~G"') do (
        set "_name=%%~nxi" && cmd.exe /v:on /c rename "%%~fi" "!_name:%%~G=!"
        )
    )


popd