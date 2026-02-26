import os
import django
import sys

# Set up Django environment
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ['DATABASE_URL'] = 'sqlite:////tmp/db.sqlite3'
os.environ['CLOUDINARY_CLOUD_NAME'] = 'dummy'
os.environ['CLOUDINARY_API_KEY'] = 'dummy'
os.environ['CLOUDINARY_API_SECRET'] = 'dummy'

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'transport_project.settings')
django.setup()

from django.core.files.storage import default_storage
print("Default Storage Class:", default_storage.__class__)
