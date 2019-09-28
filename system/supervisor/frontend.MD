# Install Supervisor and Manage Process

## Installation
```sh
sudo apt-get install supervisor
```
## Goto /etc/supervisor/conf.d folder, supervisor create this folder in your system
```sh
cd /etc/supervisor/conf.d
```
## Make a file `touch filename.conf`,  make sure file name end with `.conf`
- You may need permission to create a file or use every time prefix `sudo`
- `sudo touch filename.conf`
- If don't want use sudo give permission folder  
- `sudo chmod -R 777 conf.d`

## Add Supervisor in React App [frontend](frontend.conf)
```sh
[program:frontend]
directory="project directory"
command=npm start
autostart = true
autorestart=true 
stderr_logfile=/var/log/test.err.log
stdout_logfile=/var/log/test.out.log
```
## Add Supervisor in Pyhton App [frontend](backend.conf)
```
[program:backend]
directory="project directory"
command=python_path base_folder_path
autostart = true
autorestart=true 
stderr_logfile=/var/log/test.err.log
stdout_logfile=/var/log/test.err.log
user=username
```

- After write filename.conf file need following command for start
- `sudo supervisorctl reread`
- `sudo supervisorctl update`

## Lets Check Supervisor Process
- `sudo supervisorctl`

## See Log of Supervisor Running Process 
- `tail /var/log/test.err.log`
- `tail /var/log/test.err.log`

## See [Supervisor](http://supervisord.org) for more details
