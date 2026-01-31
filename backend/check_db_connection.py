import os
import sys
import psycopg2
from dotenv import load_dotenv
from urllib.parse import urlparse

# Load .env explicitly
load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

db_url = os.environ.get('DATABASE_URL')
print(f"Testing connection to: {db_url}")

if not db_url:
    print("Error: DATABASE_URL not found in environment.")
    sys.exit(1)

try:
    result = urlparse(db_url)
    username = result.username
    password = result.password
    database = result.path[1:]
    hostname = result.hostname
    port = result.port
    
    connection = psycopg2.connect(
        database=database,
        user=username,
        password=password,
        host=hostname,
        port=port
    )
    print("SUCCESS: Connected to PostgreSQL database!")
    cursor = connection.cursor()
    cursor.execute("SELECT version();")
    db_version = cursor.fetchone()
    print(f"Database version: {db_version}")
    cursor.close()
    connection.close()
except Exception as e:
    print(f"FAILURE: Could not connect to PostgreSQL. Error: {e}")
