# Generated by Django 3.2.9 on 2021-12-10 14:20

from django.db import migrations
from app.categories import CATEGORIES


class Migration(migrations.Migration):

    def init_categaories(apps, schema_editor):
        Category = apps.get_model('app', 'Category')
        for type, categories in CATEGORIES.items():
            for category in categories:
                c = Category(name=category, type=type)
                c.save()

    dependencies = [
        ('app', '0003_auto_20211210_1420'),
    ]

    operations = [
        migrations.RunPython(init_categaories),
    ]
