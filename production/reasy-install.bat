:: 请将这段代码保存到bat格式的文件中执行

@echo off
setlocal EnableDelayedExpansion
goto :START
exit

:IF_EXIST
SETLOCAL&PATH %PATH%;%~dp0;%cd%
if "%~$PATH:1"=="" exit /b 1
exit /b 0   


:CHECK
call :IF_EXIST node.exe
if %errorlevel%==1 (
    echo 你的系统没有安装nodejs,无法进行自动安装　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 
    goto :EXIST
)

call :IF_EXIST reasy.cmd
if %errorlevel%==1 (
    echo 你的系统没有安装reasy编译工具，正在自动安装，可能需要数分钟　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 
    call npm install -g reasy-pure --registry=https://registry.npm.taobao.org

    call :IF_EXIST reasy.cmd || echo reasy编译工具安装失败
    goto :VERSION　　　　　　　　　　　　　　　　　　　　　　　　　 
) else (
    echo 你的系统已经安装了reasy编译工具, 版本为:
    call reasy -v
    call :REINSTALL
)
goto :eof

:REINSTALL
set /p choice=是否进行更新(y/n):

if !choice!==y (
    echo reasy编译工具正在自动重新安装，可能需要数分钟　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 
    call npm install -g reasy-pure --registry=https://registry.npm.taobao.org

    call :IF_EXIST reasy.cmd || echo reasy编译工具安装失败
    goto :VERSION
) else (
  goto :eof
)


:VERSION
call reasy -v
goto :EXIST

:START
call :CHECK
goto :EOF

:EXIST
pause
