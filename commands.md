# List of useful commands

**Inspect the process ID that uses a TCP port**

```sh
lsof -i tcp:<port>
```

Example:

```sh
$ lsof -i tcp:3000
COMMAND   PID          USER   FD   TYPE            DEVICE SIZE/OFF NODE NAME
node    79963 isaac.ramirez   22u  IPv6 0xba92ba529a06a5d      0t0  TCP *:hbci (LISTEN)
```

**Kill a process**

```sh
kill <process id>
```

Example:

```sh
$ kill 79963
# no output
```
