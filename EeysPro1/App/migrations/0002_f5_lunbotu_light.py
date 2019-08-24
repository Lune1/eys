# Generated by Django 2.2.3 on 2019-07-12 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='F5_lunbotu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('f5_img', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'eye_5f_lunbotu',
            },
        ),
        migrations.CreateModel(
            name='Light',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('light', models.CharField(max_length=20)),
            ],
        ),
    ]