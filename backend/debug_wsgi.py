import os
import sys
import traceback

# Add the project directory to sys.path
sys.path.append(os.getcwd())

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'transport_project.settings')

print("Attempting to import transport_project.wsgi...")
try:
    from transport_project.wsgi import application
    print("Successfully imported application.")
except Exception:
    traceback.print_exc()
