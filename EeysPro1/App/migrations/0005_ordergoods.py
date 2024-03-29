# Generated by Django 2.2.3 on 2019-07-18 09:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0004_cart_order'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderGoods',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.IntegerField()),
                ('goods', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='App.Show_product')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='App.Order')),
            ],
            options={
                'db_table': 'axf_ordergoods',
            },
        ),
    ]
