from django.contrib import admin
from .models import NodeTypes, Nodes, Tables, Columns

admin.site.register(NodeTypes)
admin.site.register(Nodes)
admin.site.register(Tables)
admin.site.register(Columns)

