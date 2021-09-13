@ECHO OFF
SETLOCAL enabledelayedexpansion 

SET "n=0"
SET "path_number=0"

IF %path_number% LSS 26 (
    IF %path_number% GEQ 0 (
        FOR %%a IN (A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,O,Q,R,S,T,U,V,W,X,Y,Z) DO (
            SET "path_list[!n!]=%%a"
            SET /A "n+=1"
        )
        SET "file_path=!path_list[%path_number%]!"
    ) ELSE ( SET "file_path=a" )
) ELSE ( SET "file_path=a" )
SET "n=0"

SET "num=0"
SET "char=0"
SET "name_loop=0"

SET "name_list="
SET "name="
FOR %%a IN (ERROR, January, February, March, April, May, June, July, August, September, October, November, December) DO (
    SET "dates[!n!]=%%a"
    SET /A "n+=1"
)
SET "n=0"
SET "full_date="
SET "day=" 
SET "month="
SET "year="

SET "date_guard=0"
SET "li_list="

SET "length=0"

SET "numeric="

@REM cd "C:\Users\MyName\DOcuments\MyDirectory"
@REM Dir | Rename-Item –NewName { $_.name –replace "&","and" }

@REM FOR /F "tokens=*" %%a IN ('dir /B "\\PESERVER\Groupdata\website\billing\FILES\A\*.pdf"') DO (
FOR %%a IN (bob-thrasher_2008_0701_54325243_543.pdf, bob_thrasher_2018_0814_84325243_543.pdf, bob-thrasher_2008_0701_54325243_543.pdf, ellion_war_head_0204_2001.pdf, MICHeal_SeKOL_0902_2013_5749023_44.pdf, MICHEAL_SEKOL_0912_2003_5748023_44.pdf, MICHEAL-SEKOL-0912_2003_5748023_44.pdf, Maximus_martin_2082_0401.pdf, Maximus_maRtin_2069_0606.pdf) DO (
    SET "files[!n!]=%%a"
    SET /A "n+=1"
)
SET "n=0"

GOTO :START

::////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

:TO_LOW <variable_name>
SET "cap_char=!%~1!"
FOR %%a IN (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) DO ( IF /I "%cap_char%" EQU "%%a" ( SET "%~1=%%a" ) & IF /I "%cap_char%" EQU " %%a" ( SET "%~1= %%a" ))
EXIT /B 0

::////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

:TO_CAP <variable_name>
SET "cap_char=!%~1!"
FOR %%a IN (A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,O,Q,R,S,T,U,V,W,X,Y,Z) DO ( IF /I "%cap_char%" EQU "%%a" ( SET "%~1=%%a" ) & IF /I "%cap_char%" EQU " %%a" ( SET "%~1= %%a" ))
EXIT /B 0

::////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

:GET_VAR_LEN <variable>
SET "length=0"
:VAR_LEN 
SET "var_char=!%~1:~%length%,2!"
IF DEFINED var_char ( SET /A "length+=1" & GOTO :VAR_LEN ) ELSE ( SET /A "length-=1" )
EXIT /B 0

::////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

:GET_ARRAY_LEN <array>
SET "length=0"
:ARRAY_LEN 
IF DEFINED %~1[%length%] ( SET /A "length+=1" & GOTO :ARRAY_LEN ) ELSE ( SET /A "length-=1" )
EXIT /B 0

::////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

:NAME_FIX
CALL :GET_ARRAY_LEN name_list
IF "!name_list[%length%]!" EQU " " ( SET "name_list[%length%]=" & GOTO :NAME_FIX ) 

ECHO !name_list[%length%]!| FINDSTR /R "^[0-9][0-9]*$" > NUL
IF %ERRORLEVEL% EQU 0 ( SET "name_list[%length%]=" & GOTO :NAME_FIX )
EXIT /B 0

::////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
:FILE_NAME 
ECHO !files[%num%]:~%char%,1!| FINDSTR /R "^[0-9][0-9]*$" > NUL
IF %ERRORLEVEL% NEQ 0 ( GOTO :FILE_NAME_CONTINUE_0 )
IF %char% LSS 5 ( GOTO :FILE_NAME_CONTINUE_0 )

CALL :GET_ARRAY_LEN name_list
IF %length% GTR 0 ( CALL :NAME_FIX ) ELSE ( SET "name_list[0]=ERROR" )

SET "name="
:NAME_LOOP
IF Defined !name_list[%name_noop%]! ( SET "name=%name%!name_list[%name_loop%]!" ) ELSE ( SET "name=%name%!name_list[%name_loop%]!" )
IF %name_loop% LEQ %length% ( SET /A "name_loop+=1" & GOTO :NAME_LOOP ) ELSE ( SET "name_loop=0" )
CALL :GET_ARRAY_LEN name_list
FOR /L %%a IN (0,1,%length%) DO ( SET "name_list[%%a]=" )
SET "char=0"
EXIT /B 0 

:FILE_NAME_CONTINUE_0
SET "name_list[%char%]=!files[%num%]:~%char%,1!"
CALL :TO_LOW name_list[%char%]

:SPACE_LOOP
SET /A "next_char=%char%+1"
FOR %%a IN (" ","-","_") DO ( 
    IF "!files[%num%]:~%char%,1!" EQU %%a ( 
        SET "name_list[%char%]= "  
        FOR %%a IN (" ","-","_") DO ( IF "!files[%num%]:~%next_char%,1!" EQU %%a ( SET /A "char+=1" & GOTO :SPACE_LOOP ))
        SET "name_list[%next_char%]=!files[%num%]:~%next_char%,1!"
        CALL :TO_CAP name_list[%next_char%] 
        SET /A "char+=1"
    )
)
IF %char% EQU 0 (
    SET "name_list[0]=!files[%num%]:~0,1!"
    CALL :TO_CAP name_list[0]
) 
CALL :GET_VAR_LEN files[%num%]
IF %length% GTR %char% ( SET /A "char+=1" & GOTO :FILE_NAME ) ELSE ( ECHO ERROR & PAUSE & EXIT )

::////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

:FILE_DATE
IF %date_guard% GEQ 2 ( 
    SET "full_date=%month% %day%, %year% "
	FOR %%a IN (month, day, year) DO ( SET "%%a=" )
    SET "date_guard=0" 
    SET "char=0"
    EXIT /B 0
)

SET "current=!files[%num%]:~%char%,2!"

ECHO %current%| FINDSTR /R "^[0-9][0-9]*$" > NUL
IF %ERRORLEVEL% NEQ 0 ( SET /A "char+=1" & GOTO :FILE_DATE ) ELSE ( IF "!current:~0,1!" EQU "0" ( SET "current=!current:~1,1!" ) ELSE ( SET /A "current=%current%-0" ))

SET /A "next_char=%char%+2"
SET "next_current=!files[%num%]:~%next_char%,2!"
IF "!next_current:~0,1!" EQU "0" ( SET "next_current=!next_current:~1,1!" ) ELSE ( SET /A "next_current=%next_current%-0" )

IF %current% LEQ 12 (
    @REM get date month
    SET "month=!dates[%current%]!"

    @REM get date day 
    ECHO %next_current%| FINDSTR /R "^[0-9][0-9]*$" > NUL
    IF %ERRORLEVEL% EQU 0 ( SET "day=%next_current%" ) ELSE ( SET "day=ERROR" )

    SET /A "char+=4"
    SET /A "date_guard+=1"
)
IF %current% EQU 20 (        
    @REM get date year
    ECHO !files[%num%]:~%char%,4!| FINDSTR /R "^[0-9][0-9]*$" > NUL
    IF %ERRORLEVEL% EQU 0 ( SET "year=!files[%num%]:~%char%,4!" ) ELSE ( SET "year=ERROR" )
    SET /A "char+=4"

    SET /A "date_guard+=1"
)
SET /A "char+=1"
GOTO :FILE_DATE

::////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

:FORMAT
SET /A "next_num=%num%+1"
SET /A "next_char=%char%+1"

CALL :GET_ARRAY_LEN files
SET /A "length-=2"

IF %length% GEQ %num% ( IF /I "!files[%num%]:~%char%,1!" EQU "!files[%next_num%]:~%char%,1!" ( GOTO :FORMAT_CONTINUE_0 ))
FOR %%a IN (" ","-","_") DO ( FOR %%b IN (" ","-","_") DO ( IF "!files[%num%]:~%char%,1!" EQU %%a ( IF "!files[%next_num%]:~%char%,1!" EQU %%b ( GOTO :FORMAT_CONTINUE_0 ))))

ECHO     ^<li^>^<a href="FILES/%file_path%/!files[%num%]!" target="_blank"^>
ECHO         %full_date% 
ECHO     ^</a^>^</li^>

SET "full_date="
ECHO ^</ul^> 
SET /A "num+=1"
SET "char=0"
CALL :START
EXIT /B 0

:FORMAT_CONTINUE_0
ECHO !files[%num%]:~%next_char%,1!!files[%next_num%]:~%next_char%,1!| FINDSTR /R "^[0-9][0-9]*$" > NUL
IF %ERRORLEVEL% EQU 0 (
    ECHO     ^<li^>^<a href="FILES/%file_path%/!files[%num%]!" target="_blank"^>
    ECHO         %full_date% 
    ECHO     ^</a^>^</li^>

    SET "full_date="
    SET /A "num+=1" 
    CALL :FILE_DATE
    SET "char=0"
) ELSE ( SET /A "char+=1" )
GOTO :FORMAT

::////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

:START

CALL :FILE_NAME
CALL :FILE_DATE

ECHO ^<h3^>%name%^</h3^>
ECHO ^<ul^>
CALL :FORMAT

PAUSE > NUL
EXIT