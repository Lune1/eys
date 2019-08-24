# Generated by Django 2.2.3 on 2019-07-12 09:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0003_auto_20190712_1509'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.CharField(max_length=200, unique=True)),
                ('order_create', models.DateTimeField(auto_now_add=True)),
                ('order_price', models.FloatField(default=0)),
                ('order_status', models.IntegerField(default=0)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='App.User')),
            ],
            options={
                'db_table': 'eye_order',
            },
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.IntegerField(default=1)),
                ('is_select', models.BooleanField(default=True)),
                ('goods', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='App.Show_product')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='App.User')),
            ],
            options={
                'db_table': 'eye_cart',
            },
        ),
    ]