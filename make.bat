@echo off
set time_tmp=%time: =0%
set now=%date:/=%%time_tmp:~0,2%%time_tmp:~3,2%%time_tmp:~6,2%
IF NOT EXIST list (mkdir list)
cd list
@MSHTA.EXE "javascript:var s=clipboardData.getData('text');if(s)new ActiveXObject('Scripting.FileSystemObject').GetStandardStream(1).Write('{"content": "'+s+'"}');close();"> %now%memo.txt