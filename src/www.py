import json
from http.server import SimpleHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs
from threading import Thread
import cgi

class WWWServer(SimpleHTTPRequestHandler):
    def do_POST(self):
        form = cgi.FieldStorage(
            fp=self.rfile, 
            headers=self.headers,
            environ={'REQUEST_METHOD': 'POST'}
        )
          

        print(form)

        # Process form data here
        # For example, form.getvalue('image1'), form.getvalue('title1'), etc.

        # Send response
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"Form submitted successfully.")

def www_server():
    def run_server(port, handler):
        server = HTTPServer(('localhost', port), handler)
        print(f"Starting server at http://localhost:{port}/")
        server.serve_forever()

    t1 = Thread(target=run_server, args=(8080, WWWServer))
    t1.start()

if __name__ == '__main__':
    www_server()
