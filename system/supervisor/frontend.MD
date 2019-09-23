# Install Supervisor and Manage Process

## Installation
``sh
sudo apt-get install supervisor
``
## Goto /etc/supervisor/conf.d folder, supervisor create this folder in your system
``sh
cd /etc/supervisor/conf.d
``
## Make a file `touch filename.conf`,  make sure file name end with `.conf`
- You may need permission to create a file or use every time prefix `sudo`
- `sudo touch filename.conf`
- If don't want use sudo give permission folder  
- `sudo chmod -R 777 conf.d`

## Add React App in Supervisor [frontend](frontend.conf)
```sh
[program:frontend]
directory="project directory"
command=npm start
autostart = true
autorestart=true 
stderr_logfile=/var/log/test.err.log
stdout_logfile=/var/log/test.out.log
```
- After write filename.conf file need following command for start
- `sudo supervisorctl reread`
- `sudo supervisorctl update`

## Lets Check Supervisor Process
- `sudo supervisorctl`

## See Log of Supervisor Running Process 
- `tail /var/log/test.err.log`
- `tail /var/log/test.err.log`

## Optionally, If More conf.d file write config file for run all of process
```sh
; supervisor config file
[unix_http_server]
file=/var/run/supervisor.sock   ; (the path to the socket file)
chmod=0700                       ; sockef file mode (default 0700)

[supervisord]
logfile=/var/log/supervisor/supervisord.log ; (main log file;default $CWD/supervisord.log)
pidfile=/var/run/supervisord.pid ; (supervisord pidfile;default supervisord.pid)
childlogdir=/var/log/supervisor            ; ('AUTO' child log dir, default $TEMP)

; the below section must remain in the config file for RPC
; (supervisorctl/web interface) to work, additional interfaces may be
; added by defining them in separate rpcinterface: sections
[rpcinterface:supervisor]
supervisor.rpcinterface_factory = supervisor.rpcinterface:make_main_rpcinterface

[supervisorctl]
serverurl=unix:///var/run/supervisor.sock ; use a unix:// URL  for a unix socket

; The [include] section can just contain the "files" setting.  This
; setting can list multiple files (separated by whitespace or
; newlines).  It can also contain wildcards.  The filenames are
; interpreted as relative to this file.  Included files *cannot*
; include files themselves.

[include]
files = /etc/supervisor/conf.d/*.conf
```
## See [Supervisor](http://supervisord.org) for more details
