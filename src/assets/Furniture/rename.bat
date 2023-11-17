for /R %location% %%A in (*.webp) do call :repl "%%A"
goto :eof 

:repl
set "_fn=%~nx1"
ren %1 "%_fn:65px-=%"