for /R %location% %%A in (*.webp) do call :repl "%%A"
for /R %location% %%A in (*.webp) do call :repl2 "%%A"
goto :eof 

:repl
set "_fn=%~nx1"
ren %1 "%_fn:_= %"

:repl2
set "_fn=%~nx1"
ren %1 "%_fn:65px-=%"