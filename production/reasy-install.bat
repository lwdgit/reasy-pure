:: �뽫��δ��뱣�浽bat��ʽ���ļ���ִ��

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
    echo ���ϵͳû�а�װnodejs,�޷������Զ���װ���������������������������������������������������������������������� 
    goto :EXIST
)

call :IF_EXIST reasy.cmd
if %errorlevel%==1 (
    echo ���ϵͳû�а�װreasy���빤�ߣ������Զ���װ��������Ҫ�����ӡ��������������������������������������������������������������������� �������������������������������������������������������������������� 
    call npm install -g reasy-pure --registry=https://registry.npm.taobao.org

    call :IF_EXIST reasy.cmd || echo reasy���빤�߰�װʧ��
    goto :VERSION�������������������������������������������������� 
) else (
    echo ���ϵͳ�Ѿ���װ��reasy���빤��, �汾Ϊ:
    call reasy -v
    call :REINSTALL
)
goto :eof

:REINSTALL
set /p choice=�Ƿ���и���(y/n):

if !choice!==y (
    echo reasy���빤�������Զ����°�װ��������Ҫ�����ӡ��������������������������������������������������������������������� �������������������������������������������������������������������� 
    call npm install -g reasy-pure --registry=https://registry.npm.taobao.org

    call :IF_EXIST reasy.cmd || echo reasy���빤�߰�װʧ��
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
