from rest_framework import serializers
from .models import NodeTypes, Nodes, Tables, Columns


class NodeTypesSerializer(serializers.ModelSerializer):
    class Meta:
        model = NodeTypes
        fields = ['id', 'node_type_name']


class NodesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nodes
        fields = ['id', 'node_type', 'parent', 'node_name', 'children']


class TablesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tables
        fields = ['id', 'node', 'table_name', 'description']


class ColumnsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Columns
        fields = ['id', 'node', 'column_name', 'description']
