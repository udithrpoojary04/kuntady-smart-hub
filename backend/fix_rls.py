import os
import django
from django.db import connection

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'transport_project.settings')
django.setup()

tables = [
    'transport_announcement',
    'django_migrations',
    'django_content_type',
    'auth_permission',
    'auth_group',
    'auth_group_permissions',
    'auth_user_groups',
    'auth_user_user_permissions',
    'django_admin_log',
    'auth_user',
    'django_session',
    'transport_feedback',
    'transport_place',
    'transport_transportservice',
    'transport_bus'
]

print("Enabling RLS on tables to fix Supabase security warnings...")

with connection.cursor() as cursor:
    for table in tables:
        try:
            cursor.execute(f'ALTER TABLE "{table}" ENABLE ROW LEVEL SECURITY;')
            print(f"Enabled RLS on {table}")
        except Exception as e:
            print(f"Error on {table}: {e}")

print("\nDone! All specified tables now have RLS enabled.")
print("Your Django app will continue to work normally (since it connects via a privileged role/connection string that bypasses RLS),")
print("but Supabase's public API (PostgREST) access to these tables will be secured.")
