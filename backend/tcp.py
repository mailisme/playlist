import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('127.0.0.1', 6000))
s.listen(5)

while True:
    (conn, client_addr) = s.accept()

    print(conn)
    print("client ip and port: ", client_addr)

    while True:
        try:
            data = conn.recv(1024)

            if len(data) == 0:
                break

            print("Client data: ", data.decode('utf-8'))

            conn.send(data.upper())
        except Exception:
            break
    conn.close()