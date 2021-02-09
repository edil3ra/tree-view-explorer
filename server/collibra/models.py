from django.db import models


class NodeTypes(models.Model):
    node_type_name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.node_type_name}'

    class Meta:
        verbose_name = 'NodeType'
        verbose_name_plural = "NodeTypes"


class Nodes(models.Model):
    node_type = models.ForeignKey(NodeTypes,
                                  on_delete=models.CASCADE,
                                  related_name='nodes')
    parent = models.ForeignKey('self',
                               on_delete=models.CASCADE,
                               related_name='children',
                               blank=True,
                               null=True)
    node_name = models.CharField(max_length=100)

    # find a way to reference parent to improve display name
    def __str__(self):
        return f'{self.node_name}'

    class Meta:
        verbose_name = 'Node'
        verbose_name_plural = "Nodes"


class Tables(models.Model):
    node = models.ForeignKey(Nodes,
                             on_delete=models.CASCADE,
                             related_name='tables')
    table_name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return f'{self.node} - {self.table_name}'

    class Meta:
        verbose_name = 'Table'
        verbose_name_plural = "Tables"


class Columns(models.Model):
    node = models.ForeignKey(Tables,
                             on_delete=models.CASCADE,
                             related_name='columns')
    column_name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return f'{self.node} - {self.column_name}'

    class Meta:
        verbose_name = 'Column'
        verbose_name_plural = "Columns"
