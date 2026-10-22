<template>
  <a-card class="form-card">
    <template #title>
      <TeamOutlined />
      3 个人史
    </template>

    <!-- 3.1 过敏史 -->
    <a-row :gutter="16">
      <a-col :span="24">
        <a-form-item label="3.1 过敏史">
          <a-textarea
            v-model:value="personalHistoryData.allergyHistory.details"
            :rows="2"
            placeholder="请详细描述过敏史"
          />
        </a-form-item>
      </a-col>
    </a-row>

    <!-- 3.2-3.4 吸烟史、饮酒史、药物滥用史 -->
    <a-row :gutter="16">
      <!-- 上面一行：三个下拉选择框 -->
      <a-col :span="8">
        <a-form-item label="3.2 吸烟史">
          <a-select
            v-model:value="personalHistoryData.smokingHistory.hasHistory"
            placeholder="请选择吸烟史"
          >
            <a-select-option value="有">有</a-select-option>
            <a-select-option value="无">无</a-select-option>
            <a-select-option value="已戒">已戒</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="3.3 饮酒史">
          <a-select
            v-model:value="personalHistoryData.alcoholHistory.hasHistory"
            placeholder="请选择饮酒史"
          >
            <a-select-option value="有">有</a-select-option>
            <a-select-option value="无">无</a-select-option>
            <a-select-option value="已戒">已戒</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="3.4 药物滥用史">
          <a-select
            v-model:value="personalHistoryData.drugAbuseHistory.hasHistory"
            placeholder="请选择药物滥用史"
          >
            <a-select-option value="无">无</a-select-option>
            <a-select-option value="有">有</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <!-- 下面一行：三个详情输入框 -->
    <a-row :gutter="16">
      <!-- 吸烟史详情 -->
      <a-col :span="8">
        <a-form-item label="">
          <a-textarea
            v-model:value="personalHistoryData.smokingHistory.details"
            :rows="2"
            placeholder="请详细描述吸烟史"
          />
        </a-form-item>
      </a-col>
      <!-- 饮酒史详情 -->
      <a-col :span="8">
        <a-form-item label="">
          <a-textarea
            v-model:value="personalHistoryData.alcoholHistory.details"
            :rows="2"
            placeholder="请详细描述饮酒史"
          />
        </a-form-item>
      </a-col>
      <!-- 药物滥用史详情 -->
      <a-col :span="8">
        <a-form-item label="">
          <a-textarea
            v-model:value="personalHistoryData.drugAbuseHistory.details"
            :rows="2"
            placeholder="请详细描述药物滥用史"
          />
        </a-form-item>
      </a-col>
    </a-row>

    <!-- 3.5 晕动病史 & 3.6 手术麻醉史 -->
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="3.5 晕动病史">
          <a-select
            v-model:value="personalHistoryData.motionSicknessHistory.hasHistory"
            placeholder="请选择晕动病史"
          >
            <a-select-option value="有">有</a-select-option>
            <a-select-option value="无">无</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="3.6 手术麻醉史">
          <a-switch
            v-model:checked="personalHistoryData.surgeryAnesthesiaHistory.hasHistory"
            checked-children="有手术史"
            un-checked-children="无手术史"
          />
        </a-form-item>
      </a-col>
    </a-row>

    <!-- 手术麻醉史详细信息 -->
    <div
      v-if="personalHistoryData.surgeryAnesthesiaHistory.hasHistory"
      class="consciousness-sub-group"
    >
      <div class="sub-section-title">手术麻醉史详情</div>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-form-item label="3.6.1 历次手术名称">
            <a-textarea
              v-model:value="personalHistoryData.surgeryAnesthesiaHistory.surgeryName"
              :rows="1"
              placeholder="请输入历次手术名称"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="3.6.2 历次手术时间日期">
            <a-date-picker
              v-model:value="personalHistoryData.surgeryAnesthesiaHistory.surgeryDate"
              placeholder="请选择手术日期"
              style="width: 100%"
              format="YYYY/MM/DD"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="3.6.3 历次手术麻醉方式">
            <a-select
              v-model:value="personalHistoryData.surgeryAnesthesiaHistory.anesthesiaMethod"
              placeholder="请选择麻醉方式"
            >
              <a-select-option value="全身麻醉">全身麻醉</a-select-option>
              <a-select-option value="椎管内麻醉">椎管内麻醉</a-select-option>
              <a-select-option value="神经阻滞">神经阻滞</a-select-option>
              <a-select-option value="局部麻醉">局部麻醉</a-select-option>
              <a-select-option value="其他">其他</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>

      <!-- PONV病史 -->
      <div class="sub-section-title">3.6.4 PONV病史</div>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item>
            <a-input
              v-model:value="personalHistoryData.surgeryAnesthesiaHistory.ponvHistory.nausea"
            >
            </a-input>
          </a-form-item>
        </a-col>
      </a-row>
    </div>
  </a-card>
</template>

<script setup>
import { TeamOutlined } from '@ant-design/icons-vue'

const personalHistoryData = defineModel('personalHistoryData')

// 验证表单
const validateForm = () => {
  const errors = []

  // 如果有过敏史，必须填写详情
  if (
    personalHistoryData.value.allergyHistory.hasAllergy &&
    !personalHistoryData.value.allergyHistory.description?.trim()
  ) {
    errors.push('请填写过敏史详情')
  }

  // 如果有吸烟史，必须填写详情
  if (
    personalHistoryData.value.smokingHistory.status !== '无' &&
    !personalHistoryData.value.smokingHistory.description?.trim()
  ) {
    errors.push('请填写吸烟史详情')
  }

  // 如果有饮酒史，必须填写详情
  if (
    personalHistoryData.value.alcoholHistory.status !== '无' &&
    !personalHistoryData.value.alcoholHistory.description?.trim()
  ) {
    errors.push('请填写饮酒史详情')
  }

  // 如果有药物滥用史，必须填写详情
  if (
    personalHistoryData.value.drugAbuseHistory.status === '有' &&
    !personalHistoryData.value.drugAbuseHistory.description?.trim()
  ) {
    errors.push('请填写药物滥用史详情')
  }

  // 如果有手术史，必须填写手术名称和麻醉方式
  if (personalHistoryData.value.surgeryAnesthesiaHistory.hasSurgery) {
    if (!personalHistoryData.value.surgeryAnesthesiaHistory.surgeryName?.trim()) {
      errors.push('请填写手术名称')
    }
    if (!personalHistoryData.value.surgeryAnesthesiaHistory.anesthesiaMethod) {
      errors.push('请选择麻醉方式')
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// 暴露方法给父组件
defineExpose({
  validateForm
})
</script>

<style scoped>
.form-card {
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

.form-card :deep(.ant-card-head-title) {
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.sub-section-title {
  font-weight: 600;
  color: #1890ff;
  margin: 16px 0 12px 0;
  padding: 8px 12px;
  background: #f0f8ff;
  border-left: 4px solid #1890ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.consciousness-sub-group {
  margin-top: 16px;
  padding: 16px;
  background: #fafafa;
  border-radius: 6px;
  border: 1px solid #e8e8e8;
}

:deep(.ant-form-item-label > label) {
  font-weight: 500;
  color: #333;
}

:deep(.ant-input),
:deep(.ant-select-selector),
:deep(.ant-input-number) {
  border-radius: 6px;
}

:deep(.ant-input:focus),
:deep(.ant-select-focused .ant-select-selector),
:deep(.ant-input-number:focus) {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}
</style>
