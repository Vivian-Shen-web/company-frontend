<template>
  <a-card class="form-card">
    <template #title>
      <SearchOutlined />
      5 辅助检查
    </template>

    <!-- 血液检查 -->
    <div class="sub-section-title">
      <ExperimentOutlined />
      血液检查
    </div>

    <!-- 第一行：全血细胞分析 + 肝功能 -->
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="5.1 全血细胞分析">
          <a-input
            v-model:value="auxiliaryExaminationData.cbc.content"
            placeholder="请输入详细描述或异常情况说明"
          />
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="5.2 肝功能">
          <a-input
            v-model:value="auxiliaryExaminationData.liverFunction.content"
            placeholder="请输入详细描述或异常情况说明"
          />
        </a-form-item>
      </a-col>
    </a-row>

    <!-- 第二行：肾功能 + 凝血功能 -->
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="5.3 肾功能">
          <a-input
            v-model:value="auxiliaryExaminationData.renalFunction.content"
            placeholder="请输入详细描述或异常情况说明"
          />
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="5.4 凝血功能">
          <a-input
            v-model:value="auxiliaryExaminationData.coagulationFunction.content"
            placeholder="请输入详细描述或异常情况说明"
          />
        </a-form-item>
      </a-col>
    </a-row>

    <!-- 影像学检查 -->
    <div class="sub-section-title">
      <CameraOutlined />
      影像学检查
    </div>

    <!-- 第三行：ECG心电图 + UCG超声心动图 -->
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="5.5 ECG心电图">
          <a-input
            v-model:value="auxiliaryExaminationData.ecg.content"
            placeholder="请输入详细描述或异常情况说明"
          />
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="5.6 UCG超声心动图">
          <a-input
            v-model:value="auxiliaryExaminationData.ucg.content"
            placeholder="请输入详细描述或异常情况说明"
          />
        </a-form-item>
      </a-col>
    </a-row>

    <!-- 第四行：胸部正侧位 + 肺功能 -->
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="5.7 胸部正侧位">
          <a-input
            v-model:value="auxiliaryExaminationData.chestXRay.content"
            placeholder="请输入详细描述或异常情况说明"
          />
        </a-form-item>
      </a-col>

      <a-col :span="12">
        <a-form-item label="5.8 肺功能">
          <a-input
            v-model:value="auxiliaryExaminationData.pulmonaryFunction.content"
            placeholder="请输入详细描述或异常情况说明"
          />
        </a-form-item>
      </a-col>
    </a-row>

    <!-- 第五行：动脉血气分析（单独一行） -->
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="5.9 动脉血气分析">
          <a-input
            v-model:value="auxiliaryExaminationData.arterialBloodGas.content"
            placeholder="请输入详细描述或异常情况说明"
          />
        </a-form-item>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
import { ref } from 'vue'
import { SearchOutlined, ExperimentOutlined, CameraOutlined } from '@ant-design/icons-vue'

const auxiliaryExaminationData = defineModel('auxiliaryExaminationData')

// 表单引用
const formRef = ref()

// 验证表单
const validateForm = async () => {
  try {
    if (formRef.value) {
      await formRef.value.validate()
    }
    return true
  } catch (error) {
    console.error('辅助检查表单验证失败:', error)
    return false
  }
}

// 暴露方法给父组件
defineExpose({
  validateForm
})
</script>
