<template>
  <a-card class="form-card">
    <template #title>
      <UserOutlined />
      1. 基本信息
    </template>
    <a-row :gutter="16">
      <!-- 1.1 姓名 -->
      <a-col :span="6">
        <a-form-item label="1.1 姓名">
          <a-input
            v-model:value="patientData.patientInfo.patientName"
            placeholder="请输入患者姓名"
          />
        </a-form-item>
      </a-col>
      <!-- 1.2 性别 -->
      <a-col :span="6">
        <a-form-item label="1.2 性别">
          <a-select v-model:value="patientData.patientInfo.sex" placeholder="请选择性别">
            <a-select-option value="男">男</a-select-option>
            <a-select-option value="女">女</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <!-- 1.3 年龄 -->
      <a-col :span="6">
        <a-form-item label="1.3 年龄">
          <a-input-number
            v-model:value="patientData.patientInfo.age"
            placeholder="请输入年龄"
            :min="0"
            :max="150"
            style="width: 100%"
          />
        </a-form-item>
      </a-col>
      <!-- 1.4 病案号 -->
      <a-col :span="6">
        <a-form-item label="1.4 病案号">
          <a-input v-model:value="patientData.patientInfo.caseNo" placeholder="请输入病案号" />
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <!-- 术前诊断 -->
      <a-col :span="12">
        <a-form-item label="1.5 术前诊断">
          <a-textarea
            v-model:value="patientData.result.basicInfo.preoperativeDiagnosis.content"
            :rows="1"
            placeholder="请输入术前诊断"
          />
        </a-form-item>
      </a-col>
      <!-- 拟行手术名称 -->
      <a-col :span="12">
        <a-form-item label="1.6 拟行手术名称">
          <a-textarea
            v-model:value="patientData.result.basicInfo.plannedSurgery.content"
            :rows="1"
            placeholder="请输入拟行手术名称"
          />
        </a-form-item>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <!-- 1.7 身高 -->
      <a-col :span="12">
        <a-form-item label="1.7 身高">
          <a-input-number
            v-model:value="patientData.patientInfo.height"
            placeholder="请输入身高"
            :min="0"
            :max="300"
            :precision="1"
            style="width: 100%"
          >
            <template #addonAfter>cm</template>
          </a-input-number>
        </a-form-item>
      </a-col>
      <!-- 1.8 体重 -->
      <a-col :span="12">
        <a-form-item label="1.8 体重">
          <a-input-number
            v-model:value="patientData.patientInfo.weight"
            placeholder="请输入体重"
            :min="0"
            :max="500"
            :precision="1"
            style="width: 100%"
          >
            <template #addonAfter>kg</template>
          </a-input-number>
        </a-form-item>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
import { defineExpose } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'

const patientData = defineModel('patientData')

// 验证表单
const validateForm = () => {
  const patientInfo = patientData.value.patientInfo
  if (!patientInfo.patientName) {
    return { valid: false, message: '请填写患者姓名' }
  }
  if (!patientInfo.sex) {
    return { valid: false, message: '请选择性别' }
  }
  if (!patientInfo.age) {
    return { valid: false, message: '请填写年龄' }
  }
  return { valid: true }
}

// 暴露方法给父组件
defineExpose({
  validateForm
})
</script>

<style lang="scss" scoped>
.form-card {
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

:deep(.ant-form-item-label) {
  font-weight: 600;
}

:deep(.ant-input),
:deep(.ant-select),
:deep(.ant-input-number),
:deep(.ant-textarea) {
  border-radius: 6px;
}

:deep(.ant-card-head) {
  background: linear-gradient(
    135deg,
    rgba(22, 119, 255, 0.05) 0%,
    rgba(22, 119, 255, 0.1) 50%,
    rgba(22, 119, 255, 0.05) 100%
  );
  border-bottom: 2px solid rgba(22, 119, 255, 0.2);
  border-radius: 8px 8px 0 0;
  transition: all 0.3s ease;
}

:deep(.ant-card-head:hover) {
  background: linear-gradient(
    135deg,
    rgba(22, 119, 255, 0.08) 0%,
    rgba(22, 119, 255, 0.15) 50%,
    rgba(22, 119, 255, 0.08) 100%
  );
  border-bottom-color: rgba(22, 119, 255, 0.3);
}

:deep(.ant-card-head-title) {
  background: linear-gradient(
    135deg,
    rgb(22, 119, 255) 0%,
    rgb(45, 140, 255) 50%,
    rgb(22, 119, 255) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

:deep(.ant-card-head-title .anticon) {
  font-size: 16px;
  color: rgb(22, 119, 255);
  -webkit-text-fill-color: rgb(22, 119, 255);
}
</style>
