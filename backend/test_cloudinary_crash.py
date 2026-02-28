import os
import subprocess

# Clear Cloudinary dummy keys to simulate Render if they aren't set
if 'CLOUDINARY_CLOUD_NAME' in os.environ: del os.environ['CLOUDINARY_CLOUD_NAME']
if 'CLOUDINARY_API_KEY' in os.environ: del os.environ['CLOUDINARY_API_KEY']
if 'CLOUDINARY_API_SECRET' in os.environ: del os.environ['CLOUDINARY_API_SECRET']
os.environ['DATABASE_URL'] = 'sqlite:////tmp/db.sqlite3'

print("Running check...")
result = subprocess.run(['venv/Scripts/python.exe', 'manage.py', 'check'], capture_output=True, text=True)
print("Return code:", result.returncode)
if result.returncode != 0:
    print("STDOUT:", result.stdout)
    print("STDERR:", result.stderr)
else:
    print("Success")
