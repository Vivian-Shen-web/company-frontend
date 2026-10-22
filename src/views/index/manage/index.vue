<!-- eslint-disable vue/multi-word-component-names -->
<route lang="json">
{
  "meta": {
    "title": "评估管理"
  }
}
</route>
<script setup lang="ts">
import { Manage, manageApi } from '@/services/manage'
import usePagination from '@/services/common/usePagination'
import { IconUtils } from '@/components/basic/icon'
import { message, type TableColumnType } from 'ant-design-vue'
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'

let { list, pager, change, loading } = usePagination<Manage>(manageApi.manageList)

const { t } = useI18n()

const getBtns = (id: string) => {
  return [
    {
      label: t('manage.page.operation.view'),
      type: 'primary',
      icon: IconUtils.prefix('ANTDESIGN-OUTLINED', 'eye'),
      fn: () => {
        check(id)
      }
    }
  ] as IqButtonProps[]
}

// 表格列数据
const columns = [
  {
    title: t('manage.page.properties.index'),
    dataIndex: 'index',
    key: 'index',
    width: 80
  },
  {
    title: t('manage.page.properties.patientName'),
    dataIndex: 'patientName',
    key: 'patientName'
  },
  {
    title: t('manage.page.properties.sex'),
    dataIndex: 'sex',
    key: 'sex'
  },
  {
    title: t('manage.page.properties.age'),
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: t('manage.page.properties.dateOfBirth'),
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth'
  },
  {
    title: t('manage.page.properties.caseNo'),
    dataIndex: 'caseNo',
    key: 'caseNo'
  },
  {
    title: t('manage.page.properties.hisPatId'),
    dataIndex: 'hisPatId',
    key: 'hisPatId'
  },
  {
    title: t('manage.page.properties.hisVisId'),
    dataIndex: 'hisVisId',
    key: 'hisVisId'
  },
  {
    title: t('manage.page.properties.versionNum'),
    dataIndex: 'versionNum',
    key: 'versionNum'
  },
  {
    title: t('manage.page.properties.createDate'),
    dataIndex: 'createDate',
    key: 'createDate'
  },
  {
    title: t('global.operation.operation'),
    align: 'right',
    dataIndex: 'operation',
    key: 'operation'
  }
] as TableColumnType[]

// 校验
const check = (id: string) => {
  // loading.value = true
  // manageApi.check(id)
  //   .then(() => {
  //     loading.value = false
  //     message.success('校验成功')
  //     change()
  //   })
  //   .catch(() => {
  //     loading.value = false
  //   })
}
</script>

<template>
  <ContentBlock full class="content">
    <!-- 标题 -->
    <ContentHeader :title="$t('manage.page.title')"></ContentHeader>
    <!-- 评估列表 -->
    <ATable
      :dataSource="list"
      :columns="columns"
      :scroll="{ y: 'var(--table-height)' }"
      :pagination="false"
      :loading="loading"
    >
      <template #bodyCell="{ record, column, index }">
        <template v-if="column.dataIndex === 'index'">
          {{ index + 1 }}
        </template>
        <template v-if="column.dataIndex === 'operation'">
          <TableBtns :btns="getBtns(record.versionNum)"></TableBtns>
        </template>
        <template v-if="column.dataIndex === 'createDate'">
          {{ record.createDate ? dayjs(record?.createDate).format('YYYY-MM-DD HH:mm:ss') : '' }}
        </template>
      </template>
      <!-- 分页 -->
      <template #footer>
        <APagination
          size="small"
          v-model:pageSize="pager.size"
          v-model:current="pager.page"
          :total="pager.totalElements"
          show-size-changer
          show-quick-jumper
          :show-total="(total: number) => `总计 ${total} 条`"
        />
      </template>
    </ATable>
  </ContentBlock>
</template>

<style scoped lang="scss">
.content {
  --table-height: calc(100vh - 332px);
  overflow: auto;
}
</style>
